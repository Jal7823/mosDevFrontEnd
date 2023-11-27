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
      className="w-screen h-[600px] object-cover"
      src={image.url}
      onDragStart={handleDragStart}
      alt={`Slider ${index}`}
      style={{ margin: 0, padding: 0 }}
    />
  ));

  return (
    <div style={{ width: "100vw" }} >
      <AliceCarousel
      infinite
      autoPlay
      autoPlayInterval={3000}
      mouseTracking items={imageItems} 
      
/>
    </div>
  );
}

export default Sliders;
