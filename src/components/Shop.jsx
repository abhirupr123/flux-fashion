import React, {useEffect, useState} from 'react';
import {useFirebase} from '../Firebase';
import Cardnew from './Cardnew';
import Cardbest from './Cardbest';

const Shop = () => {
  
  const firebase=useFirebase();

  const [arrivals, setArrivals]=useState([]);
  const [sellers, setSellers]=useState([]);
    useEffect(()=>{
    firebase.shop().then((mer)=>setArrivals(mer.docs));
    firebase.best().then((sell)=>setSellers(sell.docs));
  },[]);
  
console.log(arrivals);
return (

  <section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto">
    <h1 class="flex justify-center text-5xl text-black pb-11 font-poppins">NEW ARRIVALS</h1>
    <div class="flex flex-wrap -m-4">
    {arrivals.map((arrival)=>(      
    <Cardnew 
      category={arrival.data().category}
      name={arrival.data().name}
      price={arrival.data().price}
      img={arrival.data().image}
      id={arrival.id}
    />
    ))}
      </div>
      </div>
    <div class="container px-5 pb-12 mx-auto">
    <h1 class="flex justify-center text-5xl text-black py-12 font-poppins">BEST SELLERS</h1>
    <div class="flex flex-wrap -m-4">
      {sellers.map((bs)=>(
        <Cardbest 
        categoryb={bs.data().category}
        nameb={bs.data().name}
        priceb={bs.data().price}
        im={bs.data().image}
        idb={bs.id}/>
      ))}
      </div>
      </div>
    </section>
)
};

export default Shop;