import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function SecondaryButton({
  href,
  text,
  className
}: {
  href?: string;
  text: string;
  className?: string;
}) {
  return (
    <Link href={href ? href : "#"}>
      <Button
        variant="outlined"
        style={{
          backgroundColor: "transparent",
          height: "48px",
          border: "1px solid #1A5FA4",
        }}
        className={className}
      >
        {text}
      </Button>
    </Link>
  );
}
