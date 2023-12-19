import { PayPalButtons } from "@paypal/react-paypal-js";
import styles from "./productsPage.module.css";
import { string } from "prop-types";
import { useEffect, useState } from "react";
import { useRef } from "react";

function PaypalPayment({ price }) {
  const serverUrl = "http://localhost:3000";

  const createOrder = (data, actions) => {
    // Order is created on the server, and the order id is returned
    const productCost = typeof price === "number" ? price.toString() : price;

    return fetch(`${serverUrl}/my-server/create-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: {
          description: "wood candy sofa",
          cost: productCost,
        },
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };

  const onApprove = (data, actions) => {
    // Order is captured on the server, and the response is returned to the browser
    return fetch(`${serverUrl}/my-server/capture-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: data.orderID, // Fixed typo: change orderID to orderId
      }),
    }).then((response) => {
      console.log("Payment successful");
      return response.json(); // Add return statement
    });
  };

  return (
    <PayPalButtons
      // onClick={(e) => bbb(e)}
      className={styles.butItNow}
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
}

export default PaypalPayment;
