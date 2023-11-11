"use client";

import FormWrapper from "@/components/layout/FormWrapper";
import StepOne from "@/components/sections/ShippingDetails/steps/StepOne";
import useFormDataStore from "@/store/useFormStore";

const Shipping = () => {
  const { step } = useFormDataStore((state) => state);
  const FormComponent = {
    0: <StepOne />,
    1: <div>B</div>,
    2: <div>C</div>,
  };

  return (
    <FormWrapper>
      {/* <ShippingDetails /> */}

      {FormComponent[step]}
    </FormWrapper>
  );
};

export default Shipping;
