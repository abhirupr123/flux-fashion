import { instance } from "./server.js";
import {initializeApp} from 'firebase/app';
import {doc, initializeFirestore, setDoc} from "firebase/firestore";
import crypto from "crypto";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "flux-fashion",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  const fapp = initializeApp(firebaseConfig);

const db=initializeFirestore(fapp,{
    experimentalForceLongPolling:true,
    useFetchStreams: false,
    });
const us=Math.random().toString()+"";
export const  checkout=async(req,res)=>{
    const options = {
        amount: Number((req.body.amount)*100),  
        currency: "INR"
    };
    await setDoc(doc(db,"payments",us),{
        User_name:req.body.user.displayName,
        User_email:req.body.user.email
    });
    const order=await instance.orders.create(options);
    res.status(200).json({
        success:true,
        order
    });
};

export const payment=async(req,res)=>{
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=req.body;
    const body=razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET)
                                  .update(body.toString())
                                  .digest('hex');
  if(expectedSignature === razorpay_signature)
   {
          await setDoc(doc(db,"payments",us),{
            Payment_id:razorpay_payment_id,
            Order_id:razorpay_order_id
          },{merge:true});
       res.redirect(`http://localhost:5173/success?payment=${razorpay_payment_id}&order=${razorpay_order_id}`);
   }
   else
   {
     res.status(400).json({
     success:false,  
    });
   }
};