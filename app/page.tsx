"use client"
import React from "react";
import {Button} from "@heroui/react";
import BasicNavbar from "@/components/navbar";
import FasdeInImage from "@/components/background/motion";
//import {Icon} from "@iconify/react";

import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-background">
      <BasicNavbar />
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <Button
            className="h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500"
            endContent={<IoIosArrowRoundForward size={22}/>}
            radius="full"
            variant="bordered"
          >
            Start met Ontdekken
          </Button>
          <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
            {/* 
              NOTE: To use `bg-hero-section-title`, you need to add the following to your tailwind config.
              ```
              backgroundImage: {
                "hero-section-title":
                  "linear-gradient(91deg, #FFF 32.88%, rgba(255, 255, 255, 0.40) 99.12%)",
              },
              ```
            */}
            <div className="bg-hero-section-title bg-clip-text text-transparent text-white">
            Altijd de Beste Deals <br /> van Bol.com op Eén Plek
            </div>
          </div>
          <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
          Met BolDeals vind je razendsnel de scherpste aanbiedingen van Bol.com. Dagelijks geüpdatet, overzichtelijk en direct besparen.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              className="h-10 w-[183px] bg-default-foreground px-[20px] py-[10px] text-small font-medium leading-5 text-background"
              radius="full"
            >
              Bekijk Populaire Deals
            </Button>
            <Button
              className="h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                  <IoIosArrowRoundForward size={21}/>
                </span>
              }
              radius="full"
              variant="bordered"
            >
              Meer Details
            </Button>
          </div>
        </section>
        <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
          {/**
           * If using in a nextjs project, use next/image instead of <img> in <FadeInImage>.
           * Also pass the following additional props to <FadeInImage>.
           *
           * ```tsx
           * <FadeInImage
           *   fill
           *   priority
           *   // existing code...
           * />
           * ```
           */}
          <FasdeInImage
            alt="Gradient background"
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png"
          />
        </div>
      </main>
    </div>
  );
}
