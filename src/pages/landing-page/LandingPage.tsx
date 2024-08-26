import { Suspense } from "react";

import { Outlined } from "@/components/Outlined";
import { assets, pages } from "@/utils";
import { IngenuityDetail } from "@/pages/landing-page/components/IngenuityDetail";
import { PerseveranceDetail } from "@/pages/landing-page/components/PerseveranceDetail";

export const LandingPage = () => {
  return (
    <>
      <main className="bg-black h-screen w-full">
        <div className="flex flex-col">
          <div className="flex gap-4 items-center">
            <img
              src={assets.nasaLogo}
              alt="Nasa logo"
              className="aspect-square h-48"
            />
            <Outlined
              strokeWidth="2px"
              strokeColor="white"
              style={{
                fontFamily: "'Noto Serif', serif",
              }}
            >
              <h1 className="text-8xl font-black">MARS 2020</h1>
            </Outlined>
          </div>
        </div>
        <div className="flex gap-4 p-4 w-full">
          <a href={pages.ingenuity} className="w-full">
            <Suspense>
              <IngenuityDetail />
            </Suspense>
          </a>
          <a href={pages.perseverance} className="w-full">
            <Suspense>
              <PerseveranceDetail />
            </Suspense>
          </a>
        </div>
      </main>
    </>
  );
};
