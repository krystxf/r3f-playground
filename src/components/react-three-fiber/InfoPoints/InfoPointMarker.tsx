import React, { forwardRef } from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

export const InfoPointMarker = forwardRef<HTMLDivElement, Props>(
    (props, ref) => {
        return (
            <div
                ref={ref}
                className="relative flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all hover:scale-125 hover:bg-slate-800/20 hover:backdrop-blur-lg active:scale-95"
                {...props}
            >
                <div className="h-full w-full rounded-full border-2 border-white/80"></div>
            </div>
        );
    },
);

InfoPointMarker.displayName = "InfoPointMarker";
