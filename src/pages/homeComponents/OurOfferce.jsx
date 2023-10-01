import offerStyles from "./offerStyles.module.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faTruckFast,
  faRotateLeft,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
function OurOfferce() {
  return (
    <section className={offerStyles.section}>
      <div className={offerStyles.offerce}>
        <div className={offerStyles.ourOffer}>
          <FontAwesomeIcon icon={faPhone} className={offerStyles.offericon} />
          <div className="description">
            <p>Call Us Anytime</p>
            <p>+1 (250) 444-5555</p>
          </div>
        </div>
        <div className={offerStyles.ourOffer}>
          <FontAwesomeIcon
            icon={faTruckFast}
            className={offerStyles.offericon}
          />
          <div className="description">
            <p>Free Shipping</p>
            <p>When you spend $100+</p>
          </div>
        </div>
        <div className={offerStyles.ourOffer}>
          <FontAwesomeIcon
            icon={faRotateLeft}
            className={offerStyles.offericon}
          />
          <div className="description">
            <p>Free Returns</p>
            <p>30-days free return policy.</p>
          </div>
        </div>
        <div className={offerStyles.ourOffer}>
          <FontAwesomeIcon icon={faLock} className={offerStyles.offericon} />
          <div className="description">
            <p>Secured Payments</p>
            <p>We accept major credit cards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurOfferce;
