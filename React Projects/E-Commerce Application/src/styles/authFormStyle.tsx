import styled from "styled-components";

export const AuthContainer = styled.div`
  max-width: 650px;
  margin: 3rem auto;
  padding: 3.5rem;
  border-radius: 20px;
  background: #dbc4c4;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const AuthTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #021357;
  font-size: 2.75rem;
  font-weight: 600;
`;

export const AuthFooter = styled.p`
  margin-top: 1.75rem;
  text-align: center;
  color: #4b5563;
  font-size: 0.95rem;

  a {
    color: #3b82f6;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AuthMessage = styled.div`
  margin-bottom: 1.5rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
`;

export const SuccessMessage = styled(AuthMessage)`
  background-color: #ecfdf5;
  color: #059669;
  border: 1px solid #a7f3d0;
`;

export const ErrorMessage = styled(AuthMessage)`
  background-color: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.25rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #020a00;
    font-size: 0.95rem;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }
`;