import { FC } from "react";

interface Props {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  hasErrors: any;
  label: string;
  placeholder: string;
  restStyles?: string;
  onBlur: any;
}

const Input: FC<Props> = ({
  name,
  type,
  onChange,
  value,
  hasErrors,
  label,
  placeholder,
  restStyles,
  onBlur,
}) => {
  return (
    <label className={`flex flex-col ${restStyles}`}>
      <div
        className={`flex items-center justify-between ${label ? "mb-1" : ""}`}
      >
        <span
          className={`${
            hasErrors ? "text-red-600" : "text-indigo-900"
          } font-semibold text-sm tracking-widest 2xl:text-2xl`}
        >
          {label}
        </span>
      </div>
      <input
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        className={`outline-none border 2xl:text-2xl ${
          hasErrors
            ? "border-red-400 placeholder:text-red-400"
            : "border-gray-300"
        } rounded-lg px-3 py-2 2xl:px-5 2xl:py-3`}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
