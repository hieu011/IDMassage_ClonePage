import { ReactNode } from "react";

interface Container {
  children: ReactNode;
}

export default function Container({ children }: Container) {
  return (
    <div className="max-w-7xl mx-auto p-4 rounded-lg">
      {children}
    </div>
  );
}
