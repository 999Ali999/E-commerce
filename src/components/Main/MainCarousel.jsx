import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const MainCarousel = (props) => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/d25878b80b2dc832f4847cb949d121fa4da9677f_1690712455.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/edb74efddd45d46cecafeb7a6736bb5e6eaa474b_1691080025.gif?x-oss-process=image?x-oss-process=image/format,webp",
    },
  ];

  return (
    <Carousel animation="slide" navButtonsAlwaysVisible="true" duration="550">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper>
      <img
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        src={props.item.image}
        alt={props.item.name}
      />
    </Paper>
  );
}

export default MainCarousel;
