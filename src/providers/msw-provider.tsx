"use client";

import { useEffect } from "react";
import { enableMSW } from "../api/mocks";

export default function MswProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    enableMSW();
    return () => {};
  });

  return <>{children}</>;
}
