import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SecuredRoute from "./components/securedRouting/securedRoute";
import SecuredAdminRoute from "./components/securedRouting/securedAdminRoute";
import LoginPage from "./components/auth/loginPage";
import SignUpPage from "./components/auth/signUpPage";
import Navigation from "./components/navigation/navigation";
import StorePage from "./components/store/storePage";
import ReadMe from "./components/readme_maor/ReadMe";
import AboutUs from "./components/aboutUs/aboutUs";
import AdminPage from "./components/admin/adminPage";
import CartPage from "./components/cart/cartPage";
import CheckoutPage from "./components/chekout/checkoutPage";
import ContactUsPage from "./components/contactUs/contactUsPage";
import ThankYou from "./components/thankYou/thankYou";

function App() {
  return (
      <Router>
        <div className="App">
          <Navigation />
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
            <SecuredRoute path="/" component={StorePage}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;