import React from "react";
import Carousel from "react-material-ui-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const MainCarousel = () => {
  var items = [
    {
      image:
        // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX/xqxbIpY8AAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg==",
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/5c37cc462cb07cba158a8ca34f4faf9165896bb1_1691310513.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      image:
        // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEV+qpKz/N6LAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg==",
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/79731f04f68d1342a3f7dcbe1a579403197320f8_1691256257.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      image:
        // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAACUCAMAAAD70yGHAAAAA1BMVEWSfqreUk/KAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBnA8UkAAEmGMCJAAAAAElFTkSuQmCC",
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/09f9d5d268b09a77072496b2dd3b9e2ba8524889_1689504618.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      image:
        // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEVGGVla2ozgAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg==",
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/61fcbe4ce7991f5f6c0c1845cca5a68652da2d4d_1690699957.jpg?x-oss-process=image/quality,q_95/format,webp",
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
