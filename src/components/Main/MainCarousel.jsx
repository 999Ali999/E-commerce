import React from "react";
import Carousel from "react-material-ui-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const MainCarousel = (props) => {
  var items = [
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/d25878b80b2dc832f4847cb949d121fa4da9677f_1690712455.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/edb74efddd45d46cecafeb7a6736bb5e6eaa474b_1691080025.gif?x-oss-process=image?x-oss-process=image/format,webp",
    },
  ];

  return (
    <Carousel
      animation="fade"
      navButtonsAlwaysVisible="true"
      duration="550"
      height="390px"
      PrevIcon={<KeyboardArrowLeftIcon />}
      NextIcon={<KeyboardArrowRightIcon />}
      indicators="false"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <img
      style={{
        objectFit: "cover",
        width: "100%",
        height: "390px",
        borderRadius: "5px",
      }}
      src={props.item.image}
      alt="picture"
    />
  );
}

export default MainCarousel;
