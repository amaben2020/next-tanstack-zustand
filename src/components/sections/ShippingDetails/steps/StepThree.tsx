"use client";
import useFormDataStore from "@/store/useFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { countryListCreate } from "../data";
import { stepThree } from "../schema/stepThree";

//TODO: create a step counter that increments or decrements the steps

const StepThree = () => {
  const { thirdStep, updateThirdStep, decrementStep, incrementStep } =
    useFormDataStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    resolver: zodResolver(stepThree),
  });

  const onSubmit = (data: any) => {
    console.log("DATA", data);
    updateThirdStep({
      company: data.company,
      zip: data.zip,
      country: data.country,
    });
    incrementStep();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 items-center justify-center m-auto"
      >
        {JSON.stringify(thirdStep)}
        <div className=" w-full">
          <label className="block text-start my-2"> Company</label>{" "}
          <input
            {...register("company")}
            className="w-full p-3 rounded-md text-gray-700"
            type="text"
          />
          {/* {errors && (
            <p className="text-red-700 my-2 text-left">
              {errors?.name?.message}
            </p>
          )} */}
        </div>

        <div className=" w-full">
          <label className="block text-start my-2"> zip</label>{" "}
          <input
            {...register("zip")}
            className="w-full p-3 rounded-md text-gray-700"
            type="number"
          />
          {errors && (
            <p className="text-red-700 my-2 text-left">
              {errors?.zip?.message}
            </p>
          )}
        </div>
        <div className=" w-full">
          <label className="block text-start my-2"> Select Country</label>{" "}
          <select {...register("country")}>
            {countryListCreate.map((c) => (
              <option key={c}>{c} </option>
            ))}
          </select>
          {errors && (
            <p className="text-red-700 my-2 text-left">
              {errors?.country?.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          onClick={() => decrementStep()}
          className="px-10 py-3 border cursor-pointer disabled:border-red-600"
        >
          Prev
        </button>

        <button
          disabled={!isValid}
          type="submit"
          className="px-10 py-3 border cursor-pointer disabled:border-red-600"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default StepThree;
