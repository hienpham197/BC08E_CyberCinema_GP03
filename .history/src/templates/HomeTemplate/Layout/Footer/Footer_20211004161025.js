import React from "react";
import "./_Footer.scss";
import partNersLogo from "../../../../data/partNersLogo.json";
import {
  AndroidOutlined,
  AppleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
export default function Footer(props) {
  const renderPartners = () => {
    return partNersLogo.arrPartners.map((partNer, index) => {
      return (
        <a href={partNer.webSite} target='_blank' key={index}>
          <img
            src={partNer.hinhAnh}
            alt={partNer.name}
            style={{
              width: "30px",
              height: "30px",
              background: "#fff",
              borderRadius: "50%",
            }}
          />
        </a>
      );
    });
  };
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__top'>
          <div className='footer__item'>
            <h3>CyberCinema</h3>
            <ul>
              <li>
                <a href=''>FAQ</a>
              </li>
              <li>
                <a href=''>Brand Guidelines</a>
              </li>
              <li>
                <a href=''>Thoả thuận sử dụng</a>
              </li>
              <li>
                <a href=''>Chính sách bảo mật</a>
              </li>
            </ul>
          </div>
          <div className='footer__item'>
            <h3>Đối tác</h3>
            <div className='footer__partner'>{renderPartners()}</div>
          </div>
          <div className='footer__item'>
            <div className='footer__contact'>
              <h3>Mobile App</h3>
              <div className='footer__app'>
                <a
                  href='https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197'
                  target='_blank'
                >
                  <img
                    src='https://tix.vn/app/assets/img/icons/apple-logo.png'
                    alt='appstore'
                  />
                </a>

                <a
                  href='https://play.google.com/store/apps/details?id=vn.com.vng.phim123'
                  target='_blank'
                >
                  <img
                    src='https://tix.vn/app/assets/img/icons/android-logo.png'
                    alt='playstore'
                  />
                </a>
              </div>
              <div className='footer__social'>
                <h3>Social</h3>
                <a href='https://www.facebook.com/tix.vn/' target='_blank'>
                  <img
                    src='https://tix.vn/app/assets/img/icons/facebook-logo.png'
                    alt='facebook'
                  />
                </a>
                <a href='https://zalo.me/tixdatve' target='_blank'>
                  <img
                    src='https://tix.vn/app/assets/img/icons/zalo-logo.png'
                    alt='zalo'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='footer__bottom'>Bot</div>
      </div>
    </footer>
  );
}
