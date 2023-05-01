import React, { useState }  from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useFirebase} from '../Firebase';


const Signup = () => {
  
    const firebase = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName]=useState('');
    const submit = async ()=>{
        const res=await firebase.signup(email,password);
        console.log(res);
        await firebase.update(name);
        await firebase.upload(res.user.displayName,email);
        if(res.user.accessToken!=null)
        {
            alert("Account Created Successfully");
            window.location='/';
        }
        else alert("Email already in use");
    }

    return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Welcome to Flux Fashion.</h1>
      <p class="leading-relaxed mt-4">Get started and explore our wide range of formal, casual and ethnic wear collections along with exciting offers. Create your account now.</p>
    </div>
    <div 
    class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
        <input onChange={(e)=>setName(e.target.value)}
        type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}
        value={email} 
        id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Set Password</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}
        value={password}
        id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button onClick={submit}  class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
      <Link to='/signin'>
      <p class="text-xs text-gray-500 mt-3">Already have an account? Sign In.</p>
      </Link>
    </div>
  </div>
</section>
  )
}

export default Signup;