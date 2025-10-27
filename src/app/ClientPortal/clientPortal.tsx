"use client";
import React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ClientPortal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return createPortal(children, document.body);
};

export default ClientPortal;
