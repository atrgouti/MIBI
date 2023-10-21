import { useEffect, useState } from "react";
import { Blurhash } from "../../node_modules/react-blurhash/";
import styles from "../pages/homeComponents/ProductsQuickView.module.css";
function BlurHashImageComponent({
  src,
  hash,
  height,
  width,
  borderRadios = "0px",
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);
  return (
    <>
      {!imageLoaded && (
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: `${borderRadios}`,
            overflow: "hidden",
          }}
        >
          <Blurhash
            hash={hash}
            height={height}
            width={width}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      {imageLoaded && (
        <img src={`${src}`} alt="" className={styles.productImage} />
      )}
    </>
  );
}

export default BlurHashImageComponent;
