import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SecuredRoute from "./components/securedRouting/securedRoute";
import SecuredAdminRoute from "./components/securedRouting/securedAdminRoute";
import LoginPage from "./components/auth/loginPage";
import SignUpPage from "./components/auth/signUpPage";
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
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={SignUpPage}/>
            <Route path="/readme.html" component={ReadMe}/>
            <SecuredAdminRoute path="/admin" component={AdminPage}/>
            <SecuredRoute path="/thankYou" component={ThankYou}/>
            <SecuredRoute path="/checkout" component={CheckoutPage}/>
            <SecuredRoute path="/cart" component={CartPage}/>
            <SecuredRoute path="/aboutus" component={AboutUs}/>
            <SecuredRoute path="/contactus" component={ContactUsPage}/>
            <SecuredRoute path="/feedback" component={Feedback}/>
            <SecuredRoute path="/" component={Browse}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;