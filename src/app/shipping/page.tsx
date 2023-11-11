import FormWrapper from "@/components/layout/FormWrapper";
import ShippingDetails from "@/components/sections/ShippingDetails";

const Shipping = () => {
  const FormComponent = {
    1: <div>A</div>,
    2: <div>B</div>,
    3: <div>C</div>,
  };

  return (
    <FormWrapper>
      <ShippingDetails />

      {FormComponent[3]}
    </FormWrapper>
  );
};

export default Shipping;
