import React, { useState, useEffect } from 'react'
import { useFirebase } from '../Firebase';
import Card from './Card';
import { VStack, Box, Spinner } from '@chakra-ui/react';
const Account = () => {
  
  const firebase=useFirebase();
  const[pro,setPro]=useState([]);
  const[mo,setMo]=useState([]);
  const[load,setLoad]=useState(true);
  useEffect(() => {
    if(firebase.user!=null)
    {
    firebase.prod(firebase.user.email).then((i)=>setPro(i));
    firebase.pay(firebase.user.email).then((m)=>setMo(m));
    setLoad(false);
    }
}, [firebase.user]);


  if(load==true)
  {
    return(
            <VStack h="90vh" justifyContent={"center"}>
              <Box transform={"scale(3)"}>
              <Spinner size={"xl"}/>
              </Box>
          </VStack>
          )
  }
  
  else
  {
  if(pro.length<1)
  {
    return(
        <>
        <h1 class="ml-[600px] text-2xl pt-12 pb-6 font-bold font-poppins">
            Welcome {firebase.user.displayName}!
        </h1>
        <h1 class="ml-[370px] pb-20 pt-16 text-2xl font-bold font-poppins">You haven't made any purchases. Get your first product now !</h1>
        </>
    );
}
else
{
    const ref=pro.docs.map((i)=>({
        order_id:i.id,
        ...i.data()
    }));
    
    return(  
    <>
    <h1 class=" text-center text-4xl pt-12 pb-6 font-bold font-poppins">
            Welcome {firebase.user.displayName}!
    </h1>
    <h1 class=" text-center text-2xl pt-6 pb-20 font-poppins">
            View your order history, track your orders and get delivery status updates.
    </h1>
    <div class="flex flex-wrap -m-4">
    {ref.map((i)=>{
      return i.Products.map((j)=>{
        return <Card key={j.id} 
          img={j.image}
          name={j.name}
          qty={j.qty}
          price={j.price}
          order_id={i.order_id}
         />
      })})};
      </div>
    </>
    )
    }
}
}

export default Account;
