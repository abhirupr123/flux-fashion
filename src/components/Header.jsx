import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useFirebase} from '../Firebase';
const Header = () => {

const firebase=useFirebase();

const submit= async ()=>{
    await firebase.signout();
    alert('Signed Out Successfully.');
    window.location='/';
}

if(firebase.logged==false)

  return (
    
    <header class="text-gray-600 body-font bg-amber-300">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="src/assets/Screenshot (9).png" class="w-14 h-11 rounded-full"/> 
      <span class="ml-3 text-xl">Flux Fashion</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to={"/"} class="mr-5 hover:text-gray-900">Home</Link>
      <Link to={"/shop"} class="mr-5 hover:text-gray-900">Shop</Link>
      <Link to={"/contact"} class="mr-5 hover:text-gray-900">Contact Us</Link>
      
    </nav>
    <Link to='/signin'>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign In
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </Link>
  </div>
</header>

  )

  else
  return (

    <header class="text-gray-600 body-font bg-amber-300">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="src/assets/Screenshot (9).png" class="w-14 h-11 rounded-full"/>
        <span class="ml-3 text-xl">Flux Fashion</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link to={"/"} class="mr-5 hover:text-gray-900">Home</Link>
        <Link to={"/shop"} class="mr-5 hover:text-gray-900">Shop</Link>
        <Link to={"/contact"} class="mr-5 hover:text-gray-900">Contact Us</Link>
        <Link to={"/cart"} class="mr-5 hover:text-gray-900">Cart</Link>
        <Link to={"/myaccount"} class="mr-5 hover:text-gray-900">My Account</Link>
      </nav>
      <button onClick={submit} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign Out
      </button>
    </div>
  </header>    

  )
}

export default Header;
