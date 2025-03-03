import { ReactNode } from "react";

interface Container {
  children: ReactNode;
}

export default function Container({ children }: Container) {
  return (
    <div className="max-w-6xl m-auto">
      {children}
    </div>
  );
}
