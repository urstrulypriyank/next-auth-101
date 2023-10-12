"use client";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  session?: any;
};
export default function Provider({ children, session }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
