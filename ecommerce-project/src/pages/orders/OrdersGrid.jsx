import { React, Fragment } from "react";
import dayjs from "dayjs";
import { OrderHeader } from "./OrderHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";

export function OrdersGrid({ orders }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div className="order-container">
            <OrderHeader order={order} />

            <OrderDetailsGrid order={order} />
          </div>
        );
      })}
    </div>
  );
}
