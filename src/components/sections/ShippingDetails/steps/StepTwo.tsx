"use client";
import useFormDataStore from "@/store/useFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { stepTwo } from "../schema/stepTwo";

//TODO: create a step counter that increments or decrements the steps

const StepTwo = () => {
  const { secondStep, updateSecondStep, incrementStep } = useFormDataStore(
    (state) => state,
  );

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    resolver: zodResolver(stepTwo),
  });

  const onSubmit = (data: any) => {
    updateSecondStep({
      token: data.token,
      isOutside: data.isOutside,
      address: data.address,
    });
    incrementStep();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 items-center justify-center m-auto"
      >
        {JSON.stringify(secondStep)}
        <div className=" w-full">
          <label className="block text-start my-2"> Token</label>{" "}
          <input
            {...register("token")}
            className="w-full p-3 rounded-md text-gray-700"
            type="text"
          />
          {errors && (
            <p className="text-red-700 my-2 text-left">
              {errors?.token?.message}
            </p>
          )}
        </div>

        <div className=" w-full">
          <label className="block text-start my-2"> isOutside</label>{" "}
          <input
            {...register("isOutside")}
            className="w-full p-3 rounded-md text-gray-700"
            type="checkbox"
          />
          {errors && (
            <p className="text-red-700 my-2 text-left">
              {errors?.isOutside?.message}
            </p>
          )}
        </div>
        <div className=" w-full">
          <label className="block text-start my-2"> Address</label>{" "}
          <input
            {...register("address")}
            className="w-full p-3 rounded-md text-gray-700"
            type="text"
          />
          {errors && (
            <p className="text-red-700 my-2 text-left">
              {errors?.address?.message}
            </p>
          )}
        </div>

        <div className="flex p-4 gap-5">
          <button
            disabled={!isValid}
            type="submit"
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
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
