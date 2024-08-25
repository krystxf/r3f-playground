import React, { forwardRef } from "react";

type Props = {
  unit?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

export const ListItemValue = forwardRef<HTMLSpanElement, Props>(
  (props, ref) => {
    const { children, unit, className, ...otherProps } = props;

    return (
      <span ref={ref} className={`font-mono ${className}`} {...otherProps}>
        {children} <span className="uppercase opacity-20">{unit}</span>
      </span>
    );
  }
);
