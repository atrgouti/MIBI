import { useState } from "react";
import styles from "./productInfos.module.css";
function ProductInfos({ productData }) {
  const [selectedInfo, setSelectedInfo] = useState("description");
  return (
    <div className={styles.productInfos}>
      <div className={styles.workingArea}>
        <div className={styles.sections}>
          <p
            className={
              selectedInfo === "description" ? styles.activeSection : ""
            }
            onClick={() => setSelectedInfo("description")}
          >
            PRODUCT DETAILS
          </p>
          <p
            className={selectedInfo === "reviews" ? styles.activeSection : ""}
            onClick={() => setSelectedInfo("reviews")}
          >
            REVIEWS
          </p>
          <p
            className={selectedInfo === "sizeFit" ? styles.activeSection : ""}
            onClick={() => setSelectedInfo("sizeFit")}
          >
            SIZE & FIT
          </p>
          <p
            className={
              selectedInfo === "shippingAndReturns" ? styles.activeSection : ""
            }
            onClick={() => setSelectedInfo("shippingAndReturns")}
          >
            SHIPPING & RETURNS
          </p>
        </div>
        <div className={styles.line}></div>
        {selectedInfo === "description" && (
          <div className={styles.description}>{productData.description}</div>
        )}
        {selectedInfo === "reviews" && (
          <div className={styles.reviews}>
            <p>No reviews yet</p>
            <button>Write a review</button>
          </div>
        )}
        {selectedInfo === "sizeFit" && (
          <div className={styles.sizeFit}>
            <h3>WOMEN`S BODY SIZING CHART</h3>
            <table border="1px">
              <thead>
                <tr>
                  <td>Size</td>
                  <td>XS</td>
                  <td>S</td>
                  <td>M</td>
                  <td>L</td>
                  <td>XL</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chest</td>
                  <td>31&quot; - 33&quot;</td>
                  <td>33&quot; - 35&quot;</td>
                  <td>35&quot; - 37&quot;</td>
                  <td>37&quot; - 39&quot;</td>
                  <td>39&quot; - 42&quot;</td>
                </tr>
                <tr>
                  <td>Waist</td>
                  <td>24&quot; - 26&quot;</td>
                  <td>26&quot; - 28&quot;</td>
                  <td>28&quot; - 30&quot;</td>
                  <td>30&quot; - 32&quot;</td>
                  <td>32&quot; - 35&quot;</td>
                </tr>
                <tr>
                  <td>Hip</td>
                  <td>34&quot; - 36&quot;</td>
                  <td>36&quot; - 38&quot;</td>
                  <td>38&quot; - 40&quot;</td>
                  <td>40&quot; - 42&quot;</td>
                  <td>42&quot; - 44&quot;</td>
                </tr>
                <tr>
                  <td>Inseam</td>
                  <td>30&quot;</td>
                  <td>30½&quot;</td>
                  <td>31&quot;</td>
                  <td>31½&quot;</td>
                  <td>32&quot;</td>
                </tr>
                <tr>
                  <td>Long Inseam</td>
                  <td>31½&quot;</td>
                  <td>32&quot;</td>
                  <td>32½&quot;</td>
                  <td>33&quot;</td>
                  <td>33½&quot;</td>
                </tr>
              </tbody>
            </table>
            <h3 style={{ marginTop: "20px" }}>MEN`S BODY SIZING CHART</h3>
            <table border="1px">
              <thead>
                <tr>
                  <td>Size</td>
                  <td>XS</td>
                  <td>S</td>
                  <td>M</td>
                  <td>L</td>
                  <td>XL</td>
                  <td>XXL</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chest</td>
                  <td>33&quot; - 36&quot;</td>
                  <td>36&quot; - 39&quot;</td>
                  <td>39&quot; - 41&quot;</td>
                  <td>41&quot; - 43&quot;</td>
                  <td>43&quot; - 46&quot;</td>
                  <td>46&quot; - 49&quot;</td>
                </tr>
                <tr>
                  <td>Waist</td>
                  <td>27&quot; - 30&quot;</td>
                  <td>30&quot; - 33&quot;</td>
                  <td>33&quot; - 35&quot;</td>
                  <td>36&quot; - 38&quot;</td>
                  <td>38&quot; - 42&quot;</td>
                  <td>42&quot; - 45&quot;</td>
                </tr>
                <tr>
                  <td>Hip</td>
                  <td>33&quot; - 36&quot;</td>
                  <td>36&quot; - 39&quot;</td>
                  <td>39&quot; - 41&quot;</td>
                  <td>41&quot; - 43&quot;</td>
                  <td>43&quot; - 46&quot;</td>
                  <td>46&quot; - 49&quot;</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {selectedInfo === "shippingAndReturns" && (
          <div className={styles.shippingAndReturns}>
            <h3>Returns Policy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              eros justo, accumsan non dui sit amet. Phasellus semper volutpat
              mi sed imperdiet. Ut odio lectus, vulputate non ex non, mattis
              sollicitudin purus. Mauris consequat justo a enim interdum, in
              consequat dolor accumsan. Nulla iaculis diam purus, ut vehicula
              leo efficitur at. <br />
              Interdum et malesuada fames ac ante ipsum primis in faucibus. In
              blandit nunc enim, sit amet pharetra erat aliquet ac.
            </p>
            <h3 style={{ marginTop: "20px" }}>Shipping</h3>
            <p>
              Pellentesque ultrices ut sem sit amet lacinia. Sed nisi dui,
              ultrices ut turpis pulvinar. Sed fringilla ex eget lorem
              consectetur, consectetur blandit lacus varius. Duis vel
              scelerisque elit, et vestibulum metus. Integer sit amet tincidunt
              tortor. Ut lacinia ullamcorper massa, a fermentum arcu vehicula
              ut. Ut efficitur faucibus dui Nullam tristique dolor eget turpis
              consequat varius. Quisque a interdum augue. Nam ut nibh mauris.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductInfos;
