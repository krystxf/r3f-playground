import * as RadixTooltip from "@radix-ui/react-tooltip";
import type { TooltipContentProps } from "@radix-ui/react-tooltip";

type Props = {
  trigger: React.ReactNode;
} & TooltipContentProps;

export const Tooltip = (props: Props) => {
  const { trigger, children, ...otherProps } = props;

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <RadixTooltip.Content {...otherProps}>
            {children}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
