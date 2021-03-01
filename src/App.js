import data from "./data";

import CustomContainer from "./components/CustomContainer";

import { TiShoppingCart } from "react-icons/ti";

function App() {
  console.log(data);
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <header className="text-quaternary">
          <CustomContainer className="flex justify-between flex-wrap items-center h-16">
            <a href="/" className="text-4xl text-primary logo font-medium">     
              Dsaewqe ertrge
            </a>
            <div className="flex gap-x-8 text-xl ">
              <a href="" className="text-3xl">
                
                <TiShoppingCart />
              </a>
              <a href="" className="text-lg">     
                Sign in
              </a>
            </div>
          </CustomContainer>
        </header>
        <main className="py-24">
          <CustomContainer>
            <div className='grid grid-cols-12 gap-x-16 gap-y-16'>
              {data.products.map((product, index) => {
                return (
                  <div key={product._id} className='col-span-2'>
                    <a href={`/product/${product._id}`}>
                        <div className=''>
                          <img className='h-full w-full' src={product.image} alt={product.name} />
                        </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </CustomContainer>
        </main>
      </div>
      <footer className="bg-quaternary text-white">
        <CustomContainer className="flex items-center justify-center h-16">
          &copy; 2021 All right reserved.
        </CustomContainer>
      </footer>
    </div>
  );
}

export default App;
