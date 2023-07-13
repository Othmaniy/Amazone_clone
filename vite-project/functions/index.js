require("dotenv").config();
const functions =require("firebase-functions")
const express =require("express");
const cors =require("cors");
// const stripe =require('stripe')("sk_test_51NSgYbHZp2xvCvP46e0TquvydQjcd1pGUodgyjgkhOPO8LECK1qM7vYwVCseCeGsz1tC8O8HGYjDRMqR5Fm1wkV000mIelGMZL");

const stripe =require('stripe')(process.env.STRIP_KEY)

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get('/',(request,response)=>response.status(200).send('hello world'));

app.post('/payments/create',async(request,response)=>{
    const total =request.query.total;
    try{  
    console.log('Payment Request Recieved for this amount >>> ', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
});
response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
    }

    catch(error){
        console.log(error);
    }
    
})

app.listen(3000,(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("listening");
    }
})