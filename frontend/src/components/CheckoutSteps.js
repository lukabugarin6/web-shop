import React from "react";

const CheckoutSteps = (props) => {
  return (
    <div className="flex justify-between">
      <div
        className={`border-t-4 border-gray-300 text-gray-300 pt-2 flex-1 text-center  ${
          props.step1 ? "border-quaternary text-quaternary font-semibold" : ""
        }`}
      >
        Uloguj se
      </div>
      <div
        className={`border-t-4 border-gray-300 text-gray-300 pt-2 flex-1 text-center ${
          props.step2 ? "border-quaternary text-quaternary font-semibold" : ""
        }`}
      >
        Otpremanje
      </div>
      <div
        className={`border-t-4 border-gray-300 text-gray-300 pt-2 flex-1 text-center ${
          props.step3 ? "border-quaternary text-quaternary font-semibold" : ""
        }`}
      >
        Placanje
      </div>
      <div
        className={`border-t-4 border-gray-300 text-gray-300 pt-2 flex-1 text-center ${
          props.step4 ? "border-quaternary text-quaternary font-semibold" : ""
        }`}
      >
        Potvdi narudzbinu
      </div>
    </div>
  );
};

export default CheckoutSteps;
