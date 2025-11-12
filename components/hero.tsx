"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const heroImageSrc = theme === "dark" ? "/herodark.jpeg" : "/herolight.jpeg";

  return (
    <div className="min-h-screen flex justify-center overflow-hidden">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 lg:py-0 pt-4 sm:pt-20">
        <div className="pt-4 sm:pt-16">
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
            Impulsa el Aprendizaje con Inteligencia Emocional Artificial
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg text-foreground/80">
            Diseñado para apoyar a docentes, padres y psicólogos, ayuda a mejorar la concentración, reducir el estrés y promover el bienestar emocional durante el proceso educativo.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Ingresar
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              Conoce Más
            </Button>
          </div>
        </div>
        <div className="relative w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-[calc(100vh-4rem)] rounded-xl overflow-hidden">
          {mounted && (
            <Image
              src={heroImageSrc}
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              quality={100}
              priority
              sizes="(max-width: 1024px) 100vw, 1000px"
            />
          )}
        </div>
      </div>
    </div>
  );
}
