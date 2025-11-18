"use client";

import FAQ from "@/app/UI/FAQ";
import HomePage from "@/app/UI/Home";
import { Hero } from "@/app/components/Hero";
import ReviewPage from "@/app/UI/Review";

export default function Beranda() {
  return (
    <>
      <Hero />
      <HomePage />
      <ReviewPage />
      <FAQ />
    </>
  );
}
