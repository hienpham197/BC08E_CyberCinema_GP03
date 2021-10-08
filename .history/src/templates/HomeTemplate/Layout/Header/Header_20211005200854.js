import React, { Fragment, useState } from "react";
import {
  CaretDownOutlined,
  UserOutlined,
  SecurityScanOutlined,
  LogoutOutlined,
  MenuOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { TOKEN_CYBERSOFT, USER_LOGIN } from "../../../../utils/setting";
import { history } from "../../../../App";
import { Link } from "react-scroll";

export default function Header() {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const [headerOnScroll, setHeaderOnScroll] = useState(false);
  const [menuOnMobile, setMenuOnMobile] = useState(false);
  const PADDING_TOP = -75;

  const logout = () => {
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(TOKEN_CYBERSOFT);
    history.push("/home");
    window.location.reload();
  };

  const headeronScroll = () => {
    const POSITION_DEFAULT = 80;
    if (window.scrollY >= POSITION_DEFAULT) {
      setHeaderOnScroll(true);
    } else {
      setHeaderOnScroll(false);
    }
  };

  const openSubmenu = () => {
    let submenu = document.querySelector(".submenu");
    submenu.classList.toggle("submenu-active");

    /* Close submenu when press ESC */
    document.addEventListener("keydown", (e) => {
      e = e || window.event;
      if (e.keyCode === 27) {
        submenu.classList.remove("submenu-active");
      }
    });
    /* Close submenu when click another place */
    // document.addEventListener('mouseup', () => {
    //     let isActive = submenu.classList.contains("submenu-active");
    //     if (isActive) {
    //         submenu.classList.remove("submenu-active");
    //     }
    // });
  };

  const closeMenuOnMobile = () => {
    setMenuOnMobile(false);
  };

  const openMenuOnMobile = () => {
    setMenuOnMobile(true);
  };

  const checkUserIsAdmin = () => {
    if (userLogin.maLoaiNguoiDung === "QuanTri") {
      return (
        <div className='submenu'>
          <NavLink to='/profile/generalprofile'>
            <UserOutlined />
            <span>Thông Tin</span>
          </NavLink>
          <NavLink to='/admin/statistics'>
            <SecurityScanOutlined />
            <span>Quản Trị</span>
          </NavLink>
          <button onClick={logout}>
            <LogoutOutlined />
            <span>Đăng Xuất</span>
          </button>
        </div>
      );
    }
    return (
      <div className='submenu'>
        <NavLink to='/profile/generalprofile'>
          <UserOutlined />
          <span>Thông Tin</span>
        </NavLink>
        <button onClick={logout}>
          <LogoutOutlined />
          <span>Đăng Xuất</span>
        </button>
      </div>
    );
  };

  const checkUserIsLogin = () => {
    if (userLogin !== null) {
      return (
        <div className='header__wrapper--info'>
          <p>{userLogin.taiKhoan}</p>
          <div className='avatar'>
            <img
              src='/images/header/avatar.fif'
              alt='UserName'
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `/images/header/avatar-user.jpg`;
              }}
            />
          </div>
          <CaretDownOutlined onClick={openSubmenu} />
          {checkUserIsAdmin()}
        </div>
      );
    }
    return (
      <div className='header__wrapper--signin'>
        <NavLink to='/register' className='signup'>
          Đăng Ký
        </NavLink>
        <NavLink to='/login' className='c-main-btn signin'>
          Đăng Nhập
        </NavLink>
      </div>
    );
  };

  const checkUserInfoMobile = () => {
    if (userLogin !== null) {
      return (
        <Fragment>
          <p>{userLogin?.taiKhoan}</p>
          <div className='avatar'>
            <img
              src='/images/header/avatar.fif'
              alt='UserName'
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `/images/header/avatar-user.jpg`;
              }}
            />
          </div>
        </Fragment>
      );
    }
    return <img src='/images/header/logo.svg' alt='Logo' />;
  };

  const checkSignInBtnMobile = () => {
    if (userLogin !== null) {
      return (
        <div>
          <NavLink
            to='/login'
            activeClassName='nav-active'
            onClick={closeMenuOnMobile}
          >
            Đăng Xuất
          </NavLink>
        </div>
      );
    } else {
      return (
        <div>
          <NavLink
            to='/register'
            activeClassName='nav-active'
            onClick={closeMenuOnMobile}
          >
            Đăng Ký
          </NavLink>
          <NavLink
            to='/login'
            activeClassName='nav-active'
            onClick={closeMenuOnMobile}
          >
            Đăng Nhập
          </NavLink>
        </div>
      );
    }
  };

  window.addEventListener("scroll", headeronScroll);

  return (
    <header className={headerOnScroll ? "header header-onScroll" : "header"}>
      <div className='header__wrapper container'>
        <h1
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <NavLink to='/home'>
            <img src='/images/header/logo.svg' alt='Logo' />
          </NavLink>
        </h1>
        <nav
          className={
            menuOnMobile
              ? "header__wrapper--nav nav-activeOnMobile"
              : "header__wrapper--nav"
          }
        >
          {/* User info on mobile */}
          <div className='navUserInfo'>{checkUserInfoMobile()}</div>

          {/* Main menu on PC and mobile */}
          <NavLink
            to='/home'
            activeClassName='nav-active'
            onClick={closeMenuOnMobile}
          >
            Trang Chủ
          </NavLink>
          <Link
            to='news'
            activeClass='nav-active'
            spy={true}
            offset={PADDING_TOP}
            onClick={closeMenuOnMobile}
          >
            Tin Tức
          </Link>
          <Link
            to='event'
            activeClass='nav-active'
            spy={true}
            offset={PADDING_TOP}
            onClick={closeMenuOnMobile}
          >
            Sự kiện
          </Link>
          <Link
            to='homeapp'
            activeClass='nav-active'
            spy={true}
            onClick={closeMenuOnMobile}
          >
            Ứng Dụng
          </Link>

          {/* Only Show on mobile  */}
          <CloseCircleOutlined onClick={closeMenuOnMobile} />
          {checkSignInBtnMobile()}
        </nav>

        {checkUserIsLogin()}

        <MenuOutlined
          className='header__wrapper--toggle'
          onClick={openMenuOnMobile}
        />
      </div>
    </header>
  );
}
