import React, {useEffect, useState} from 'react';
import {useFirebase} from '../Firebase';
import { Link } from 'react-router-dom';

const Cardnew = ({category,name,price,img,id}) => {

  const[url, setUrl]=useState(null);
  const firebase=useFirebase();

  useEffect(()=>{
    firebase.url(img).then((image)=>setUrl(image));
  },[])
  
  return (
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <Link to={`/product/newarrivals/${id}`} class="block relative rounded overflow-hidden transition duration-150 hover:scale-125">
          <img alt="ecommerce" class="object-cover object-center w-54 h-96 block" src={url} />
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{name}</h2>
          <p class="mt-1">₹ {price} {`(40% off)`}</p>
        </div>
      </div>
  )
}

export default Cardnew;