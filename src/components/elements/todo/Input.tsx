import { ChangeEvent } from "react";

const Input = ({
  handleChange,
  value,
}: {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  return <input type="text" onChange={handleChange} value={value} />;
};

export default Input;
