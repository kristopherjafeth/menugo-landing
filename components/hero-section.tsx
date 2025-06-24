"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import imageBanner from "@/public/assets/images/hero-banner.png";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-7xl flex-col  lg:flex-row ">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                  Recibe pedidos por{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">WhatsApp</span>

                    <svg
                      className={`absolute -bottom-3 left-0 w-full h-6 transition-all duration-1500 ease-out ${
                        isVisible
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0"
                      }`}
                      viewBox="0 0 280 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 18C28 15 48 20 68 16C88 12 108 18 128 15C148 12 168 17 188 14C208 11 228 16 248 13C258 12 268 13 275 12"
                        stroke="#E8AE38"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        style={{
                          filter: "url(#pencilTexture)",
                          strokeDasharray: isVisible ? "none" : "400",
                          strokeDashoffset: isVisible ? "0" : "400",
                          transition: "stroke-dashoffset 1.5s ease-out",
                        }}
                      />

                      {/* Trazo secundario para grosor variable */}
                      <path
                        d="M10 19C30 16 50 21 70 17C90 13 110 19 130 16C150 13 170 18 190 15C210 12 230 17 250 14C260 13 270 14 277 13"
                        stroke="#E8AE38"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        opacity="0.7"
                        style={{
                          filter: "url(#pencilTexture2)",
                          strokeDasharray: isVisible ? "none" : "380",
                          strokeDashoffset: isVisible ? "0" : "380",
                          transition: "stroke-dashoffset 1.6s ease-out 0.1s",
                        }}
                      />

                      {/* Trazo de sombra/profundidad */}
                      <path
                        d="M6 17C26 14 46 19 66 15C86 11 106 17 126 14C146 11 166 16 186 13C206 10 226 15 246 12C256 11 266 12 273 11"
                        stroke="#E8AE38"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        opacity="0.4"
                        style={{
                          filter: "url(#pencilTexture3)",
                          strokeDasharray: isVisible ? "none" : "360",
                          strokeDashoffset: isVisible ? "0" : "360",
                          transition: "stroke-dashoffset 1.7s ease-out 0.2s",
                        }}
                      />

                      {/* Pequeños trazos adicionales para realismo */}
                      <path
                        d="M15 16.5C35 14 55 18 75 15.5"
                        stroke="#E8AE38"
                        strokeWidth="1"
                        strokeLinecap="round"
                        opacity="0.6"
                        style={{
                          filter: "url(#pencilTexture4)",
                          strokeDasharray: isVisible ? "none" : "100",
                          strokeDashoffset: isVisible ? "0" : "100",
                          transition: "stroke-dashoffset 1.8s ease-out 0.3s",
                        }}
                      />

                      <path
                        d="M140 16C160 13.5 180 17 200 14.5"
                        stroke="#E8AE38"
                        strokeWidth="1"
                        strokeLinecap="round"
                        opacity="0.5"
                        style={{
                          filter: "url(#pencilTexture4)",
                          strokeDasharray: isVisible ? "none" : "80",
                          strokeDashoffset: isVisible ? "0" : "80",
                          transition: "stroke-dashoffset 1.9s ease-out 0.4s",
                        }}
                      />

                      <defs>
                        {/* Filtro principal para textura de lápiz */}
                        <filter
                          id="pencilTexture"
                          x="0%"
                          y="0%"
                          width="100%"
                          height="100%"
                        >
                          <feTurbulence
                            baseFrequency="0.08"
                            numOctaves="4"
                            result="noise"
                            seed="3"
                          />
                          <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="1.5"
                          />
                          <feGaussianBlur stdDeviation="0.2" />
                        </filter>

                        {/* Filtro secundario */}
                        <filter
                          id="pencilTexture2"
                          x="0%"
                          y="0%"
                          width="100%"
                          height="100%"
                        >
                          <feTurbulence
                            baseFrequency="0.06"
                            numOctaves="3"
                            result="noise"
                            seed="5"
                          />
                          <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="1.2"
                          />
                          <feGaussianBlur stdDeviation="0.3" />
                        </filter>

                        {/* Filtro para sombra */}
                        <filter
                          id="pencilTexture3"
                          x="0%"
                          y="0%"
                          width="100%"
                          height="100%"
                        >
                          <feTurbulence
                            baseFrequency="0.04"
                            numOctaves="2"
                            result="noise"
                            seed="7"
                          />
                          <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="0.8"
                          />
                          <feGaussianBlur stdDeviation="0.4" />
                        </filter>

                        {/* Filtro para detalles pequeños */}
                        <filter
                          id="pencilTexture4"
                          x="0%"
                          y="0%"
                          width="100%"
                          height="100%"
                        >
                          <feTurbulence
                            baseFrequency="0.12"
                            numOctaves="2"
                            result="noise"
                            seed="9"
                          />
                          <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="0.6"
                          />
                        </filter>
                      </defs>
                    </svg>

                    {/* Efecto de presión del lápiz (puntos y marcas) */}
                    <div
                      className={`absolute -bottom-2 left-0 w-full h-4 transition-all duration-2000 ease-out delay-500 ${
                        isVisible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {/* Pequeñas marcas de presión */}
                      <div className="absolute left-[15%] top-1 w-1 h-0.5 bg-[#E8AE38] rounded-full opacity-30 transform rotate-12"></div>
                      <div className="absolute left-[35%] top-0.5 w-0.5 h-1 bg-[#E8AE38] rounded-full opacity-40 transform -rotate-6"></div>
                      <div className="absolute left-[55%] top-1.5 w-1 h-0.5 bg-[#E8AE38] rounded-full opacity-25 transform rotate-8"></div>
                      <div className="absolute left-[75%] top-0 w-0.5 h-1 bg-[#E8AE38] rounded-full opacity-35 transform -rotate-12"></div>
                      <div className="absolute left-[85%] top-1 w-1 h-0.5 bg-[#E8AE38] rounded-full opacity-30 transform rotate-15"></div>
                    </div>
                  </span>{" "}
                  sin complicaciones
                </h1>

                <p className="mt-8 max-w-2xl text-pretty text-lg">
                  Digitaliza tu menú y empieza a vender fácil, rápido y sin
                  pagar comisiones.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap">
                        Empieza gratis hoy mismo
                      </span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">
                        Conoce los planes disponibles
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div>
                <Image
                  className="-z-10 order-first ml-auto h-[500px] w-full object-contain "
                  src={imageBanner}
                  alt="Abstract Object"
                  height="800"
                  width="500"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Ellos se unieron al cambio</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      alt="Column Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/github.svg"
                      alt="GitHub Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nike.svg"
                      alt="Nike Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                      alt="Lemon Squeezy Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/laravel.svg"
                      alt="Laravel Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lilly.svg"
                      alt="Lilly Logo"
                      height="28"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-6 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/openai.svg"
                      alt="OpenAI Logo"
                      height="24"
                      width="auto"
                    />
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
