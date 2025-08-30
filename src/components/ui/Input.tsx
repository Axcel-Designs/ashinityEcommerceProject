import React from "react";

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  holder: string;
  name: string;
  id?: string;
  value: string | number;
  change: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
}

export default function Input({ type, holder, name, id, value, change, label }: InputProps) {
  return (
    <div className="ring-2 rounded-sm py-1 px-2 flex gap-4">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={holder}
        name={name}
        id={id || name}
        value={value}
        onChange={change}
        required
        className="grow outline-none bg-amber-200 placeholder-gray-400"
      />
    </div>
  )
}
