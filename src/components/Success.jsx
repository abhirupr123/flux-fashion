import React from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import { useFirebase } from '../Firebase';
const Success = () => {
  const[search,setSearch]=useSearchParams();
  const payment=search.get('payment');
  const order=search.get('order');
  const firebase=useFirebase();
  var date=new Date();
  var del=date.getDate() + 5;
  var month=date.getMonth();
  var year=date.getFullYear();
  if(month==2)
  {
    if(year%4==0)
    {
      if(del>29)
      {
        del=del-29;
        month=3;
      }
    }
    else
    {
      if(del>28)
      {
        del=del-28;
        month=3;
      }
    }
  }
  else if(month==1||month==3||month==5||month==7||month==8||month==10||month==12)
  {
    if(del>31)
    {
      del=del-31;
      month+=1;
    }
  }
  else
  {
    if(del>30)
    {
      del=del-30;
      month+=1;
    }
  }
  if(month>12)
  {
    month=1;
    year+=1;
  }
  const dd=del+"/"+month+"/"+year;
    return (
      <>
      <h1 class="ml-[525px] py-10 text-2xl font-bold">Thank you for choosing Flux Fashion!</h1>
      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-10">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Order ID</div>
    <p class="text-gray-700 text-base">
      {order}
    </p>
  </div>
  </div>
  <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-10">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Payment ID</div>
    <p class="text-gray-700 text-base">
      {payment}
    </p>
  </div>
  </div>
  <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-10">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Delivery By</div>
    <p class="text-gray-700 text-base">
      {dd}
    </p>
  </div>
  </div>
  <Link to='/'>
  <button
      class="ml-[535px] rounded-lg bg-indigo-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-auto my-10"
      data-ripple-light="true">
      Back to home
    </button>
    </Link>
    </>
    )
}

export default Success;