"use client";

import { MouseEventHandler, useState } from "react";
import { toast } from "sonner";
import { Copy, Check } from "lucide-react";
import { Button, ButtonProps } from "../ui/button";

export function CopyToClipboardButton({
  graphData,
  text = "Copy to Clipboard",
  toastTitle = "Copied!",
  toastMessage = "Graph data copied to clipboard. You can now paste it into Excalidraw.",
  ...props
}: {
  graphData: unknown;
  text?: string;
  toastTitle?: string;
  toastMessage?: string;
} & Omit<ButtonProps, "onClick" | "asChild">) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard: MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();
    try {
      const elements = graphData;
      const serializedElements = JSON.stringify(elements);
      await navigator.clipboard.writeText(serializedElements);
      setCopied(true);
      toast.success(toastTitle, {
        description: toastMessage,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Error", {
        description: "Failed to copy graph data to clipboard: " + err,
      });
    }
  };

  return (
    <Button onClick={copyToClipboard} {...props}>
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          <span>{text}</span>
        </>
      )}
    </Button>
  );
}
