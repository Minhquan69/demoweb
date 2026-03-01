"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MenuHighlighter() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as any).setActiveMenu === "function") {
      (window as any).setActiveMenu();
    }
  }, [pathname]);

  return null;
}

