import React, { forwardRef } from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

export const InfoPointMarker = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="relative -translate-x-1/2 -translate-y-1/2 flex h-4 w-4 hover:scale-125 hover:bg-slate-800/20 active:scale-95 hover:backdrop-blur-lg rounded-full transition-all"
        {...props}
      >
        <div className="w-full h-full rounded-full border-white/80 border-2"></div>
      </div>
    );
  }
);
