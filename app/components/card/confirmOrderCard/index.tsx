import { Card } from "@mui/material";
import React, { ReactNode } from "react";

export default function ConfirmOrderItemCard({
  children,
}: {
  children: ReactNode;
}) {
  return <Card>{children}</Card>;
}
