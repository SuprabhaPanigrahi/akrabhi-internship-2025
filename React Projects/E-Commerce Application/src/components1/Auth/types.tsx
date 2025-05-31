export interface User {
  fname: string;
  lname: string;
  email: string;
  phn: string;
  password: string;
  repass: string;
  address: string;
}

export interface LoginFormInputs {
  password: string;
  email: string;
  pass: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}