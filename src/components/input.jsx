import React from "react";
export function Input({
  htmlFor = "",
  isPassword = false,
  placeholder = "",
  textLabel,
  customInput = "",
  iconClassname = "",
  customLabel=""
}) {
  return (
    <>
      <label htmlFor={htmlFor} className={`block ` + customLabel}>
        {textLabel}
      </label>
      <div className="border-b-2">
        <i class={iconClassname}></i>

        <input
          type={isPassword ? "password" : "text"}
          placeholder={placeholder}
          className="ps-2 focus:outline-none"

        />
      </div>
    </>
  );
}
