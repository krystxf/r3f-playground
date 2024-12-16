import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ingenuity | Three.js",
    description: "Ingenuity helicopter on Mars",
};

export { IngenuityPageCanvas as default } from "@/app/ingenuity/canvas";
