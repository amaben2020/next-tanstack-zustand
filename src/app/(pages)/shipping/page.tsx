"use client";

import FormWrapper from "@/components/layout/FormWrapper";
import StepOne from "@/components/sections/ShippingDetails/steps/StepOne";
import StepThree from "@/components/sections/ShippingDetails/steps/StepThree";
import StepTwo from "@/components/sections/ShippingDetails/steps/StepTwo";
import useFormDataStore from "@/store/useFormStore";

const Shipping = () => {
  const { step, thirdStep, secondStep, firstStep } = useFormDataStore(
    (state) => state,
  );
  const FormComponent = {
    0: <StepOne />,
    1: <StepTwo />,
    2: <StepThree />,
    3: (
      <div>
        Done
        {JSON.stringify({ ...thirdStep, ...secondStep, ...firstStep })}
      </div>
    ),
  };

  return (
    <FormWrapper>
      {/* <ShippingDetails /> */}

      {FormComponent[step]}
    </FormWrapper>
  );
};

export default Shipping;
