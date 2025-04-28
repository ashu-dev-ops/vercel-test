import { cn } from "@/lib/utils";
import React, { ReactNode, HTMLAttributes } from "react";

type ContainerProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = ({ children, className = "", ...props }) => {
  return (
    <div
      className={cn(
        `container mx-auto max-w-7xl px-4`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
