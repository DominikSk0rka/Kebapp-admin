"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Input from "../components/Input";
import Button from "../components/Button";
import Image from "next/image";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    toast.success("Zalogowano");
  };

  return (
    <>
      <div
        className="
        flex 
        flex-col 
        justify-center 
        py-24 
        gap-5
        sm:px-6 
        lg:px-8 
      "
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            height="256"
            width="256"
            className=" mx-auto w-auto rounded-2xl transition hover:scale-105"
            src="/logo.png"
            alt="Logo"
          />
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md p-4 flex flex-center items-center justify-center">
          <div
            className="
        bg-white
         flex
          flex-col
          gap-4
          px-12
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
        "
          >
            <Input
              id="email"
              label="Login"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />

            <Input
              id="password"
              label="Hasło"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              type="password"
            />
            <Button
              label={isLoading ? "Ładuję się" : "Zaloguj się"}
              onClick={handleSubmit(onsubmit)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
