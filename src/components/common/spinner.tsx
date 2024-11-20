import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Spinner({ className }: { className?: string }) {
  return (
    <div className="flex-grow w-full h-full flex justify-center items-center">
      <LoaderCircle
        className={cn("text-primary animate-spin h-12 w-12", className)}
      />
    </div>
  );
}
