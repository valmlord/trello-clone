"use client";

import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FormSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary" | "transparent";
};

export const FormSubmit = ({
  children,
  disabled,
  className,
  variant = "primary"
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button>
      {children}
    </Button>
  );
};