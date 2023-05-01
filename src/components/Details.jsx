import React,{useEffect,useState} from 'react'
import { useFirebase } from '../Firebase';
import { useParams } from 'react-router-dom'; 
import { VStack, Box, Spinner } from '@chakra-ui/react';
const Details = () => {
  
    const firebase=useFirebase();
    const[det,setDet]=useState();
    const[load,setLoad]=useState(true);
    const params=useParams();
    const order_id=params.id;
    const dd=new Date();
    const deldate=dd.getTime();
    useEffect(()=>{
      firebase.details(order_id).then((i)=>setDet(i.data()));
      setLoad(false);
    },[]);
    if(load==true||det==null)
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
    const date=new Date(det.Order_date.seconds * 1000 + det.Order_date.nanoseconds/1000000);
    const odate=date.getTime();
    const d=(deldate-odate)/(1000*60*60*24);
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-10">
        <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Delivering To-</div>
        <p class="text-gray-700 text-base">
        <div class="p-1">{det.Customer_name}</div>
        <div class="p-1">{det.address}, {det.city}, {det.pin}, {det.country}</div>
        <div class="p-1">Phone Number- {det.phone}</div>
        <div class="p-1">Order Date- {date.toDateString()}</div>
        <div class="p-1">Amount Paid- {det.Amount_paid}</div>
        {
          d<=2?<div class="p-1">Status- Order Received</div>
          :d<=5?<div class="p-1">Status- Out for Delivery</div>
          :<div class="p-1">Status- Delivered</div>
        }         
        </p>
      </div>
      </div>
  )
    }
}

export default Details;