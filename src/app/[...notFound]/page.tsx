"use client";
import { assets } from "@/utils/assets";
import { Canvas } from "@/components/react-three-fiber/Canvas";
import { Html, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { UiComponentSlot } from "@/components/UiComponentSlot";
import Link from "next/link";

export default function NotFoundPage() {
    const model = useGLTF(assets.not_found);

    return (
        <>
            <div className="absolute left-0 top-0 z-0 h-screen w-full">
                <Canvas
                    camera={
                        <PerspectiveCamera
                            makeDefault
                            position={[20, 16, 20]}
                            rotation={[0, Math.PI / 2, 0]}
                            fov={60}
                        />
                    }
                >
                    <Suspense>
                        <primitive object={model.scene} />
                    </Suspense>

                    <Html
                        occlude="blending"
                        transform
                        rotation-x={-Math.PI / 2}
                        position={[0, 0.01, 8]}
                    >
                        <div className="flex flex-col gap-4">
                            <h1 className="text-9xl text-white">
                                page not found
                            </h1>
                        </div>
                    </Html>
                </Canvas>
            </div>

            <UiComponentSlot
                as="button"
                asChild
                className="absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 items-center text-2xl"
            >
                <Link href="/">back to home</Link>
            </UiComponentSlot>
        </>
    );
}
