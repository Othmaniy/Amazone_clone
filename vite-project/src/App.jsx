import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header";
import Home from "./component/home";
import Checkout from "./component/Checkout";
import Login from "./component/Login";
import { useStateValue } from "./component/StateProvider";
import { auth } from "./component/Firebase";
import Payment from "./component/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./component/Orders";
const promise =loadStripe("pk_test_51NSgYbHZp2xvCvP4YuJOy3Objhf91ogIBgtlcaMxY2QYFTIz7fAzij3NgbpMmokuM7GEwOocBNqsR54519jVtQRe00U1Xv6vvu");

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <>
        {/* < Header  /> */}
        <Routes>
          <Route path="/checkout" element={ <><Header /><Checkout /></> }/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/orders" element={ <Orders /> }/>
          <Route path="/Payment" element={(
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          )} />

          <Route
            path="/"
            element={
              <>
                
                <Header />
                <Home />
              </>
            }
          />
        </Routes>

        {/* <Home /> */}
      </>
    </Router>
  );
}

export default App;
