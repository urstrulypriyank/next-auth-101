"use client";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import PageWithMessage from "@/components/PageWithMessage";
export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div className="flex justify-center items-center">
      {!session && (
        <button
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          login
        </button>
      )}
      {session && (
        <PageWithMessage
          message={`Welcome ${session.user?.email}`}
          btnText={"logout"}
          btnFunction={signOut}
        />
      )}
    </div>
  );
}
