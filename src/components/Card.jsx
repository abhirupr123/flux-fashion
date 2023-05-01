import React from "react";
import { Link } from "react-router-dom";
const Card=({img,name,qty,price,order_id})=>{
  return(
      <div class="lg:w-1/4 md:w-1/2 p-4">
      <div class="w-56 mx-14 rounded overflow-hidden shadow-lg">
      <img class="w-54 h-96" src={img} alt="order"/>
      <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{name}</div>
    <p class="text-gray-700 text-base">
      Quantity - {qty} Price - ₹ {price}
    </p>
  </div>
      <Link to={`/details/${order_id}`}>
        <button
          className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true">
          More Details
        </button>
        </Link>
      </div>
      </div>
    )
    }

    export default Card;


    