import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function PrimaryButton({
  text,
  href,
  arrow = false,
  className,
}: {
  text: string;
  href?: string;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link href={href ? href : "#"}>
      <Button
        type="primary"
        size="large"
        icon={arrow && <ArrowRightOutlined />}
        iconPosition="end"
        style={{
          backgroundColor: "#1A5FA4",
          borderColor: "#1A5FA4",
          height: "48px",
          paddingLeft: "24px",
          paddingRight: "24px",
          fontSize: "16px",
          fontWeight: "500",
          borderRadius: "6px",
        }}
        className={className}
      >
        {text}
      </Button>
    </Link>
  );
}
