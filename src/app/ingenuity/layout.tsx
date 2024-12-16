"use client";
import { twMerge } from "tailwind-merge";
import { ChevronDownIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { useState, type ReactNode } from "react";
import { infopoints } from "@/constants/infopoints";
import { UiComponentSlot } from "@/components/UiComponentSlot";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    children: ReactNode;
};

const infoSections = Object.entries(infopoints.ingenuity)
    .map(([key, value]) => Object.assign(value, { key }))
    .toSorted((a, b) => a.label.localeCompare(b.label));

export default function IngenuityLayout(props: Props) {
    const { children } = props;

    const [detail, setDetail] = useState<string | null>(null);
    const toggleDetail = (key: string) =>
        setDetail((prev) => {
            if (prev === key) return null;
            else return key;
        });

    return (
        <>
            <div className="sticky z-50 mt-4 flex w-full justify-between px-6">
                <div
                    className="absolute flex w-full flex-col gap-2"
                    style={{
                        width: "min(40vw, 400px)",
                    }}
                >
                    {infoSections.map((section) => {
                        const isOpen = detail === section.key;

                        return (
                            <UiComponentSlot
                                key={section.key}
                                className="m-0 flex flex-col p-0"
                                onClick={() => {
                                    if (isOpen) return;
                                    toggleDetail(section.key);
                                }}
                            >
                                <button
                                    className="flex w-full items-center justify-between gap-2 rounded-lg px-6 py-3 font-semibold text-white/80 hover:bg-white/5 active:bg-white/10"
                                    onClick={() => {
                                        if (!isOpen) return;
                                        toggleDetail(section.key);
                                    }}
                                >
                                    {section.label}
                                    <ChevronDownIcon
                                        className={twMerge(
                                            "h-4 transition-all duration-200 ease-in-out",
                                            isOpen
                                                ? "rotate-180 transform"
                                                : "rotate-0 transform",
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
                                            <p className="px-6 pb-4 pt-2">
                                                {section.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </UiComponentSlot>
                        );
                    })}
                </div>

                <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
                    <UiComponentSlot asChild>
                        <h1>ingenuity</h1>
                    </UiComponentSlot>
                    <UiComponentSlot
                        as="button"
                        className="flex items-center gap-2 hover:bg-white/5 active:bg-white/10"
                    >
                        <VideoCameraIcon className="h-4" />
                        reset camera
                    </UiComponentSlot>
                </div>

                <UiComponentSlot className="absolute right-6">
                    mission
                </UiComponentSlot>
            </div>

            {children}
        </>
    );
}
