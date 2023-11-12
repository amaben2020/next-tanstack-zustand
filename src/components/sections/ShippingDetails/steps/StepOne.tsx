"use client";
import useFormDataStore from "@/store/useFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { stepOne } from "../schema/stepOne";

//TODO: create a step counter that increments or decrements the steps

const StepOne = () => {
  const { firstStep, updateFirstStep, incrementStep } = useFormDataStore(
    (state) => state,
  );

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    resolver: zodResolver(stepOne),
  });

  const onSubmit = (data: any) => {
    updateFirstStep({
      email: data.email ?? firstStep.email,
      name: data.name ?? firstStep.name,
      password: data.password ?? firstStep.password,
    });
    incrementStep();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 items-center justify-center m-auto"
      >
        {JSON.stringify(firstStep)}
        <div className=" w-full">
          <label className="block text-start my-2"> Name</label>{" "}
          <input
            {...register("name")}
            className="w-full p-3 rounded-md text-gray-700"
            type="text"
            // value={firstStep.name ?? ""}
            placeholder={firstStep.name ?? ""}
          />
          {/* {errors && (
            <p className="text-red-700 my-2 text-left">
              {errors?.name?.message}
            </p>
          )} */}
        </div>

        <div className=" w-full">
          <label className="block text-start my-2"> Email</label>{" "}
          <input
            {...register("email")}
            className="w-full p-3 rounded-md text-gray-700"
            type="email"
            // value={firstStep.email ?? ""}
            placeholder={firstStep.email ?? ""}
          />
          {errors && (
            <p className="text-red-700 my-2 text-left">
              {errors?.email?.message}
            </p>
          )}
        </div>
        <div className=" w-full">
          <label className="block text-start my-2"> Password</label>{" "}
          <input
            {...register("password")}
            className="w-full p-3 rounded-md text-gray-700"
            type="password"
            // value={firstStep.password ?? ""}
            placeholder={firstStep.password ?? ""}
          />
          {errors && (
            <p className="text-red-700 my-2 text-left">
              {errors?.password?.message}
            </p>
          )}
        </div>

        <div className=" w-full">
          <label className="block text-start my-2"> Confirm Password</label>{" "}
          <input
            {...register("confirmPassword")}
            className="w-full p-3 rounded-md text-gray-700"
            type="password"
            // value={firstStep.password ?? ""}
            placeholder={firstStep.password ?? ""}
          />
          {errors && (
            <p className="text-red-700 my-2 text-left">
              {errors?.confirmPassword?.message}
            </p>
          )}
        </div>
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

export default StepOne;
