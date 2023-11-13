"use client";

import useFromStore from "@/app/hooks/useFromStore";
import FormWrapper from "@/components/layout/FormWrapper";
import StepOne from "@/components/sections/ShippingDetails/steps/StepOne";
import StepThree from "@/components/sections/ShippingDetails/steps/StepThree";
import StepTwo from "@/components/sections/ShippingDetails/steps/StepTwo";
import useFormDataStore from "@/store/useFormStore";
import { ReactNode } from "react";

const Shipping = () => {
  // const { step, thirdStep, secondStep } = useFormDataStore((state) => state);

  const storeItem = useFromStore(useFormDataStore, (state) => state);

  const FormComponent: Record<number, ReactNode> = {
    0: <StepOne />,
    1: <StepTwo />,
    2: <StepThree />,
    3: (
      <div>
        Done
        {JSON.stringify({
          ...storeItem?.thirdStep,
          ...storeItem?.secondStep,
          ...storeItem?.firstStep,
        })}
      </div>
    ),
  };

  return (
    <FormWrapper>
      {/* <ShippingDetails /> */}

      {FormComponent[storeItem?.step as number]}
    </FormWrapper>
  );
};

export default Shipping;
