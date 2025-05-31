import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage } from "@/styles/authFormStyle";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  placeholder,
  type = "text",
  register,
  error,
}) => {
  return (
    <div className="mb-4">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} {...register} />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
};

export default InputField;
