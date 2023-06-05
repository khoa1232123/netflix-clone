import { Input } from "@/components";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { ChangeEvent, useCallback, useState } from "react";

type Props = {};

const Auth = (props: Props) => {
  const [data, setData] = useState<any>({
    email: "",
    name: "",
    password: "",
  });

  const [variant, setVariant] = useState<string>("login");

  const toggleVariant = useCallback(() => {
    setVariant((current) => (current === "login" ? "register" : "login"));
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const register = useCallback(async() => {
    try {
      await axios.post("/api/register", data)
    } catch (error) {
      console.log(error);
      
    }
  }, [data]);

  return (
    <div className="text-white relative h-full w-full bg-[url(/images/hero.jpg)] bg-center bg-cover">
      <div className="bg-black  flex flex-col w-full h-full bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex flex-1 justify-center">
          <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4 text-white">
              {variant === "register" && (
                <Input
                  label="User Name"
                  name="name"
                  onChange={handleChange}
                  value={data.name}
                />
              )}
              <Input
                label="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
              />
              <Input
                label="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
              />
            </div>
            <Button
              variant="contained"
              size="large"
              className="w-full bg-red-600 mt-8 hover:bg-red-700"
            >
              {variant}
            </Button>
            <p className="text-neutral-500 mt-10 text-center">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-neutral-300 ml-1 hover:text-neutral-50 cursor-pointer transition"
              >
                {variant === "login" ? "Create and account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
