"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

const dynamicRoutePrefix = "/blog/"; 

export default function ClientHeader() {
  const pathname = usePathname();

  const hideHeader =
    pathname.startsWith(dynamicRoutePrefix);

  if (hideHeader) return null;

  return <Header />;
}
