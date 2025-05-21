"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

import * as React from "react";

import { cn } from "@/lib/utils";

interface AvatarProps
  extends React.ComponentProps<typeof AvatarPrimitive.Root> {
  initials: string;
  initialClassName?: string;
}

function Avatar({
  className,
  initials,
  initialClassName,
  ...props
}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <AvatarPrimitive.Fallback
        data-slot="avatar-fallback"
        className={cn(
          "bg-muted flex size-full items-center justify-center rounded-full",
          initialClassName
        )}
      >
        {initials}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}

export { Avatar };
