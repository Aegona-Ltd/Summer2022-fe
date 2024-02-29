"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button";
import Input from "../Input";
import { toast } from "react-toastify";
import { loginSchema } from "@/utils/validations";
import { FormLogin } from "@/utils/type";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FormLogin) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitting) {
      if (errors.email) {
        toast(errors.email.message, {
          type: "error",
        });
      } else if (errors.password) {
        toast(errors.password.message, {
          type: "error",
        });
      }
    }

    if (isSubmitSuccessful) {
      toast("Success!!!", {
        type: "success",
      });
    }
  }, [isSubmitting, isSubmitSuccessful]);

  return (
    <form method="post" className="min-w-72" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email address"
        type="text"
        name="email"
        placeholder=" "
        error={!!errors.email}
        register={register}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder=" "
        error={!!errors.password}
        register={register}
      />
      <div className="flex flex-col gap-3">
        <div className="flex justify-end">
          <Button
            theme="light"
            className="w-full lg:w-auto"
            type="submit"
            size="small"
          >
            Sign in
          </Button>
        </div>
        <div className="text-sm text-grey-100">
          Don’t have an account yet?{" "}
          <a href="#" className="hover:underline font-medium">
            Sign up
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
