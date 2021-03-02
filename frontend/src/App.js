import { BrowserRouter  , Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CustomContainer from "./components/CustomContainer";

import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <Navbar />
          <main className="py-24">
            <CustomContainer>
              <Route path="/cart/:id?" component={CartScreen}></Route>
              <Route path="/product/:id" component={ProductScreen}></Route>
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
