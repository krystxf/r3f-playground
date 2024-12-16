import { Slot, type SlotProps } from "@radix-ui/react-slot";
import { twMerge } from "tailwind-merge";

type Props = SlotProps & {
    asChild?: boolean;
    as?: "button" | "div";
    variant?: "sm" | "base";
};

/**
 * @param props.asChild
 * @param props.as - is ignored if `props.asChild` is `true`
 */
export const UiComponentSlot = (props: Props) => {
    const {
        className,
        asChild,
        as: asComponent = "div",
        variant = "base",
        ...otherProps
    } = props;
    const Component = asChild ? Slot : asComponent;
    const isButton = !asChild && asComponent === "button";

    return (
        <Component
            className={twMerge(
                variant === "sm" && "px-4 py-2 text-sm",
                variant === "base" && "px-6 py-1 text-base",
                isButton && "hover:bg-white/5 active:bg-white/10",
                "text-neutral-100",
                "flex items-center",
                "rounded-lg",
                "bg-black/20 backdrop-blur-lg",
                "border border-neutral-400/20 shadow-md",
                "transition-all duration-200 ease-in-out",
                className,
            )}
            {...otherProps}
        />
    );
};
