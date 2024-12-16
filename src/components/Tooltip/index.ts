import * as RadixTooltip from "@radix-ui/react-tooltip";
import { Tooltip as _Tooltip } from "@/components/Tooltip/Tooltip";

export const Tooltip = Object.assign(_Tooltip, {
    Provider: RadixTooltip.Provider,
});
