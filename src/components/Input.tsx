import { TextField } from "@mui/material";
import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

type Props = {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  label: string;
  type?: HTMLInputTypeAttribute | string;
};

const Input = ({ name, label, onChange, value, type = "text" }: Props) => {
  return (
    <TextField
      className="text-white"
      type={type}
      size="small"
      sx={{
        "& .MuiFormLabel-root": {
          color: "white",
        },
        "& .MuiInputBase-input": {
          color: "white",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
        },
        ".MuiInputBase-root:not(.Mui-focused) .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "white",
          },
      }}
      onChange={(e) => onChange(e)}
      name={name}
      label={label}
      value={value}
    />
  );
};

export default Input;
