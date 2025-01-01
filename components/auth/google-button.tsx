"use client";

import { googleAuthenticate } from "@/actions/google-login";
import React from "react";
import { useActionState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Button } from "@/components/ui/button";

const GoogleLogin = () => {
  const [errorMsgGoogle, dispatchGoogle] = useActionState(
    googleAuthenticate,
    undefined,
  ); //googleAuthenticate hook
  return (
    <form className="mt-4 flex" action={dispatchGoogle}>
      <Button
        variant={"outline"}
        className="flex w-full flex-row items-center gap-3"
      >
        <BsGoogle />
        Google Sign In
      </Button>
      <p>{errorMsgGoogle}</p>
    </form>
  );
};

export default GoogleLogin;
