import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Sliders() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img className="w-full h-[600px] object-contain" src="/public/logo.svg" onDragStart={handleDragStart} role="presentation"  />,
    <img className="w-full h-[600px] object-contain" src="/public/logo.svg" onDragStart={handleDragStart} role="presentation"  />,
    <img className="w-full h-[600px] object-contain" src="/public/logo.svg" onDragStart={handleDragStart} role="presentation"  />,
  ];
  
    return (
      <div>
        <AliceCarousel mouseTracking items={items} />
      </div>
    )
  }
  
  export default Sliders;
  