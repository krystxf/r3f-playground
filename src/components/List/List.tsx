import React, { forwardRef } from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

export const List = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className = "", ...otherProps } = props;

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-2 ${className}`}
      {...otherProps}
    >
      {children}
    </div>
  );
});
