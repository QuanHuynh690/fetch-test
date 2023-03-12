import React from "react";
import { classNames } from "utils/classname";
export interface ButtonProps {
  title: string;
  onClick?: (event: MouseEvent) => void;
  className?: string;
  variant?: "primary" | "secondary";
}
const Button: React.FC<ButtonProps> = ({
  title,
  className,
  variant,
}) => {
  return (
    <button
      className={classNames(
        `${className} text-base ${
          variant === "secondary"
            ? "bg-white text-primary border border-primary hover:bg-primary hover:text-white"
            : "bg-primary text-white hover:bg-white hover:text-primary font-semibold hover:border-2 hover:border-primary"
        }  rounded-[5px] `
      )}
    >
      {title}
    </button>
  );
};

export default Button;
