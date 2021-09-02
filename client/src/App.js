import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProtectedRoute from "./components/protectedRouting/protectedRoute";
import ProtectedAdminRoute from "./components/protectedRouting/protectedAdminRoute";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Navbar from "./components/navbar/navbar";
import Browse from "./components/store/browse";
import ReadMe from "./components/readme_maor/ReadMe";
import AboutUs from "./components/aboutUs/aboutUs";
import AdminPage from "./components/admin/adminPage";
import CartPage from "./components/cart/cartPage";
import CheckoutPage from "./components/checkout/checkoutPage";
import ContactUsPage from "./components/contactUs/contactUsPage";
import ThankYou from "./components/thankYou/thankYou";
import Feedback from "./components/feedback/feedback";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/readme.html" component={ReadMe}/>
            <ProtectedAdminRoute path="/admin" component={AdminPage}/>
            <ProtectedRoute path="/thankYou" component={ThankYou}/>
            <ProtectedRoute path="/checkout" component={CheckoutPage}/>
            <ProtectedRoute path="/cart" component={CartPage}/>
            <ProtectedRoute path="/aboutus" component={AboutUs}/>
            <ProtectedRoute path="/contactus" component={ContactUsPage}/>
            <ProtectedRoute path="/feedback" component={Feedback}/>
            <ProtectedRoute path="/" component={Browse}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;