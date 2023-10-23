import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Sliders() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img className="w-full h-[600px] object-contain" src="https://thumbs.dreamstime.com/z/future-technology-cybernetics-security-internet-finger-scanning-provides-access-to-identity-large-data-corporations-286445955.jpg?w=2048" onDragStart={handleDragStart} role="presentation"  />,
    <img className="w-full h-[600px] object-contain" src="https://thumbs.dreamstime.com/z/future-technology-cybernetics-security-internet-finger-scanning-provides-access-to-identity-large-data-corporations-286445955.jpg?w=2048" onDragStart={handleDragStart} role="presentation"  />,
    <img className="w-full h-[600px] object-contain" src="https://thumbs.dreamstime.com/z/future-technology-cybernetics-security-internet-finger-scanning-provides-access-to-identity-large-data-corporations-286445955.jpg?w=2048" onDragStart={handleDragStart} role="presentation"  />,
  ];
  
    return (
      <div>
        <AliceCarousel mouseTracking items={items} />
      </div>
    )
  }
  
  export default Sliders;
  