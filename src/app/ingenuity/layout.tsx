"use client";

import { useState, type ReactNode } from "react";
import { infopoints } from "@/constants/infopoints";
import { UiComponentSlot } from "@/components/UiComponentSlot";
import { Collapsible } from "@/components/Collapsible";

const infoSections = Object.entries(infopoints.ingenuity)
    .map(([key, value]) => Object.assign(value, { key }))
    .sort((a, b) => a.label.localeCompare(b.label));

type Props = {
    children: ReactNode;
};

export default function IngenuityLayout(props: Props) {
    const { children } = props;

    const [detail, setDetail] = useState<string | null>(null);
    const toggleDetail = (key: string) => {
        setDetail((prev) => {
            if (prev === key) return null;
            else return key;
        });
    };

    return (
        <>
            <div className="absolute left-0 top-2 z-50 flex w-full justify-between px-2">
                <div
                    className="absolute flex w-full flex-col gap-2"
                    style={{
                        width: "min(40vw, 400px)",
                    }}
                >
                    {infoSections.map((section) => (
                        <Collapsible
                            key={section.key}
                            isOpen={detail === section.key}
                            label={section.label}
                            onOpen={() => toggleDetail(section.key)}
                            onClose={() => toggleDetail(section.key)}
                        >
                            {section.description}
                        </Collapsible>
                    ))}
                </div>

                <UiComponentSlot className="absolute right-2">
                    mission
                </UiComponentSlot>
            </div>

            {children}

            <div className="absolute bottom-2 left-1/2 z-50 flex -translate-x-1/2 justify-between px-6">
                {/* <UiComponentSlot
                    variant="sm"
                    as="button"
                    className="flex items-center gap-2"
                >
                    <VideoCameraIcon className="h-4" />
                    reset camera
                </UiComponentSlot> */}
            </div>
        </>
    );
}
