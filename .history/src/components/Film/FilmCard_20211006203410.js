import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./_FilmCard.scss";
import { history } from "./../../App";

export default function Film_Flip(props) {
  const { phim } = props;

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    slidesPerRow: 1,
    speed: 500,
    rows: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          arrows: false,
        },
      },
    ],
  };

  return <div></div>;
}
