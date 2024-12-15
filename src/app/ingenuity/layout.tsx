"use client";
import { twMerge } from "tailwind-merge";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState, type ReactNode } from "react";
import { infopoints } from "@/constants/infopoints";
import { UiComponentSlot } from "@/components/UiComponentSlot";

type Props = {
  children: ReactNode;
};

export default function IngenuityLayout(props: Props) {
  const { children } = props;

  const [isComponentsOpen, setIsComponentsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-full flex justify-between sticky z-50 mt-4 px-6">
        <UiComponentSlot
          onClick={() => setIsComponentsOpen((prev) => !prev)}
          className="flex flex-col gap-2 items-center absolute"
        >
          <div>
            <div className="flex gap-2 items-center">
              components
              <ChevronDownIcon
                className={twMerge(
                  "h-4 transition-all ease-in-out duration-200",
                  isComponentsOpen
                    ? "transform rotate-180"
                    : "transform rotate-0"
                )}
              />
            </div>
            {isComponentsOpen && (
              <div className="flex flex-col items-start">
                {Object.entries(infopoints.ingenuity).map(([key, value]) => (
                  <button
                    key={key}
                    className={
                      "px-4 py-2 h-12 items-center justify-between text-white text-sm"
                    }
                  >
                    {value.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </UiComponentSlot>

        <UiComponentSlot className="absolute left-1/2 -translate-x-1/2">
          <h1>ingenuity</h1>
        </UiComponentSlot>

        <UiComponentSlot className="absolute right-6">
          <div>mission</div>
        </UiComponentSlot>
      </div>

      {children}
    </>
  );
}
