import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import StorePage from "./components/store/storePage";
import LoginPage from "./components/auth/loginPage";
import SignUpPage from "./components/auth/signUpPage";
import AdminPage from "./components/admin/adminPage";
import GoodbyePage from "./components/goodbye/goodbyePage";
import CartPage from "./components/cart/cartPage";
import Navigation from "./components/navigation/navigation";
import SecuredRoute from "./components/securedRouting/securedRoute";
import SecuredAdminRoute from "./components/securedRouting/securedAdminRoute";
import ChekoutPage from "./components/chekout/chekoutPage";
import ReadMe from "./components/readme_maor/ReadMe";
import AboutUs from "./components/aboutUs/aboutUs";
import ContactUsPage from "./components/contactUs/contactUsPage";

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
            <SecuredRoute path="/goodbye" component={GoodbyePage}/>
            <SecuredRoute path="/checkout" component={ChekoutPage}/>
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