"use client";

import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import toast from "react-hot-toast";
import Input from "../components/Input";
import Button from "../components/Button";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      router.push("/");
      router.refresh;
    }
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [token, setToken] = useState({});
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

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("https://kebapp.wheelwallet.cloud/api/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        toast.success("Zalogowano", response.data);
        setToken(response.data.accessToken);
        console.log(token);
        Cookies.set("token", response.data.accessToken, { expires: 1 / 24 });
        router.push("/admin");
        console.log("Token z sesji:", Cookies.get("token"));
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setValidationErrors(error.response.data);
          console.log(validationErrors);
          toast.error("Te dane się nie zgadzają");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
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
