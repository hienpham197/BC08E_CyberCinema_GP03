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

  const renderFilms = () => {
    return arrAllFilmInfo?.map((film, index) => {
      return (
        <div className='multipleRow__wrapper' key={index}>
          <div className='multipleRow__item'>
            <div className='multipleRow__item-bg'>
              <NavLink to={`/detail/${film.maPhim}`} className='btn-booking'>
                ĐẶT VÉ
              </NavLink>
              <div
                className='btn-trailer'
                onClick={() => {
                  setModal(true);
                  setTrailer(film.trailer);
                }}
              >
                <svg
                  viewBox='0 0 295 295'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M278.527 79.946C268.203 59.923 253.147 42.242 234.989 28.814C232.324 26.844 228.568 27.407 226.597 30.071C224.626 32.735 225.19 36.492 227.854 38.463C244.541 50.803 258.375 67.049 267.862 85.446C277.802 104.723 282.842 125.574 282.842 147.422C282.842 222.093 222.092 282.843 147.421 282.843C72.75 282.843 12 222.093 12 147.421C12 72.749 72.75 12 147.421 12C150.734 12 153.421 9.313 153.421 6C153.421 2.687 150.734 0 147.421 0C66.133 0 0 66.133 0 147.421C0 228.709 66.133 294.842 147.421 294.842C228.709 294.842 294.842 228.709 294.842 147.421C294.842 123.977 289.201 100.645 278.527 79.946Z'
                    fill='white'
                  />
                  <path
                    d='M109.699 78.969C107.823 80.036 106.664 82.028 106.664 84.185V215.859C106.664 219.173 109.351 221.859 112.664 221.859C115.977 221.859 118.664 219.173 118.664 215.859V94.74L207.497 147.623L142.173 189.71C139.388 191.505 138.584 195.218 140.379 198.003C142.175 200.789 145.887 201.593 148.673 199.797L222.138 152.464C223.884 151.339 224.924 149.391 224.887 147.314C224.85 145.237 223.742 143.327 221.957 142.264L115.733 79.029C113.877 77.926 111.575 77.902 109.699 78.969Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
            <div className='multipleRow__item-content'>
              <img
                src={film.hinhAnh}
                alt={film.tenPhim}
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src = `/images/common/error-img.jpg`;
                }}
              />
              <p>
                <span className='c-review__raiting'>PG-13</span> {film.tenPhim}
              </p>
              <div className='c-review__score'>
                <span>{film.danhGia.toFixed(1)}</span>
                <span>IMDb</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div></div>;
}
