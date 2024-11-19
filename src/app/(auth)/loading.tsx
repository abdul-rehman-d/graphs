import { LoaderCircle } from "lucide-react";

export default function LoadingDashboard() {
  return (
    <div className="flex-grow flex justify-center items-center">
      <LoaderCircle className="animate-spin h-12 w-12" />
    </div>
  );
}
