import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button, ButtonProps } from "../ui/button";

export function CTAButton({
  signedOutText = "Try Now",
  signedInText = "Go to Dashboard",
  buttonProps = {},
}: {
  signedOutText?: string;
  signedInText?: string;
  buttonProps?: Omit<ButtonProps, "asChild">;
}) {
  return (
    <>
      <SignedIn>
        <Button asChild {...buttonProps}>
          <Link href="/dashboard">{signedInText}</Link>
        </Button>
      </SignedIn>
      <SignedOut>
        <Button asChild {...buttonProps}>
          <Link href="/app">{signedOutText}</Link>
        </Button>
      </SignedOut>
    </>
  );
}
