"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

const Card = ({
  type,
  id,
  register,
  required,
  errors,

  label,
}: {
  label: string;
  type?: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
}) => {
  return (
    <div className="rounded-2xl bg-white p-4 flex-1 min-w-[130px]">
      <h1 className=" my-4">
        <input
          id={id}
          {...register(id, { required })}
          type={type}
          placeholder=""
          className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-500"
        />
      </h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{label}</h2>
    </div>
  );
};

export default Card;
