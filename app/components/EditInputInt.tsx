"use client";
interface InputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditInputInt: React.FC<InputProps> = ({
  id,
  label,
  type = "",
  required = false,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full mb-4">
      <label htmlFor={id} className={`text-md mb-2`}>
        {label}
      </label>
      <input
        autoComplete="off"
        id={id}
        placeholder=""
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full
        p-2
        outline-none
        bg-white
        font-light
        border-2
        rounded-md
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        `}
      />
    </div>
  );
};

export default EditInputInt;
