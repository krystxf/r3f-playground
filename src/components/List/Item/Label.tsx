import React, { forwardRef } from "react";

type Props = React.HTMLAttributes<HTMLSpanElement>;

export const ListItemLabel = forwardRef<HTMLSpanElement, Props>(
  (props, ref) => {
    const { children, className = "", ...otherProps } = props;

    return (
      <span
        ref={ref}
        className={`font-semibold font-mono ${className}`}
        {...otherProps}
      >
        {children}
      </span>
    );
  }
);
