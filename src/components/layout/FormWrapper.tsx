import { ReactNode } from "react";

const FormWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-20 text-center max-w-3xl flex justify-center border mx-auto my-6">
      {children}
    </div>
  );
};

export default FormWrapper;
