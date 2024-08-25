import React, { forwardRef } from "react";

type Props = {
  strokeColor?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Outlined = forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const {
    children,
    strokeColor = "black",
    style,
    className = "",
    ...otherProps
  } = props;

  return (
    <span
      ref={ref}
      style={{
        WebkitTextStroke: `1px ${strokeColor}`,
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
