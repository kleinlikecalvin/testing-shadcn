/**
 *
 * 🚨 TODO
 * - Type field correctly
 * - Figure out shrinky label (optional?)
 * - any other styling (height = 50px? )
 * - error border around container
 */

"use client";
import { useState, HTMLProps } from "react";

// Components
import { FormLabel } from "./form";
import { Input } from "./input";
// import { FormLabel } from "../Form/Form";
// import { Input } from "../Input/Input";
// import Image from "next/image";

// SVGs
// import visiblePasswordIcon from "@/../public/icons/password_icon_visible.svg";
// import hiddenPasswordIcon from "@/../public/icons/password_icon_hidden.svg";

// We expect this to be tied to react-hook-form and is meant to accept a render prop from a FormField
// react-hook-form doesn't export this type specifically and should suffice
type FieldProps = HTMLProps<HTMLInputElement>;

export default function CustomInput(fieldProps: FieldProps) {
  const [show, setShow] = useState(false);

  function togglePasswordShow() {
    setShow(!show);
  }

  return (
    <div className="PasswordInput relative border">
      <Input
        className="rounded-none border-none p-[10px]"
        type={show ? "text" : "password"}
        {...fieldProps}
      />
      <FormLabel>Username</FormLabel>
      <button
        onClick={togglePasswordShow}
        className="absolute right-0 top-0 h-full px-[6px] py-[1px]"
      >
        {/* <Image
          src={show ? visiblePasswordIcon : hiddenPasswordIcon}
          width={30}
          height={30}
          alt={show ? "Password is visible" : "Password is hidden"}
        /> */}
      </button>
    </div>
  );
}
