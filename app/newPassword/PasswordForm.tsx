"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import toast from "react-hot-toast";
import Input from "../components/Input";
import Button from "../components/Button";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const NewPasswordForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      newPasswordConfirmation: "",
    },
  });

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    const token = Cookies.get("token");

    axios
      .post("https://kebapp.bity24h.pl/api/password-update", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Hasło zmienione", response.data);

        if (response.data.accessToken) {
          Cookies.set("token", response.data.accessToken, { expires: 1 / 24 });
        }

        router.push("/admin");
        router.refresh();
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setValidationErrors(error.response.data);
          toast.error("Te dane się nie zgadzają");
        } else {
          toast.error("Wystąpił błąd. Spróbuj ponownie później.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col justify-center py-24 gap-5 sm:px-6 lg:px-8">
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
        <div className="bg-white flex flex-col gap-4 px-12 py-8 shadow sm:rounded-lg sm:px-10">
          <Input
            id="oldPassword"
            label="Stare hasło"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type="password"
          />

          <Input
            id="newPassword"
            label="Nowe hasło"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type="password"
          />
          <Input
            id="newPasswordConfirmation"
            label="Powtórz nowe hasło"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type="password"
          />
          <Button
            label={isLoading ? "Ładuję się" : "Zapisz"}
            onClick={handleSubmit(onsubmit)}
          />
        </div>
      </div>
    </div>
  );
};

export default NewPasswordForm;
