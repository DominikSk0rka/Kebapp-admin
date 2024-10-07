import { FieldValues, UseFormRegister } from "react-hook-form";

interface CustomCheckBoxProps {
  id: string;
  label: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
  checked?: boolean;
  onChange?: () => void;
}

const CustomCheckBoxtab: React.FC<CustomCheckBoxProps> = ({
  id,
  label,
  disabled,
  register,
  checked = false,
  onChange,
}) => {
  return (
    <div className="w-full flex flex-row gap-3 items-center">
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        {...register(id)}
        className="cursor-pointer w-6 h-6 accent-green-300"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="h-8 font-semibold text-gray-500 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomCheckBoxtab;
