import React from "react";
import Carousel from "react-material-ui-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const MainCarousel = () => {
  var items = [
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX/xqxbIpY8AAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg==",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEV+qpKz/N6LAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg==",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAACUCAMAAAD70yGHAAAAA1BMVEWSfqreUk/KAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBnA8UkAAEmGMCJAAAAAElFTkSuQmCC",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEVGGVla2ozgAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg==",
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
