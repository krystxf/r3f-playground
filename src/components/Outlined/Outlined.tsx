import React, { forwardRef } from "react";

type Props = {
  strokeColor?: string;
  strokeWidth?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Outlined = forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const {
    children,
    strokeColor = "black",
    strokeWidth = "1px",
    style,
    className = "",
    ...otherProps
  } = props;

  return (
    <span
      ref={ref}
      style={{
        WebkitTextStroke: `${strokeWidth} ${strokeColor}`,
        ...style,
      }}
      className={`text-transparent ${className}`}
      {...otherProps}
    >
      {children}
    </span>
  );
});

export type { Props as OutlinedProps };
