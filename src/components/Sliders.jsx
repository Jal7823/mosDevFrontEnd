import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { fetchData } from "../utils/crud";
import { useEffect, useState } from "react";

function Sliders() {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await fetchData("publicity/");
        setImages(data);
      } catch (e) {
        console.log(e);
      }
    };
    getImages();
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const imageItems = Images.map((image, index) => (
    <img
      key={index}
      className="h-[600px] w-full object-cover mx-auto"
      src={image.url}
      onDragStart={handleDragStart}
      alt={`Slider ${index}`}
      style={{ margin: 0, padding: 0, maxWidth: "100%" }}
    />
  ));

  return (
    <div style={{ maxWidth: "100vw" }}>
      <AliceCarousel
        infinite
        autoPlay
        autoPlayInterval={3000}
        mouseTracking
        items={imageItems}
      />
    </div>
  );
}

export default Sliders;
