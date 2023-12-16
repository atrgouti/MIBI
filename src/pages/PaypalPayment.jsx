import { PayPalButtons } from "@paypal/react-paypal-js";
import styles from "./productsPage.module.css";

function PaypalPayment() {
  const serverUrl = "http://localhost:3000";

  const createOrder = (data, actions) => {
    // Order is created on the server, and the order id is returned
    return fetch(`${serverUrl}/my-server/create-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: {
          description: "wood candy sofa",
          cost: "10.00",
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
      className={styles.butItNow}
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
}

export default PaypalPayment;
