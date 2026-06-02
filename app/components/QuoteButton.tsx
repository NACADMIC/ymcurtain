"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";

interface QuoteButtonProps {
  variant?: "primary" | "white";
  className?: string;
  children: React.ReactNode;
}

export default function QuoteButton({ variant = "white", className = "", children }: QuoteButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseClass = variant === "white"
    ? "inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/95 transition-all text-[15px]"
    : "inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/95 transition-all shadow-lg text-lg";

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className={`${baseClass} ${className}`}>
        {children}
      </button>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
