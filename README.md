# Overview
Flux Fashion is an E-Commerce fashion website for mens' clothing made using Vite-React and Firebase using the Firestore Database for storage of product details, user information, payment details and their retrieval. Firebase Authentication is implemented for user Sign-In and new user registrations. The Frontend Design is developed using Tailwind CSS and Chakra-UI. Redux and Redux-Toolkit is used for the Shopping Cart. Razorpay is integrated as the Payment Gateway for transactions through a backend server implemented with NodeJS and Express.
</br>
# Tech Stack
 - **Client**- Vite-React, Tailwind CSS, Chakra UI, Redux
 - **Server**- Node, Express, Firebase
# Installing Dependencies
For the client side, install Vite with React as template-
```
npm create vite@latest flux-fashion --template react
```
Now install the following required React dependencies-
```
npm i react-router-dom react-redux @reduxjs/toolkit axios
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```
To install Tailwind CSS, intall the following dependencies-
```
npm install -D tailwindcss
npx tailwindcss init
```
For the complete Tailwind CSS documentation, visit [here](https://tailwindcss.com/docs/installation)
</br>
Since we are using Firebase Firestore as database, you must create a Firebase account to use Firebase features. The steps involved to install Firebase are
 - Create a Firebase project and register your app
 - Install the SDK and initialize Firebase
 ```
 npm install firebase
 ```
 - Initialize Firebase in your app and create a Firebase App object
 ```
 import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
```
For the complete Firebase documentation, visit [here](https://firebase.google.com/docs/web/setup)<br>
We are using Razorpay Payment Gateway through server. For server side create a separate folder and install the following dependencies-
```
npm init
npm i express dotenv nodemon cors razorpay firebase
```
For the complete Razorpay documentation, visit [here](https://razorpay.com/docs/payments/server-integration/nodejs/payment-gateway/build-integration/)
</br>
# Home Page
All the recent offers and discounts are listed along with a choice for users to subscribe to weekly content.
</br></br></br>
![Screenshot (12)](https://user-images.githubusercontent.com/111787164/236074725-f8f59300-4f8f-44d3-8081-d1b33622aa84.png)
</br></br></br>
![Screenshot (13)](https://user-images.githubusercontent.com/111787164/236074749-9749569c-cb68-4cfc-9ac5-666ca556f758.png)
</br></br></br>
![Screenshot (14)](https://user-images.githubusercontent.com/111787164/236074756-06a1d6d8-dc76-4d0c-9647-1ff0c5c2a2f4.png)
</br></br></br>
# Shop Page
All the available items are listed in this page.
</br></br></br>
![Screenshot (16)](https://user-images.githubusercontent.com/111787164/236622140-30ec7eb1-03f3-46ff-9345-43f501a6f699.png)
![Screenshot (17)](https://user-images.githubusercontent.com/111787164/236622142-eb045780-6d81-4b4e-9a7d-e58c0c3bb363.png)
</br></br></br>
# Sign-Up Page
New users can sign-up using their email and password.
</br></br></br>
![Screenshot (19)](https://user-images.githubusercontent.com/111787164/236622249-5ee4cc06-e47b-43a6-82a5-c027022f2430.png)
</br></br></br>
# Sign-In Page
Existing users can sign-in by their registered email. If they forget their password, email verification is enabled using Firebase through which users can sign in.
</br></br></br>
![Screenshot (18)](https://user-images.githubusercontent.com/111787164/236622275-1ad2e355-7a0c-4051-938d-7f7f168d179b.png)
</br></br></br>
# Preview Page
Products are displayed specifying the different sizes, colours available and any discount applicable or not. Users can also write reviews if they wish.
</br></br></br>
![Screenshot (20)](https://user-images.githubusercontent.com/111787164/236622692-836591f3-53b3-4e5c-890a-985c23d00579.png)
</br></br></br>
# Cart Page
We can set the quantity of the selected products or remove them. Price is calculated after after applying discount Promo Code.
</br></br></br>
![Screenshot (21)](https://user-images.githubusercontent.com/111787164/236622813-52c2a18a-a0c5-4f71-b6d8-959d5f093918.png)
</br></br></br>
Users can enter the delivery information and proceed to checkout
</br></br></br>
![Screenshot (22)](https://user-images.githubusercontent.com/111787164/236622917-d7e033d9-7dfd-431f-b2a7-dd90c0bfa707.png)
</br></br></br>
# Payment Page
Razorpay Payments Page is opened on checkout. Users can select any preferred mode of payment.
</br></br></br>
![Screenshot (23)](https://user-images.githubusercontent.com/111787164/236623068-5a3d9b6a-f30a-4510-bb44-0467db671064.png)
</br></br></br>
# Success Page
On successful payment, the order id along with payment id is displayed with the expected delivery date.
</br></br></br>
![Screenshot (24)](https://user-images.githubusercontent.com/111787164/236623153-e3ae9e11-6b1c-4e4a-8582-2072874d2a79.png)
</br></br></br>
# Account Page
Complete history of ordered products is shown in the My Accounts Page.
</br></br></br>
![Screenshot (25)](https://user-images.githubusercontent.com/111787164/236623238-02cf82c9-db7d-42da-98cb-66149ce38bf8.png)
</br></br></br>
