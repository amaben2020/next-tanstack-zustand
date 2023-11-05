"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TUserSchema, userSchema } from "./schemas/userSchema";
// There are 2 core strategies
//1. Disable button till data is fully valid
//2. Display error messages as you go

const ErrorMessageFromForm = ({ children }: { children: ReactNode | any }) => {
  return <p className="text-red-500"> {children}</p>;
};

const Form = () => {
  const {
    formState: { errors, isValid, isDirty, dirtyFields },
    handleSubmit,
    setFocus,
    register,
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  console.log(errors);
  console.log(isValid);
  console.log(isDirty);
  console.log(dirtyFields);

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  const onSubmit: SubmitHandler<TUserSchema> = (data) => {
    alert("Sent");
    console.log(data);
  };
  return (
    <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            {...register("firstName")}
            placeholder="First Name"
          />
          {errors["firstName"]?.message && (
            <ErrorMessageFromForm>
              {errors["firstName"]?.message}
            </ErrorMessageFromForm>
          )}
        </div>
        <div className="md:ml-2">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
            style={{
              border: dirtyFields.lastName ? "3px solid green" : "",
            }}
          />
          {errors["lastName"]?.message && (
            <ErrorMessageFromForm>
              {errors["lastName"]?.message}
            </ErrorMessageFromForm>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="md:ml-2">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="c_password"
          >
            Confirm Password
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="c_password"
            type="password"
            {...register("confirmPassword")}
          />
        </div>
      </div>
      <div className="mb-4">
        <input type="checkbox" id="terms" {...register("terms")} />
        <label
          htmlFor="terms"
          className="ml-2 mb-2 text-sm font-bold text-gray-700"
        >
          Accept Terms & Conditions
        </label>
      </div>
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white"
          type="submit"
          // disabled={!isValid}
        >
          Register Account
        </button>
      </div>
      <hr className="mb-6 border-t" />
      <div className="text-center">
        <a
          className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <div className="text-center">
        <a
          className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          href="#"
        >
          Already have an account? Login!
        </a>
      </div>
    </form>
  );
};

export default Form;
