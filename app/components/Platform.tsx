"use client";

import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface PlatformInputProps {
  selected?: boolean;
  label: string;
  icon: string; // Assuming this is a URL or className for an icon
  id: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
}

const Platform: React.FC<PlatformInputProps> = ({
  selected,
  id,
  label,
  disabled,
  register,
  icon,
}) => {
  return (
    <div className="w-full flex flex-col gap-3 items-center">
      <div className="flex items-center">
        <img src={icon} alt={`${label} icon`} className="w-16 h-16" />
      </div>
      <label
        htmlFor={id}
        className="h-8 font-semibold text-gray-500 cursor-pointer"
      >
        {label}
      </label>
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        {...register(id)}
        className="cursor-pointer w-6 h-6 accent-green-300"
      />
    </div>
  );
};

export default Platform;
