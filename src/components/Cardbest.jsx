import React, {useEffect, useState} from 'react'
import {useFirebase} from '../Firebase';
import { Link } from 'react-router-dom';

const Cardbest = ({categoryb,nameb,priceb,im,idb}) => {

  const firebase=useFirebase();

  const[urlb, setUrlb]=useState();
  useEffect(()=>{
    firebase.url(im).then((imb)=>setUrlb(imb));
  },[]);

  return (
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to={`/product/bestsellers/${idb}`} class="block relative rounded overflow-hidden transition duration-150 hover:scale-125">
          <img alt="ecommerce" class="object-cover object-center w-54 h-96 block" src={urlb}/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{categoryb}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{nameb}</h2>
          <p class="mt-1">₹ {priceb}</p>
        </div>
      </div>
  )
}

export default Cardbest;