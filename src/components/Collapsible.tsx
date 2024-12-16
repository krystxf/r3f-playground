"use client";
import { twMerge } from "tailwind-merge";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { ReactNode } from "react";
import { UiComponentSlot } from "@/components/UiComponentSlot";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    label: ReactNode;
    children: ReactNode;
    isOpen: boolean;
    onOpen?: () => void;
    onClose?: () => void;
};

export function Collapsible(props: Props) {
    const { label, children, isOpen, onOpen, onClose } = props;

    return (
        <UiComponentSlot
            className="m-0 flex flex-col p-0"
            onClick={() => !isOpen && onOpen?.()}
        >
            <button
                className="flex w-full items-center justify-between gap-2 rounded-lg px-4 py-2 font-semibold text-white/80 hover:bg-white/5 active:bg-white/10"
                onClick={() => isOpen && onClose?.()}
            >
                {label}
                <ChevronDownIcon
                    className={twMerge(
                        "h-4 transition-all duration-200 ease-in-out",
                        isOpen ? "rotate-180 transform" : "rotate-0 transform",
                    )}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="overflow-hidden text-white/60"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                        }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <p className="px-4 pb-4 pt-2">{children}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </UiComponentSlot>
    );
}
