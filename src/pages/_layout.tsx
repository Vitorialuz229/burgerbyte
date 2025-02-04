import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="text-5xl flex items-center justify-center h-screen">{children}</main>
  )
};
