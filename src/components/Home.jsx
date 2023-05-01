import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../Firebase';
const Home = () => {
  const firebase=useFirebase();
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');

  const submit=async()=>{
    await firebase.news(name,email);
    alert('Thank you for subscribing to our newsletter. You will now receive latest updates about our products.');
  }
  return (
    
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-20 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Summer styles are finally here.</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">The new arivals have well and truly arrived. Check out the latest options and discounts from our wide range of summer collection while they're still in stock.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w- object-cover h-96 object-center block" src="src/assets/yfm2apdj.png"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="max-w-lg h-96 object-cover object-center block" src="src/assets/pexels-photo-1043473.jpeg"/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="max-w-xl h-80 object-cover object-center block" src="https://www.myraymond.com/assets/images/fresh_arriva_sale.jpg"/>       
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="max-w-3xl h-80 object-cover object-center block" src="https://www.myraymond.com/media/mfy/mfy_desk.webp"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-[396px] h-80 object-cover object-center block" src="https://rukminim1.flixcart.com/image/612/612/l5iid8w0/shirt/u/q/s/38-xmss12138-b8-parx-original-imagg6f5fuabxecc.jpeg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2 ">
          <img alt="gallery" class="w-88 h-80 object-cover object-center block" src="https://rukminim1.flixcart.com/image/612/612/kk2wl8w0/shirt/d/2/i/m-5ns14u008i-903-united-colors-of-benetton-original-imafzg6eppahekkd.jpeg"/>
        </div>
      </div>
    </div>
  </div>
  <Link to={"/shop"}>
  <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Shop Now</button>
  </Link>
  <h1 class="flex justify-center text-5xl text-black pb-4 pt-12 font-poppins">DEAL OF THE DAY</h1>
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="src/assets/shop_40_desktop_v2.webp"/>
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">On Formal Wear</h2>
        <p class="leading-relaxed text-base">Get flat 40% off during the Clearance Sale on new arrivals of shirts, suits and other Formal and Office Wear. Use Code WELCOME40</p>
        <Link to='/shop'>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Shop Now</button>
        </Link>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="src/assets/2_v2.webp"/>
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">On Casual Wear</h2>
        <p class="leading-relaxed text-base">Browse Ethnic and Casual Wear from our collection of Best Sellers from top brands starting from ₹500.</p>
        <Link to='/shop'>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Shop Now</button>
        </Link>
      </div>
    </div>
    </div>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Subscribe to our newsletter.</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Want product news and updates? Sign up for our newsletter and never miss out on weekly articles.</p>
    </div>
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div class="relative flex-grow w-full">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
        <input onChange={(e)=>setName(e.target.value)}
        type="text" id="full-name" name="full-name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative flex-grow w-full">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input onChange={(e)=>setEmail(e.target.value)}
        type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button onClick={submit}
      class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Subscribe</button>
    </div>
  </div>
</section>
</section>

  )
}

export default Home;