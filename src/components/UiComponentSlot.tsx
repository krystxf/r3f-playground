import { Slot, type SlotProps } from "@radix-ui/react-slot";
import { twMerge } from "tailwind-merge";

type Props = SlotProps & {
  variant?: "sm" | "base";
};

export const UiComponentSlot = (props: Props) => {
  const { className, variant = "base", ...otherProps } = props;

  return (
    <Slot
      className={twMerge(
        variant === "sm" && "text-sm px-4 py-2",
        variant === "base" && "text-base px-8 py-2",
        "text-neutral-100",
        "flex items-center",
        "rounded-2xl",
        "bg-black/20 backdrop-blur-lg",
        "border border-neutral-400/20 shadow-md",
        "transition-all ease-in-out duration-200",
        className
      )}
      {...otherProps}
    />
  );
};
