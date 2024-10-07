import { FieldValues, UseFormRegister } from "react-hook-form";

interface CustomCheckBoxProps {
  id: string;
  label: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
  checked?: boolean; // New prop for checked state
  onChange?: () => void; // New prop for change event
}

const CustomCheckBoxtab: React.FC<CustomCheckBoxProps> = ({
  id,
  label,
  disabled,
  register,
  checked = false, // Default value
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
        checked={checked} // Set checked state
        onChange={onChange} // Handle change event
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
