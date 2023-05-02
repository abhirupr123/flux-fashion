import {createContext, useContext, useEffect, useState} from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    updateProfile
} from "firebase/auth";
import {initializeFirestore, addDoc, setDoc, collection, getFirestore, getDocs, doc, getDoc, updateDoc, query, where, collectionGroup} from 'firebase/firestore';
import {getDownloadURL, getStorage, ref} from 'firebase/storage';
const FirebaseContext= createContext(null);
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const dbb=initializeFirestore(app,{
    experimentalForceLongPolling:true,
    useFetchStreams: false,
  })

  const st=getStorage(app);

export const useFirebase= () =>useContext(FirebaseContext); 
export const FirebaseProvider=(props)=>{
    const signup = (email, password)=> createUserWithEmailAndPassword(auth, email, password);
    
    const signin=(email, password)=> signInWithEmailAndPassword(auth, email, password);

    const signout=()=>signOut(auth);

    const reset=(email)=>sendPasswordResetEmail(auth,email);
    const [user, setUser]=useState(null);
    const update=(name)=>updateProfile(auth.currentUser,{
        displayName:name
    });

    const upload=async(name,email)=>{
        await addDoc(collection(dbb,'users'),{
            name:name,
            email:email
        });
    }
    //const id=Math.random().toString()+"";
    const orders=async(name,email,phone,address,city,country,pin,username,useremail,id)=>{
        await setDoc(doc(dbb,'orders',id),{
            User_name:username,
            User_email:useremail,
            Customer_name:name,
            Customer_email:email,
            phone:phone,
            address:address,
            city:city,
            country:country,
            pin:pin
        });
    };
    const product=async(products,total,dd,id)=>{
        await setDoc(doc(dbb,'orders',id),{
            Products:products,
            Amount_paid:total,
            Order_date:dd
        },{merge:true});
    };

    onAuthStateChanged(auth, (user)=>{
          if(user)  setUser(user);
          else setUser(null);
       }
    )
 const logged= user ? true : false;

       const shop= ()=>{
        return getDocs(collection(dbb,'new arrivals'));
       }

       const prod=async(email,id)=>{
        const prodref=query(collection(dbb,"orders"),where("User_email","==",email));
        const prod=await getDocs(prodref);
        return prod;
       }

       const details=async(id)=>{
        const prod=await getDoc(doc(dbb,'orders',id));
        return prod;
       }
       
       const pay=async(email)=>{
        const payref=query(collection(dbb,'payments'),where("User_email","==",email));
        const paym=await getDocs(payref);
        return paym;
       }
       const best=()=>{
        return getDocs(collection(dbb, 'best sellers'));
       }

       const url=(path)=>{
        return getDownloadURL(ref(st,path));
       }

       const getarrival=async(id)=>{
            const docref=doc(dbb,'new arrivals',id);
            const arrival=await getDoc(docref);
            return arrival;
       }

       const getbest=async(id)=>{
        const docref=doc(dbb,'best sellers',id);
        const best=await getDoc(docref);
        return best;
   }

   const review=async(name, email, id, product, review)=>{
        await addDoc(collection(dbb,"reviews"),{
        name:name,
        email:email,
        Product_id:id,
        product:product,
        review:review
    });
   }

   const contact=async(name,email,query)=>{
    await addDoc(collection(dbb,"queries"),{
        User_name:name,
        User_email:email,
        Message:query
    });
   };

   const news=async(name,email)=>{
    await addDoc(collection(dbb,"newsletter"),{
        User_name:name,
        User_email:email
    });
   };

    return(
        <FirebaseContext.Provider value={{signup, signin, contact,prod,details,
        logged, signout, reset, upload, update, user, product,news,pay,
        shop, url, best, getarrival, getbest, review,orders}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}