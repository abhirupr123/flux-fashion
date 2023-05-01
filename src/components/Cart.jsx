import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, remove, amount} from '../redux/slice';
import {Link} from 'react-router-dom';
import { useFirebase } from '../Firebase'; 
import axios from 'axios';
const Cart = () => {
  const firebase=useFirebase();
  const[name, setName]=useState('');
  const[email, setEmail]=useState('');
  const[address, setAddress]=useState('');
  const[city, setCity]=useState('');
  const[country, setCountry]=useState('');
  const[pin, setPin]=useState('');
  const[code, setCode]=useState('');
  const[phone, setPhone]=useState('');
  const cart=useSelector(state=>(state).cart);
  const dispatch=useDispatch();
  const id=Math.random().toString()+"";
  const order=async(e)=>{
    e.preventDefault();
    await firebase.orders(name,email,phone,address,city,country,pin,firebase.user.displayName,firebase.user.email,id);
    alert('Contact information added successfully');
  }
  var dd=new Date();
  const checkout=async(amount)=>{ 
    const user=firebase.user;
    console.log(user);
    await firebase.product(cart.prod,cart.total,dd,id);
    const {data:{key}}=await axios.get("http://localhost:4000/api/getkey");
    const {data:{order}}=await axios.post("http://localhost:4000/api/checkout",{
        amount,user
    });
    const options = {
      "key": key, 
      "amount": amount, 
      "currency": "INR",
      "name": "Flux Fashion",
      "description": "Order Checkout Page",
      "image": "src/assets/Screenshot (9).png",
      "order_id": order.id, 
      "callback_url": "http://localhost:4000/api/payment",
      "prefill": {
          "name": name,
          "email": email,
          "contact":phone
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#5C51F0"
      }
  };
  const rzp1 = new window.Razorpay(options);
      rzp1.open();
  };
  
  if(cart.prod.length==0)
  return(
    <section class="text-gray-600  pb-10 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Your shopping cart is empty. Pick up where you left off.</h1>
      <Link to='/shop'>
      <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Shop Now</button>
      </Link>
    </div>
  </div>
</section>
  )
  return (
  <div class="container p-8 mx-auto mt-12">
    <div class="w-full overflow-x-auto">
      
        <h3 class="text-xl my-2 flex font-bold tracking-wider justify-start">Shopping Cart</h3>
        <h3 class="text-xl my-2 flex font-bold tracking-wider justify-end">{cart.prod.length} items</h3>

      <table class="w-full shadow-inner">
        <thead>
          <tr class="bg-gray-100">
            <th class="px-6 py-3 font-bold whitespace-nowrap">Image</th>
            <th class="px-6 py-3 font-bold whitespace-nowrap">Product</th>
            <th class="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
            <th class="px-6 py-3 font-bold whitespace-nowrap">Price</th>
            <th class="px-6 py-3 font-bold whitespace-nowrap">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.prod.map((i)=>(          
          <tr>
            <td>
              <div class="flex justify-center">
                <img
                  src={i.image}
                  class="object-cover h-28 w-28 rounded-2xl"
                  alt="image"
                />
              </div>
            </td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
              <div class="flex flex-col items-center justify-center">
                <h3>{i.name}</h3>
              </div>
            </td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
              <div class="flex justify-center">
                <button onClick={()=>dispatch(decrement(i.id))}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline-flex w-6 h-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <p
                  class="w-12 text-center bg-gray-100 outline-none"
                >{i.qty}</p>
                <button onClick={()=>dispatch(increment(i.id))}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline-flex w-6 h-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </td>
            <td class="p-4 px-6 text-center whitespace-nowrap">{i.price}</td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
              <button onClick={()=>dispatch(remove(i.id))}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      <div class="lg:w-2/4">
        <div class="mt-4">
          <div class="px-4 py-4 rounded-md">
            <label for="coupon code" class="font-semibold text-gray-600">Coupon Code</label>
            <input
              type="text"
              placeholder="WELCOME40"
              class="
                w-full
                px-2
                py-2
                border border-blue-600
                rounded-md
                outline-none"
                onChange={(e)=>setCode(e.target.value)}/>
                {
                  code=="WELCOME40"?
                  <>
                  <span class="block text-green-600">Coupon code applied successfully</span>
                  <button onClick={()=>dispatch(amount())}
              class="
                px-6
                py-2
                mt-2
                text-sm text-indigo-100
                bg-indigo-600
                rounded-md
                hover:bg-indigo-700">Apply</button>
                </>
                  :<span class="block text-red-600">Enter a valid coupon code to proceed</span>
                }
            
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="py-4 rounded-md shadow">
          <h3 class="text-xl font-bold text-blue-600">Order Summary</h3>
          <div class="flex justify-between px-4">
            <span class="font-bold">Subtotal</span>
            <span class="font-bold">₹ {cart.subtotal}</span>
          </div>
          <div class="flex justify-between px-4">
            <span class="font-bold">Discount</span>
            <span class="font-bold text-red-600">-₹ {cart.discount}</span>
          </div>
          <div class="flex justify-between px-4">
            <span class="font-bold">Sales Tax</span>
            <span class="font-bold">₹ {cart.gst}</span>
          </div>
          <div
            class="
              flex
              items-center
              justify-between
              px-4
              py-2
              mt-3
              border-t-2">
            <span class="text-xl font-bold">Total</span>
            <span class="text-2xl font-bold">₹ {cart.total}</span>
          </div>
        </div>
      </div>
      <div class="leading-loose">
        <form onSubmit={order}
        class="w-full p-10 bg-white rounded shadow-xl">
        <p class="text-gray-800 font-medium">Contact information</p>
        <div class="">
        <label class="block text-sm text-gray-00" for="cus_name">Name</label>
        <input onChange={(e)=>setName(e.target.value)}
        class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name"/>
        </div>
        <div class="mt-2">
      <label class="block text-sm text-gray-600" for="cus_email">Email</label>
      <input onChange={(e)=>setEmail(e.target.value)} 
      class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email"/>
        </div>
        <div class="mt-2">
      <label class=" block text-sm text-gray-600" for="cus_email">Phone Number</label>
      <input onChange={(e)=>setPhone(e.target.value)}
      class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Phone Number" aria-label="Email"/>
    </div>
      <div class="mt-2">
      <label class=" block text-sm text-gray-600" for="cus_email">Address</label>
      <input onChange={(e)=>setAddress(e.target.value)}
      class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Address" aria-label="Email"/>
    </div>
    <div class="mt-2">
      <label class="hidden text-sm text-gray-600" for="cus_email">City</label>
      <input onChange={(e)=>setCity(e.target.value)} 
      class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email"/>
    </div>
    <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="hidden text-sm text-gray-600" for="cus_email">Country</label>
      <input onChange={(e)=>setCountry(e.target.value)}
      class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email"/>
    </div>
    <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
      <label class="hidden text-sm text-gray-600" for="cus_email">Pin Code</label>
      <input onChange={(e)=>setPin(e.target.value)}
      class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="Pin Code" aria-label="Email"/>
    </div>
    <div class="mt-4">
      <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Submit</button>
    </div>
  </form>
</div>
      <div class="mt-4">
        <button onClick={()=>checkout(cart.total)}
          class="
            w-full
            py-2
            text-center text-white
            bg-blue-500
            rounded-md
            shadow
            hover:bg-blue-600">Proceed to Checkout</button>
      </div>
    </div>
  </div>
 )
}
export default Cart;
