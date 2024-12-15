import * as RadixTooltip from "@radix-ui/react-tooltip";
import type { TooltipContentProps } from "@radix-ui/react-tooltip";

type Props = {
  trigger: React.ReactNode;
} & TooltipContentProps;

export const Tooltip = (props: Props) => {
  const { trigger, children, ...otherProps } = props;

  return (
    <RadixTooltip.Root delayDuration={0}>
      <RadixTooltip.Trigger>{trigger}</RadixTooltip.Trigger>

      <RadixTooltip.Portal>
        <RadixTooltip.Content {...otherProps}>{children}</RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};
