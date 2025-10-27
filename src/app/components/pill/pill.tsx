import Link from "next/link";
import React, { ReactNode } from "react";

const Pill = ({
  children,
  accent,
  link,
  isBlank,
}: {
  children: ReactNode;
  accent?: string;
  link?: string;
  isBlank?: boolean;
}) => {
  return link ? (
    <Link
      className={
        "flex items-center gap-1 hover:gap-2 border w-max rounded-4xl px-4 py-2 hover:tracking-wider transition-all scroll-smooth"
      }
      style={{ borderColor: accent, color: accent, background: accent + "18" }}
      href={link}
      target={isBlank ? "_blank" : "_self"}
    >
      {children}
    </Link>
  ) : (
    <div
      className={
        "flex items-center gap-1 hover:gap-2 border w-max rounded-4xl px-4 py-2 hover:tracking-wider transition-all scroll-smooth"
      }
      style={{ borderColor: accent, color: accent, background: accent + "18" }}
    >
      {children}
    </div>
  );
};

export default Pill;
