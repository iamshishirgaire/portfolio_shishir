"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="group flex items-center justify-center gap-2"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>Send </>
      )}
    </Button>
  );
}
