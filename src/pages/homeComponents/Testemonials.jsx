import styles from "./Testemonials.module.css";
import Review from "./Review";
import ShortLine from "../../components/ShoerLine";
// react crousal
import Carousel from "@itseasy21/react-elastic-carousel";

// font awsome package
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

// importing the images of the testemonials
import bilal from "/unnamed.jpg";
import jack from "/jack.jpg";
import max from "/max.jpg";

function Testemonials() {
  return (
    <section className={styles.testemonialsSection}>
      <div className={styles.testemonials}>
        <div className={styles.title}>
          <ShortLine />
          <p>Happy Customers</p>
          <ShortLine />
        </div>
        <div className={styles.reviews}>
          <Carousel
            itemsToShow={3}
            pagination={false}
            showArrows={true}
            renderArrow={({ type, onClick }) => (
              <button
                className={styles.customArrow} // Add a custom CSS class
                onClick={onClick}
              >
                {type === "PREV" ? (
                  <FontAwesomeIcon icon={faChevronLeft} />
                ) : (
                  <FontAwesomeIcon icon={faChevronRight} />
                )}
              </button>
            )}
            breakPoints={[
              {
                width: 1,
                itemsToShow: 1,
                itemsToScroll: 1,
              }, // Screens less than 600px
              { width: 600, itemsToShow: 2, itemsToScroll: 1 }, // Screens between 600px and 900px
              { width: 900, itemsToShow: 3, itemsToScroll: 1 }, // Screens wider than 900px
            ]}
          >
            <Review
              image={bilal}
              description={
                "I deal quite a bit with programming and manage a lot of integration with customer services of different companies, but i must say, the quality of your product and the service you offering is the best i have experienced!!"
              }
              numberOfStarts={5}
              namee={"RICHARD PARKER"}
              position={"FASHION DESIGNER"}
            />
            <Review
              image={jack}
              description={
                "I deal quite a bit with programming and manage a lot of integration with customer services of different companies, but i must say, the quality of your product and the service you offering is the best i have experienced!!"
              }
              numberOfStarts={5}
              namee={"RICHARD PARKER"}
              position={"FASHION DESIGNER"}
            />
            <Review
              image={max}
              description={
                "I deal quite a bit with programming and manage a lot of integration with customer services of different companies, but i must say, the quality of your product and the service you offering is the best i have experienced!!"
              }
              numberOfStarts={4}
              namee={"RICHARD PARKER"}
              position={"FASHION DESIGNER"}
            />
            <Review
              image={bilal}
              description={
                "I deal quite a bit with programming and manage a lot of integration with customer services of different companies, but i must say, the quality of your product and the service you offering is the best i have experienced!!"
              }
              numberOfStarts={4}
              namee={"RICHARD PARKER"}
              position={"FASHION DESIGNER"}
            />
            <Review
              image={bilal}
              description={
                "I deal quite a bit with programming and manage a lot of integration with customer services of different companies, but i must say, the quality of your product and the service you offering is the best i have experienced!!"
              }
              numberOfStarts={4}
              namee={"RICHARD PARKER"}
              position={"FASHION DESIGNER"}
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Testemonials;
