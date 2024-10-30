import ConfirmOrderItemCard from "@/app/components/card/confirmOrderCard";
import { CardContent } from "@mui/material";
import React from "react";
import { default as Style } from './style/index.module.scss';

export default function ConfirmOrder() {
  return (
    <div className={Style.ConfirmOrderItemCard}>
      <ConfirmOrderItemCard>
        <ConfirmOrderCardBody/>
      </ConfirmOrderItemCard>
    </div>
  );
}

export function ConfirmOrderCardBody(){
  return(
  <div className={Style.ConfirmOrderCardBody}>
    <CardContent>
      <div className={Style.ConfirmOrderCardItem}>
        <span>Item Name </span>
        <span>Noodles</span>
      </div>
      <div className={Style.ConfirmOrderCardItem}>
        <span>Quantity</span>
        <span>2</span>
      </div>
      <div className={Style.ConfirmOrderCardItem}>
        <span>From</span>
        <span>New Panna</span>
      </div>
    </CardContent>
  </div>
  )
}