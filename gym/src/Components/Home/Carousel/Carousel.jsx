import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react"; 
import data from './CarouselImage';

function CarouselHome() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item interval={2000}>        
            <img
              style={{height:"750px"}}
              className="d-block w-100"
              src={slide.imageUrl}
              alt="slider image"
            />
          </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default CarouselHome;