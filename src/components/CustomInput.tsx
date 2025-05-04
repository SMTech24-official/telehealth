import React from "react";

type Option = {
  value: string | number;
  label: string;
};

type CustomInputProps = {
  label?: string;
  type?: "text" | "textarea" | "select" | "password" | "email" | "number";
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  fullWidth?: boolean;
  placeholder?: string;
  rows?: number;
  className?: string;
  options?: Option[];
  name?: string;
  disabled?: boolean;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  React.SelectHTMLAttributes<HTMLSelectElement>;

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  fullWidth = false,
  placeholder = "",
  rows = 3,
  className = "",
  options = [],
  ...props
}) => {
  const inputClasses = `border-b border-gray-300 focus:border-blue-500 outline-none py-2 px-1 ${
    fullWidth ? "w-full" : "w-1/2"
  } ${className}`;

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            className={`${inputClasses} resize-none`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
          />
        );
      case "select":
        return (
          <select
            className={inputClasses}
            value={value}
            onChange={onChange}
            {...props as React.SelectHTMLAttributes<HTMLSelectElement>}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            type={type}
            className={inputClasses}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...props as React.InputHTMLAttributes<HTMLInputElement>}
          />
        );
    }
  };

  return (
    <div className="mb-6">
      {label && (
        <label className="block text-gray-700 text-sm font-medium mb-1">
          {label}
        </label>
      )}
      {renderInput()}
    </div>
  );
};

export default CustomInput;