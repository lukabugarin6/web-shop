import { BrowserRouter  , Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CustomContainer from "./components/CustomContainer";

import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import SignInScreen from "./screens/SignInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <Navbar />
          <main className="py-24">
            <CustomContainer>
              <Route path="/signin" component={SignInScreen}></Route>
              <Route path="/register" component={RegisterScreen}></Route>
              <Route path="/shipping" component={ShippingAddressScreen}></Route>
              <Route path="/payment" component={PaymentMethodScreen}></Route>
              <Route path="/product/:id" component={ProductScreen}></Route>
              <Route path="/cart/:id?" component={CartScreen}></Route>
              <Route path="/placeorder" component={PlaceOrderScreen}></Route>
              <Route path="/order/:id" component={OrderScreen}></Route>
              <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
              <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
              <Route path="/" component={HomeScreen} exact></Route>
            </CustomContainer>
          </main>
        </div>
        <footer className="bg-quaternary text-white">
          <CustomContainer className="flex items-center justify-center h-16">
            &copy; 2021 All right reserved.
          </CustomContainer>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
