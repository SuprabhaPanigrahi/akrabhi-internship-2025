import React from "react";
import { ErrorMessage, SuccessMessage } from "@/styles/authFormStyle";

interface Props {
  error?: string | null;
  success?: string | null;
}

const FormMessages: React.FC<Props> = ({ error, success }) => {
  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
    </>
  );
};

export default FormMessages;
