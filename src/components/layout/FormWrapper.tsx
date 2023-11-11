import { ReactNode } from "react";

const FormWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="p-20 text-center">{children}</div>;
};

export default FormWrapper;
