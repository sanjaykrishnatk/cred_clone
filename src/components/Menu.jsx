import React, { useState, useEffect } from "react";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import Hamburger from "hamburger-react";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("WHAT'S NEW");
  const [mobileHeader, showMobileHeader] = useState("h1");
  const handleHeaderShow = (value) => {
    mobileHeader == value ? showMobileHeader(null) : showMobileHeader(value);
  };
  const getHeaderStyle = (value) => {
    return mobileHeader == value ? { display: "block" } : { display: "none" };
  };
  const getHeaderIconStyle = (value) => {
    return mobileHeader == value
      ? { transform: "rotateZ(180deg)" }
      : { transform: "rotateZ(0deg)" };
  };
  const handleHover = (name) => {
    setHoveredItem(name);
  };
  const isMobile = window.matchMedia("(max-width:768px)").matches;

  useEffect(() => {
    if (isMobile) {
      if (showOffcanvas) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [isMobile, showOffcanvas]);

  return (
    <>
      {isMobile ? (
        <div className="menu-bar-mobile">
          <Navbar expand={false} className="bg-transparent mb-3">
            <Container fluid style={{ display: "block", padding: "0px" }}>
              {/* <Navbar.Brand href="#" className="text-light">
                
              </Navbar.Brand> */}
              <div className="navbar-mobile d-flex justify-content-between">
                <div className="navbar-logo-mobile d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="92"
                      height="44"
                      viewBox="0 0 92 44"
                      fill="none"
                    >
                      <path
                        d="M18.4129 34.1987C18.2797 34.1997 18.1488 34.1647 18.0339 34.0975L8.15421 28.5378C8.03534 28.4693 7.93653 28.371 7.86766 28.2526C7.79879 28.1342 7.76226 27.9999 7.76172 27.863V10.7588C7.76172 10.553 7.84372 10.3557 7.98967 10.2102C8.13561 10.0647 8.33354 9.98291 8.53993 9.98291H28.34C28.5453 9.98469 28.7415 10.0672 28.8859 10.2125C29.0304 10.3579 29.1115 10.5542 29.1114 10.7588V27.863C29.1109 27.9999 29.0744 28.1342 29.0055 28.2526C28.9366 28.371 28.8379 28.4693 28.719 28.5378L18.8189 34.0975C18.7037 34.1638 18.573 34.1987 18.44 34.1987H18.4129ZM9.31138 27.411L18.44 32.5389L27.5618 27.411V11.5348H9.29106L9.31138 27.411Z"
                        fill="white"
                      ></path>
                      <path
                        d="M18.4129 26.4529C18.2808 26.4529 18.1506 26.4205 18.034 26.3584L14.9212 24.5907C14.8009 24.5239 14.701 24.4259 14.6319 24.3071C14.5628 24.1884 14.5271 24.0532 14.5287 23.916V20.6773H16.0784V23.4706L18.44 24.8201L21.1942 23.275L21.9521 24.6244L18.819 26.3922C18.7021 26.4534 18.5721 26.4858 18.44 26.4866"
                        fill="white"
                      ></path>
                      <path
                        d="M18.4129 30.3259C18.2797 30.3268 18.1487 30.2919 18.0339 30.2246L11.5377 26.5676C11.4188 26.4992 11.32 26.4009 11.2511 26.2825C11.1822 26.1641 11.1457 26.0298 11.1452 25.8929V17.5061C11.1443 17.404 11.1638 17.3027 11.2026 17.2081C11.2414 17.1136 11.2986 17.0277 11.3711 16.9555C11.4435 16.8832 11.5297 16.8261 11.6245 16.7874C11.7193 16.7488 11.8209 16.7293 11.9234 16.7302H21.4919V18.2753H12.6948V25.4409L18.44 28.666L24.1851 25.4409V22.0673H25.7347V25.8659C25.7328 26.0033 25.695 26.1378 25.625 26.2562C25.5549 26.3745 25.4552 26.4726 25.3355 26.5407L18.8189 30.1977C18.7037 30.264 18.573 30.2989 18.44 30.2989"
                        fill="white"
                      ></path>
                      <path
                        d="M25.7077 19.1388H24.1581V14.9016H13.8656V13.3565H24.9295C25.1353 13.3582 25.3323 13.4406 25.4778 13.5857C25.6234 13.7308 25.7059 13.9272 25.7077 14.1324V19.1388Z"
                        fill="white"
                      ></path>
                      <path
                        d="M43.9106 27.1006C42.1733 27.1006 40.5072 26.4125 39.2788 25.1876C38.0503 23.9628 37.3602 22.3015 37.3602 20.5693C37.3602 18.8371 38.0503 17.1758 39.2788 15.951C40.5072 14.7261 42.1733 14.038 43.9106 14.038C44.9976 14.0265 46.0687 14.2981 47.0182 14.8258C47.9676 15.3536 48.7624 16.1193 49.3242 17.0472L49.3851 17.1484L47.4024 18.2955L47.3482 18.1875C47.0011 17.5833 46.4963 17.0842 45.8874 16.7432C45.2786 16.4022 44.5884 16.2321 43.8903 16.2511C42.7417 16.2511 41.6401 16.706 40.8279 17.5158C40.0157 18.3257 39.5595 19.424 39.5595 20.5693C39.5595 21.7145 40.0157 22.8129 40.8279 23.6227C41.6401 24.4326 42.7417 24.8875 43.8903 24.8875C44.5893 24.9116 45.2815 24.7438 45.8913 24.4023C46.5011 24.0608 47.0051 23.5588 47.3482 22.9511L47.4024 22.8431L49.3851 23.9699L49.3242 24.0711C48.7686 25.006 47.9756 25.7784 47.0252 26.3103C46.0747 26.8422 45.0004 27.1148 43.9106 27.1006Z"
                        fill="white"
                      ></path>
                      <path
                        d="M37.4279 20.5693C37.411 19.7183 37.5676 18.8729 37.8882 18.084C38.2087 17.2952 38.6865 16.5795 39.2926 15.9802C39.8987 15.3809 40.6205 14.9105 41.4143 14.5975C42.2081 14.2846 43.0573 14.1355 43.9106 14.1594C44.9809 14.1403 46.0373 14.4028 46.9735 14.9204C47.9097 15.4381 48.6924 16.1926 49.2429 17.108L47.47 18.1335C47.1178 17.505 46.6001 16.9842 45.9728 16.6275C45.3456 16.2708 44.6325 16.0916 43.9106 16.1094C42.7314 16.1094 41.6006 16.5764 40.7669 17.4078C39.9331 18.2391 39.4647 19.3666 39.4647 20.5423C39.4647 21.718 39.9331 22.8455 40.7669 23.6769C41.6006 24.5082 42.7314 24.9752 43.9106 24.9752C44.633 24.996 45.3473 24.8181 45.9751 24.4611C46.6029 24.104 47.1201 23.5816 47.47 22.9511L49.2429 23.9631C48.6941 24.881 47.9121 25.6382 46.9758 26.1583C46.0395 26.6784 44.9822 26.9429 43.9106 26.9252C43.0573 26.9491 42.2081 26.8 41.4143 26.4871C40.6205 26.1741 39.8987 25.7037 39.2926 25.1044C38.6865 24.5051 38.2087 23.7894 37.8882 23.0006C37.5676 22.2117 37.411 21.3663 37.4279 20.5153"
                        fill="white"
                      ></path>
                      <path
                        d="M59.5219 26.8712L56.8964 22.364H54.6768V26.8712H52.3896V14.2674H57.4648C58.5542 14.2674 59.5989 14.6988 60.3693 15.4669C61.1396 16.235 61.5724 17.2767 61.5724 18.3629C61.5618 19.1362 61.3293 19.8903 60.9023 20.536C60.4754 21.1817 59.872 21.692 59.1633 22.0064L62.0122 26.8712H59.5219ZM57.4919 20.3129C57.9939 20.2953 58.4685 20.0803 58.8121 19.715C59.1557 19.3496 59.3403 18.8636 59.3257 18.3629C59.3366 18.1141 59.2975 17.8657 59.2107 17.6322C59.1239 17.3986 58.9912 17.1848 58.8204 17.0031C58.6496 16.8215 58.444 16.6757 58.2159 16.5743C57.9877 16.473 57.7416 16.4181 57.4919 16.413H54.6904V20.3129H57.4919Z"
                        fill="white"
                      ></path>
                      <path
                        d="M56.9641 22.2292H54.555V26.7296H52.5249V14.3889H57.4851C58.0093 14.3862 58.5288 14.4872 59.0136 14.6859C59.4983 14.8847 59.9388 15.1773 60.3095 15.5469C60.6801 15.9165 60.9736 16.3556 61.1729 16.839C61.3723 17.3224 61.4735 17.8404 61.4708 18.363C61.4634 19.1357 61.226 19.8887 60.7886 20.5266C60.3513 21.1644 59.7338 21.6584 59.0144 21.9458L61.8295 26.7498H59.5964L56.9641 22.2292ZM54.555 20.4074H57.4784C58.0079 20.3772 58.5059 20.1462 58.8701 19.7617C59.2343 19.3772 59.4373 18.8683 59.4373 18.3394C59.4373 17.8105 59.2343 17.3016 58.8701 16.9171C58.5059 16.5326 58.0079 16.3015 57.4784 16.2714H54.555V20.4074Z"
                        fill="white"
                      ></path>
                      <path
                        d="M64.8543 26.8712V14.2741H72.5281V16.4535H67.128V19.429H72.0882V21.5881H67.128V24.6918H72.6228V26.8712H64.8543Z"
                        fill="white"
                      ></path>
                      <path
                        d="M72.501 24.8133V26.7565H64.9694V14.3888H72.413V16.332H67.0062V19.5505H71.9732V21.4734H67.0062V24.8133H72.501Z"
                        fill="white"
                      ></path>
                      <path
                        d="M75.8439 26.8712V14.2674H80.8108C84.262 14.2674 86.8605 16.9662 86.8605 20.5693C86.8814 22.2212 86.269 23.8189 85.1484 25.0359C84.5899 25.6216 83.9168 26.0866 83.1706 26.4023C82.4245 26.718 81.6213 26.8776 80.8108 26.8712H75.8439ZM80.8312 24.6918C83.0981 24.6918 84.6815 22.9983 84.6815 20.5693C84.6815 18.1403 83.0981 16.4467 80.8312 16.4467H78.1244V24.6918H80.8312Z"
                        fill="white"
                      ></path>
                      <path
                        d="M86.7657 20.5693C86.7657 24.0171 84.2484 26.7497 80.8311 26.7497H75.9589V14.3888H80.8311C84.2484 14.3888 86.7657 17.0877 86.7657 20.5693ZM84.7965 20.5693C84.7965 18.1133 83.186 16.332 80.8311 16.332H77.9958V24.8066H80.8108C83.1657 24.8066 84.7762 23.005 84.7762 20.5693"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{ transition: "300ms ease all" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M25.3337 17.3307H17.3337V25.3307H14.667V17.3307H6.66699V14.6641H14.667V6.66406H17.3337V14.6641H25.3337V17.3307Z"
                        fill="white"
                        fillOpacity="0.8"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-center align-items-center toggle-container"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    padding: "6px",
                  }}
                >
                  <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${false}`}
                    onClick={() => setShowOffcanvas(!showOffcanvas)}
                    className="toggle-custom p-0"
                  >
                    <Hamburger
                      direction="right"
                      size={32}
                      toggled={isOpen}
                      toggle={setOpen}
                      color="#FFFFFF"
                      className="toggle-btn ps-0"
                    />
                  </Navbar.Toggle>
                </div>
              </div>

              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${false}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                placement="bottom"
                className="custom-offcanvas"
                show={showOffcanvas}
                onHide={() => setShowOffcanvas(false)}
              >
                <div className="menu-bar-mobile">
                  <div className="navbar-mobile d-flex justify-content-between">
                    <div className="navbar-logo-mobile d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="92"
                          height="44"
                          viewBox="0 0 92 44"
                          fill="none"
                        >
                          <path
                            d="M18.4129 34.1987C18.2797 34.1997 18.1488 34.1647 18.0339 34.0975L8.15421 28.5378C8.03534 28.4693 7.93653 28.371 7.86766 28.2526C7.79879 28.1342 7.76226 27.9999 7.76172 27.863V10.7588C7.76172 10.553 7.84372 10.3557 7.98967 10.2102C8.13561 10.0647 8.33354 9.98291 8.53993 9.98291H28.34C28.5453 9.98469 28.7415 10.0672 28.8859 10.2125C29.0304 10.3579 29.1115 10.5542 29.1114 10.7588V27.863C29.1109 27.9999 29.0744 28.1342 29.0055 28.2526C28.9366 28.371 28.8379 28.4693 28.719 28.5378L18.8189 34.0975C18.7037 34.1638 18.573 34.1987 18.44 34.1987H18.4129ZM9.31138 27.411L18.44 32.5389L27.5618 27.411V11.5348H9.29106L9.31138 27.411Z"
                            fill="white"
                          ></path>
                          <path
                            d="M18.4129 26.4529C18.2808 26.4529 18.1506 26.4205 18.034 26.3584L14.9212 24.5907C14.8009 24.5239 14.701 24.4259 14.6319 24.3071C14.5628 24.1884 14.5271 24.0532 14.5287 23.916V20.6773H16.0784V23.4706L18.44 24.8201L21.1942 23.275L21.9521 24.6244L18.819 26.3922C18.7021 26.4534 18.5721 26.4858 18.44 26.4866"
                            fill="white"
                          ></path>
                          <path
                            d="M18.4129 30.3259C18.2797 30.3268 18.1487 30.2919 18.0339 30.2246L11.5377 26.5676C11.4188 26.4992 11.32 26.4009 11.2511 26.2825C11.1822 26.1641 11.1457 26.0298 11.1452 25.8929V17.5061C11.1443 17.404 11.1638 17.3027 11.2026 17.2081C11.2414 17.1136 11.2986 17.0277 11.3711 16.9555C11.4435 16.8832 11.5297 16.8261 11.6245 16.7874C11.7193 16.7488 11.8209 16.7293 11.9234 16.7302H21.4919V18.2753H12.6948V25.4409L18.44 28.666L24.1851 25.4409V22.0673H25.7347V25.8659C25.7328 26.0033 25.695 26.1378 25.625 26.2562C25.5549 26.3745 25.4552 26.4726 25.3355 26.5407L18.8189 30.1977C18.7037 30.264 18.573 30.2989 18.44 30.2989"
                            fill="white"
                          ></path>
                          <path
                            d="M25.7077 19.1388H24.1581V14.9016H13.8656V13.3565H24.9295C25.1353 13.3582 25.3323 13.4406 25.4778 13.5857C25.6234 13.7308 25.7059 13.9272 25.7077 14.1324V19.1388Z"
                            fill="white"
                          ></path>
                          <path
                            d="M43.9106 27.1006C42.1733 27.1006 40.5072 26.4125 39.2788 25.1876C38.0503 23.9628 37.3602 22.3015 37.3602 20.5693C37.3602 18.8371 38.0503 17.1758 39.2788 15.951C40.5072 14.7261 42.1733 14.038 43.9106 14.038C44.9976 14.0265 46.0687 14.2981 47.0182 14.8258C47.9676 15.3536 48.7624 16.1193 49.3242 17.0472L49.3851 17.1484L47.4024 18.2955L47.3482 18.1875C47.0011 17.5833 46.4963 17.0842 45.8874 16.7432C45.2786 16.4022 44.5884 16.2321 43.8903 16.2511C42.7417 16.2511 41.6401 16.706 40.8279 17.5158C40.0157 18.3257 39.5595 19.424 39.5595 20.5693C39.5595 21.7145 40.0157 22.8129 40.8279 23.6227C41.6401 24.4326 42.7417 24.8875 43.8903 24.8875C44.5893 24.9116 45.2815 24.7438 45.8913 24.4023C46.5011 24.0608 47.0051 23.5588 47.3482 22.9511L47.4024 22.8431L49.3851 23.9699L49.3242 24.0711C48.7686 25.006 47.9756 25.7784 47.0252 26.3103C46.0747 26.8422 45.0004 27.1148 43.9106 27.1006Z"
                            fill="white"
                          ></path>
                          <path
                            d="M37.4279 20.5693C37.411 19.7183 37.5676 18.8729 37.8882 18.084C38.2087 17.2952 38.6865 16.5795 39.2926 15.9802C39.8987 15.3809 40.6205 14.9105 41.4143 14.5975C42.2081 14.2846 43.0573 14.1355 43.9106 14.1594C44.9809 14.1403 46.0373 14.4028 46.9735 14.9204C47.9097 15.4381 48.6924 16.1926 49.2429 17.108L47.47 18.1335C47.1178 17.505 46.6001 16.9842 45.9728 16.6275C45.3456 16.2708 44.6325 16.0916 43.9106 16.1094C42.7314 16.1094 41.6006 16.5764 40.7669 17.4078C39.9331 18.2391 39.4647 19.3666 39.4647 20.5423C39.4647 21.718 39.9331 22.8455 40.7669 23.6769C41.6006 24.5082 42.7314 24.9752 43.9106 24.9752C44.633 24.996 45.3473 24.8181 45.9751 24.4611C46.6029 24.104 47.1201 23.5816 47.47 22.9511L49.2429 23.9631C48.6941 24.881 47.9121 25.6382 46.9758 26.1583C46.0395 26.6784 44.9822 26.9429 43.9106 26.9252C43.0573 26.9491 42.2081 26.8 41.4143 26.4871C40.6205 26.1741 39.8987 25.7037 39.2926 25.1044C38.6865 24.5051 38.2087 23.7894 37.8882 23.0006C37.5676 22.2117 37.411 21.3663 37.4279 20.5153"
                            fill="white"
                          ></path>
                          <path
                            d="M59.5219 26.8712L56.8964 22.364H54.6768V26.8712H52.3896V14.2674H57.4648C58.5542 14.2674 59.5989 14.6988 60.3693 15.4669C61.1396 16.235 61.5724 17.2767 61.5724 18.3629C61.5618 19.1362 61.3293 19.8903 60.9023 20.536C60.4754 21.1817 59.872 21.692 59.1633 22.0064L62.0122 26.8712H59.5219ZM57.4919 20.3129C57.9939 20.2953 58.4685 20.0803 58.8121 19.715C59.1557 19.3496 59.3403 18.8636 59.3257 18.3629C59.3366 18.1141 59.2975 17.8657 59.2107 17.6322C59.1239 17.3986 58.9912 17.1848 58.8204 17.0031C58.6496 16.8215 58.444 16.6757 58.2159 16.5743C57.9877 16.473 57.7416 16.4181 57.4919 16.413H54.6904V20.3129H57.4919Z"
                            fill="white"
                          ></path>
                          <path
                            d="M56.9641 22.2292H54.555V26.7296H52.5249V14.3889H57.4851C58.0093 14.3862 58.5288 14.4872 59.0136 14.6859C59.4983 14.8847 59.9388 15.1773 60.3095 15.5469C60.6801 15.9165 60.9736 16.3556 61.1729 16.839C61.3723 17.3224 61.4735 17.8404 61.4708 18.363C61.4634 19.1357 61.226 19.8887 60.7886 20.5266C60.3513 21.1644 59.7338 21.6584 59.0144 21.9458L61.8295 26.7498H59.5964L56.9641 22.2292ZM54.555 20.4074H57.4784C58.0079 20.3772 58.5059 20.1462 58.8701 19.7617C59.2343 19.3772 59.4373 18.8683 59.4373 18.3394C59.4373 17.8105 59.2343 17.3016 58.8701 16.9171C58.5059 16.5326 58.0079 16.3015 57.4784 16.2714H54.555V20.4074Z"
                            fill="white"
                          ></path>
                          <path
                            d="M64.8543 26.8712V14.2741H72.5281V16.4535H67.128V19.429H72.0882V21.5881H67.128V24.6918H72.6228V26.8712H64.8543Z"
                            fill="white"
                          ></path>
                          <path
                            d="M72.501 24.8133V26.7565H64.9694V14.3888H72.413V16.332H67.0062V19.5505H71.9732V21.4734H67.0062V24.8133H72.501Z"
                            fill="white"
                          ></path>
                          <path
                            d="M75.8439 26.8712V14.2674H80.8108C84.262 14.2674 86.8605 16.9662 86.8605 20.5693C86.8814 22.2212 86.269 23.8189 85.1484 25.0359C84.5899 25.6216 83.9168 26.0866 83.1706 26.4023C82.4245 26.718 81.6213 26.8776 80.8108 26.8712H75.8439ZM80.8312 24.6918C83.0981 24.6918 84.6815 22.9983 84.6815 20.5693C84.6815 18.1403 83.0981 16.4467 80.8312 16.4467H78.1244V24.6918H80.8312Z"
                            fill="white"
                          ></path>
                          <path
                            d="M86.7657 20.5693C86.7657 24.0171 84.2484 26.7497 80.8311 26.7497H75.9589V14.3888H80.8311C84.2484 14.3888 86.7657 17.0877 86.7657 20.5693ZM84.7965 20.5693C84.7965 18.1133 83.186 16.332 80.8311 16.332H77.9958V24.8066H80.8108C83.1657 24.8066 84.7762 23.005 84.7762 20.5693"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="d-flex align-items-center"
                        style={{ transition: "300ms ease all" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M25.3337 17.3307H17.3337V25.3307H14.667V17.3307H6.66699V14.6641H14.667V6.66406H17.3337V14.6641H25.3337V17.3307Z"
                            fill="white"
                            fillOpacity="0.8"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center toggle-container"
                      style={{
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        padding: "6px",
                      }}
                    >
                      <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-${false}`}
                        onClick={() => setShowOffcanvas(!showOffcanvas)}
                        className="toggle-custom p-0"
                      >
                        <Hamburger
                          direction="right"
                          size={32}
                          toggled={isOpen}
                          toggle={setOpen}
                          color="#FFFFFF"
                          className="toggle-btn ps-0"
                        />
                      </Navbar.Toggle>
                    </div>
                  </div>
                  <div className="mobile-navbar-content d-flex flex-column text-light">
                    <div className="headers-mobile">
                      <div className="headers-mobile-content">
                        <div
                          className="d-flex"
                          onClick={() => handleHeaderShow("h1")}
                        >
                          <div className="txt-mobile-header">WHAT'S NEW</div>
                          <div
                            className="mobile-header-icon"
                            style={getHeaderIconStyle("h1")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16.8015 8.79492L12.3754 12.5529L7.94935 8.79492L6.5897 9.95752L12.3754 14.8699L18.1611 9.95752L16.8015 8.79492Z"
                                fill="white"
                                fillOpacity="0.6"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        className="header-1-mobile-wrapper"
                        style={getHeaderStyle("h1")}
                      >
                        <div className="header-1-mobile-content d-flex justify-content-center">
                          <div className="header-1-posters-mobile d-flex align-items-center justify-content-center ms-0">
                            <img
                              src="/spotlight-thumbnail-final.png"
                              alt="spotlight-thumbnail-final"
                              className="poster-mobile"
                            />
                            <div className="now-live-mobile">NOW LIVE</div>
                            <h1 className="poster-mobile-txt mb-0">
                              UPGRADE TO
                              <br />
                              CRED UPI
                            </h1>
                          </div>
                          <div className="header-1-posters-mobile d-flex align-items-center justify-content-center">
                            <img
                              src="/garage-thumbnail.png"
                              alt="garage-thumbnail"
                              className="poster-mobile"
                            />
                            <h1 className="poster-mobile-txt mb-0">GARAGE</h1>
                            <p className="poster-mobile-sub-txt mb-0">
                              manage, maintain, and
                              <br />
                              obsess over your cars
                            </p>
                          </div>
                          <div className="header-1-posters-mobile d-flex align-items-center justify-content-center">
                            <img
                              src="/p2p-thumbnail.png"
                              alt="p2p-thumbnail"
                              className="poster-mobile"
                            />
                            <h1 className="poster-mobile-txt mb-0">
                              PAY ANYONE
                            </h1>
                            <p className="poster-mobile-sub-txt mb-0">
                              pay anyone, no matter
                              <br />
                              what UPI app they're on
                            </p>
                          </div>
                          <div className="header-1-posters-mobile d-flex align-items-center justify-content-center">
                            <img
                              src="/careers-thumbnail.png"
                              alt="careers-thumbnail"
                              className="poster-mobile"
                            />
                            <h1 className="poster-mobile-txt mb-0">
                              WORK FOR CRED
                            </h1>
                            <p className="poster-mobile-sub-txt mb-0">
                              apply to build the most
                              <br />
                              trustworthy community
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="headers-mobile"
                      style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <div className="headers-mobile-content">
                        <div
                          className="d-flex"
                          onClick={() => handleHeaderShow("h2")}
                        >
                          <div className="txt-mobile-header">PAYMENTS</div>
                          <div
                            className="mobile-header-icon"
                            style={getHeaderIconStyle("h2")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16.8015 8.79492L12.3754 12.5529L7.94935 8.79492L6.5897 9.95752L12.3754 14.8699L18.1611 9.95752L16.8015 8.79492Z"
                                fill="white"
                                fillOpacity="0.6"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          className="mobile-header-common-wrapper"
                          style={getHeaderStyle("h2")}
                        >
                          <div className="mobile-header-common-content">
                            <div className="mobile-features-common">
                              <img
                                src="/tnp-logo.png"
                                alt="tnp-logo"
                                style={{ width: "20px" }}
                              />
                              <p>TAP TO PAY</p>
                            </div>
                            <div className="mobile-features-common">
                              <img
                                src="/p2p-logo.png"
                                alt="p2p-logo"
                                style={{ width: "20px" }}
                              />
                              <p>PAY ANYONE</p>
                            </div>
                            <div className="mobile-features-common">
                              <img
                                src="/rupay-logo.png"
                                alt="rupay-logo"
                                style={{ width: "20px" }}
                              />
                              <p>RUPAY CARDS ON UPI</p>
                            </div>
                            <div className="mobile-features-common">
                              <img
                                src="/snp-logo.png"
                                alt="snp-logo"
                                style={{ width: "20px" }}
                              />
                              <p>SCAN & PAY</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="headers-mobile"
                      style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <div className="headers-mobile-content">
                        <div
                          className="d-flex"
                          onClick={() => handleHeaderShow("h3")}
                        >
                          <div className="txt-mobile-header">UPGRADES</div>
                          <div
                            className="mobile-header-icon"
                            style={getHeaderIconStyle("h3")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16.8015 8.79492L12.3754 12.5529L7.94935 8.79492L6.5897 9.95752L12.3754 14.8699L18.1611 9.95752L16.8015 8.79492Z"
                                fill="white"
                                fillOpacity="0.6"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          className="mobile-header-common-wrapper"
                          style={getHeaderStyle("h3")}
                        >
                          <div className="mobile-header-common-content">
                            <div className="mobile-features-common">
                              <img
                                src="/travel-logo.png"
                                alt="travel-logo"
                                style={{ width: "20px" }}
                              />
                              <p>TRAVEL</p>
                            </div>
                            <div className="mobile-features-common">
                              <img
                                src="/garage-logo.png"
                                alt="garage-logo"
                                style={{ width: "20px" }}
                              />
                              <p>GARAGE</p>
                            </div>
                            <div className="mobile-features-common">
                              <img
                                src="/mint-logo.png"
                                alt="mint-logo"
                                style={{ width: "20px" }}
                              />
                              <p>MINT</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="headers-mobile"
                      style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <div className="headers-mobile-content">
                        <div
                          className="d-flex"
                          onClick={() => handleHeaderShow("h4")}
                        >
                          <div className="txt-mobile-header">COMPANY</div>
                          <div
                            className="mobile-header-icon"
                            style={getHeaderIconStyle("h4")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16.8015 8.79492L12.3754 12.5529L7.94935 8.79492L6.5897 9.95752L12.3754 14.8699L18.1611 9.95752L16.8015 8.79492Z"
                                fill="white"
                                fillOpacity="0.6"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          className="mobile-header-common-wrapper"
                          style={getHeaderStyle("h4")}
                        >
                          <div className="mobile-header-common-content">
                            <div className="mobile-features-common flex-column align-items-start">
                              <h6>ABOUT CRED</h6>
                              <h6 style={{ marginTop: "20px" }}>CAREERS</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="headers-mobile"
                      style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <div className="headers-mobile-content">
                        <div
                          className="d-flex"
                          onClick={() => handleHeaderShow("h5")}
                        >
                          <div className="txt-mobile-header">INSIDER PERKS</div>
                          <div
                            className="mobile-header-icon"
                            style={getHeaderIconStyle("h5")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16.8015 8.79492L12.3754 12.5529L7.94935 8.79492L6.5897 9.95752L12.3754 14.8699L18.1611 9.95752L16.8015 8.79492Z"
                                fill="white"
                                fillOpacity="0.6"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          className="mobile-header-common-wrapper"
                          style={getHeaderStyle("h5")}
                        >
                          <div className="mobile-header-common-content">
                            <div className="mobile-features-common flex-column align-items-start">
                              <h6>UPGRADE TO UPI</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Offcanvas.Body></Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>
      ) : (
        <Navbar expand={false} className="bg-transparent mb-3 menu-bar">
          <Container fluid>
            <Navbar.Brand href="#" className="text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="88"
                viewBox="0 0 74 88"
                fill="none"
              >
                <path
                  d="M36.9957 57.4618C36.6778 57.4628 36.3652 57.3812 36.0889 57.225L12.5222 44.0271C12.2371 43.8671 11.9999 43.6345 11.835 43.3533C11.6701 43.072 11.5834 42.7521 11.5839 42.4266V1.83446C11.5839 1.34793 11.7783 0.88133 12.1243 0.537302C12.4703 0.193273 12.9396 0 13.429 0H60.5595C61.0489 0 61.5182 0.193273 61.8642 0.537302C62.2102 0.88133 62.4046 1.34793 62.4046 1.83446V42.4266C62.4051 42.7521 62.3184 43.072 62.1535 43.3533C61.9887 43.6345 61.7514 43.8671 61.4663 44.0271L37.8996 57.225C37.6242 57.3808 37.3126 57.4624 36.9957 57.4618ZM15.274 41.3681L36.9957 53.5332L58.7145 41.3681V3.66892H15.274V41.3681Z"
                  fill="white"
                ></path>
                <path
                  d="M36.9957 39.0858C36.678 39.0854 36.3658 39.0038 36.0889 38.849L28.6284 34.6665C28.3433 34.5069 28.106 34.2749 27.9406 33.9942C27.7752 33.7135 27.6878 33.3941 27.6872 33.0688V25.3915H31.3773V32.0132L36.9986 35.1515L43.5552 31.4769L45.3658 34.6722L37.9053 38.8547C37.6271 39.0081 37.3138 39.0877 36.9957 39.0858Z"
                  fill="white"
                ></path>
                <path
                  d="M36.9957 48.2752C36.678 48.2748 36.3658 48.1933 36.0889 48.0384L20.5739 39.3482C20.2891 39.1885 20.0522 38.9563 19.8873 38.6756C19.7225 38.3949 19.6356 38.0756 19.6356 37.7506V17.8425C19.6356 17.356 19.83 16.8894 20.176 16.5453C20.522 16.2013 20.9913 16.008 21.4806 16.008H44.2668V19.6855H23.3199V36.6864L36.99 44.3438L50.6571 36.6864V28.7323H54.3472V37.7506C54.3472 38.0756 54.2603 38.3949 54.0954 38.6756C53.9306 38.9563 53.6936 39.1885 53.4089 39.3482L37.8938 48.0384C37.6196 48.192 37.3104 48.2735 36.9957 48.2752Z"
                  fill="white"
                ></path>
                <path
                  d="M54.3529 21.7197H50.6628V11.6744H26.1664V8.00545H52.5108C53.0001 8.00545 53.4694 8.19872 53.8154 8.54275C54.1614 8.88678 54.3558 9.35338 54.3558 9.83991L54.3529 21.7197Z"
                  fill="white"
                ></path>
                <path
                  d="M0 78.5624C0 73.2244 3.97991 69.1304 9.46915 69.1304C11.0224 69.1067 12.5559 69.4796 13.9228 70.2134C15.2898 70.9471 16.4446 72.0173 17.2769 73.3214L13.6872 75.4013C12.8809 74.0005 11.3199 73.1731 9.47202 73.1731C6.2439 73.1731 4.16356 75.3242 4.16356 78.5624C4.16356 81.8005 6.2439 83.9516 9.47202 83.9516C11.3199 83.9516 12.9153 83.1243 13.6872 81.7235L17.2769 83.7976C15.7159 86.3652 12.8034 87.9943 9.47202 87.9943C3.97991 87.9943 0 83.9003 0 78.5624Z"
                  fill="white"
                ></path>
                <path
                  d="M53.1248 83.9174V87.9515H40.8264V69.1219H53.1248V73.156H45.1478V76.3827H52.1693V80.4681H45.1478V83.9088L53.1248 83.9174Z"
                  fill="white"
                ></path>
                <path
                  d="M32.5997 81.0673C33.63 80.5632 34.5007 79.7866 35.1162 78.8229C35.7317 77.8591 36.0683 76.7453 36.0889 75.6038C36.092 74.7546 35.9262 73.9131 35.601 73.1278C35.2759 72.3425 34.7979 71.6288 34.1945 71.0278C33.591 70.4268 32.8741 69.9502 32.0848 69.6256C31.2956 69.301 30.4495 69.1346 29.5954 69.1361H22.0201V88H26.3472V81.7948H28.4075L31.9799 87.9943H36.6341L32.5997 81.0673ZM29.5954 78.0231H26.3472V73.1731H29.5954C30.7862 73.1731 31.759 74.223 31.759 75.5981C31.759 76.9733 30.7862 78.0231 29.5954 78.0231Z"
                  fill="white"
                ></path>
                <path
                  d="M64.8178 69.1304H57.8594V87.9315H64.8178C70.0229 87.9315 74 83.8489 74 78.531C74 73.213 70.0143 69.1304 64.8178 69.1304ZM64.8178 83.9174H62.175V73.1674H64.8063C67.7733 73.1674 69.8221 75.31 69.8221 78.5338C69.8221 81.7577 67.7848 83.9174 64.8178 83.9174Z"
                  fill="white"
                ></path>
              </svg>
            </Navbar.Brand>

            <div className="d-flex align-items-center upi-container">
              <div className="d-flex justify-content-center align-items-center me-4">
                <svg
                  width="110"
                  height="31"
                  viewBox="0 0 110 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.97245 30.9124C4.31665 30.9124 0.940645 27.4261 0.940645 22.8806C0.940645 18.3352 4.31665 14.8488 8.97245 14.8488C11.7748 14.8488 14.2461 16.2389 15.5921 18.4234L12.547 20.1886C11.863 18.9971 10.5391 18.291 8.97245 18.291C6.23634 18.291 4.47111 20.1225 4.47111 22.8806C4.47111 25.6388 6.23634 27.4702 8.97245 27.4702C10.5391 27.4702 11.8851 26.7641 12.547 25.5726L15.5921 27.3378C14.2681 29.5223 11.7968 30.9124 8.97245 30.9124ZM27.3367 30.6035L24.4241 25.5285H22.7471V30.6035H19.2166V15.1577H25.3949C28.3296 15.1577 30.6906 17.5187 30.6906 20.4534C30.6906 22.3511 29.5432 24.0722 27.8442 24.9327L31.1319 30.6035H27.3367ZM22.7471 18.4675V22.4393H25.3949C26.3658 22.4393 27.1602 21.5788 27.1602 20.4534C27.1602 19.3281 26.3658 18.4675 25.3949 18.4675H22.7471ZM38.2925 27.2054H44.4708V30.6035H34.762V15.1577H44.3605V18.5558H38.2925V21.1154H43.8088V24.4693H38.2925V27.2054ZM54.611 15.1577C58.8696 15.1577 62.1133 18.5117 62.1133 22.8806C62.1133 27.2496 58.8696 30.6035 54.611 30.6035H48.4327V15.1577H54.611ZM54.611 27.2054C57.0382 27.2054 58.7152 25.5285 58.7152 22.8806C58.7152 20.2328 57.0382 18.5558 54.611 18.5558H51.9632V27.2054H54.611ZM79.402 30.9124C76.0039 30.9124 73.4443 28.9265 73.4443 25.6167V15.1577H76.9748V25.3078C76.9748 26.4773 77.5264 27.4702 79.402 27.4702C81.2775 27.4702 81.8292 26.4773 81.8292 25.3078V15.1577H85.3596V25.6167C85.3596 28.9265 82.8 30.9124 79.402 30.9124ZM95.7231 15.1577C98.7681 15.1577 101.129 17.5187 101.129 20.4534C101.129 23.3881 98.7681 25.7491 95.7231 25.7491H93.4062V30.6035H89.8758V15.1577H95.7231ZM95.7231 22.4393C96.8043 22.4393 97.5986 21.5788 97.5986 20.4534C97.5986 19.3281 96.8043 18.4675 95.7231 18.4675H93.4062V22.4393H95.7231ZM104.861 15.1577H108.391V30.6035H104.861V15.1577Z"
                    fill="white"
                  ></path>
                  <path
                    d="M3.08747 7.33184C1.71046 7.33184 0.720465 6.46784 0.720465 5.09984V0.914843H1.55746V5.06384C1.55746 5.93684 2.07946 6.51284 3.08747 6.51284C4.09546 6.51284 4.61746 5.93684 4.61746 5.06384V0.914843H5.44547V5.09984C5.44547 6.46784 4.46447 7.33184 3.08747 7.33184ZM15.0113 0.914843C16.1723 0.914843 17.0453 1.78784 17.0453 2.93984C17.0453 4.08284 16.1723 4.96484 15.0113 4.96484H13.5623V7.21484H12.7253V0.914843H15.0113ZM15.0113 4.18184C15.7043 4.18184 16.2173 3.65084 16.2173 2.93984C16.2173 2.21984 15.7043 1.69784 15.0113 1.69784H13.5623V4.18184H15.0113ZM30.0649 4.09184V4.46984C30.0649 6.07184 28.8769 7.33184 26.9779 7.33184C25.0339 7.33184 23.6569 5.86484 23.6569 4.06484C23.6569 2.25584 25.0429 0.797843 26.9599 0.797843C28.1389 0.797843 29.1649 1.41884 29.6869 2.31884L28.9669 2.74184C28.6069 2.06684 27.8419 1.60784 26.9509 1.60784C25.4929 1.60784 24.4849 2.68784 24.4849 4.06484C24.4849 5.43284 25.4839 6.51284 26.9869 6.51284C28.2919 6.51284 29.0659 5.79284 29.2279 4.84784H26.9149V4.09184H30.0649ZM40.8177 7.21484L39.4047 4.80284H37.9197V7.21484H37.0827V0.914843H39.6027C40.6827 0.914843 41.5647 1.78784 41.5647 2.86784C41.5647 3.69584 41.0157 4.42484 40.2597 4.69484L41.7447 7.21484H40.8177ZM37.9197 1.69784V4.04684H39.6027C40.2237 4.04684 40.7277 3.51584 40.7277 2.86784C40.7277 2.21984 40.2237 1.69784 39.6027 1.69784H37.9197ZM52.7337 7.21484L52.2207 5.80184H49.3857L48.8727 7.21484H47.9817L50.3307 0.914843H51.2757L53.6247 7.21484H52.7337ZM49.6737 5.01884H51.9327L50.7987 1.91384L49.6737 5.01884ZM62.8249 0.914843C64.5619 0.914843 65.8129 2.31884 65.8129 4.06484C65.8129 5.81084 64.5619 7.21484 62.8249 7.21484H60.3679V0.914843H62.8249ZM62.8249 6.42284C64.1209 6.42284 65.0119 5.39684 65.0119 4.06484C65.0119 2.73284 64.1209 1.70684 62.8249 1.70684H61.2049V6.42284H62.8249ZM73.6648 6.42284H76.5898V7.21484H72.8278V0.914843H76.5448V1.70684H73.6648V3.64184H76.3198V4.42484H73.6648V6.42284ZM95.8823 0.914843V1.70684H94.0193V7.21484H93.1913V1.70684H91.3373V0.914843H95.8823ZM105.275 7.33184C103.448 7.33184 102.017 5.87384 102.017 4.06484C102.017 2.24684 103.448 0.797843 105.275 0.797843C107.102 0.797843 108.542 2.24684 108.542 4.06484C108.542 5.87384 107.102 7.33184 105.275 7.33184ZM105.275 6.51284C106.652 6.51284 107.705 5.44184 107.705 4.06484C107.705 2.67884 106.652 1.60784 105.275 1.60784C103.898 1.60784 102.845 2.67884 102.845 4.06484C102.845 5.44184 103.898 6.51284 105.275 6.51284Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div className="vertical-line"></div>
              <div className="d-flex justify-content-center align-items-center toggle-container p-0">
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${false}`}
                  onClick={() => setShowOffcanvas(!showOffcanvas)}
                  className="toggle-custom p-0"
                >
                  <Hamburger
                    direction="right"
                    size={32}
                    toggled={isOpen}
                    toggle={setOpen}
                    color="#FFFFFF"
                    className="toggle-btn ps-0"
                  />
                </Navbar.Toggle>
              </div>
            </div>
            {/* <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${false}`}
          onClick={() => setShowOffcanvas(!showOffcanvas)}
          className="toggle-custom"
        >
          <Hamburger
            size={32}
            toggled={isOpen}
            toggle={setOpen}
            color="#FFFFFF"
            className="toggle-btn"
          />
        </Navbar.Toggle> */}

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="bottom"
              className="custom-offcanvas"
              show={showOffcanvas} // Use the state variable here
              onHide={() => setShowOffcanvas(false)} // Close the offcanvas when dismissed
            >
              <Offcanvas.Header className="d-flex justify-content-between offcanvas-header">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="74"
                    height="88"
                    viewBox="0 0 74 88"
                    fill="none"
                  >
                    <path
                      d="M36.9957 57.4618C36.6778 57.4628 36.3652 57.3812 36.0889 57.225L12.5222 44.0271C12.2371 43.8671 11.9999 43.6345 11.835 43.3533C11.6701 43.072 11.5834 42.7521 11.5839 42.4266V1.83446C11.5839 1.34793 11.7783 0.88133 12.1243 0.537302C12.4703 0.193273 12.9396 0 13.429 0H60.5595C61.0489 0 61.5182 0.193273 61.8642 0.537302C62.2102 0.88133 62.4046 1.34793 62.4046 1.83446V42.4266C62.4051 42.7521 62.3184 43.072 62.1535 43.3533C61.9887 43.6345 61.7514 43.8671 61.4663 44.0271L37.8996 57.225C37.6242 57.3808 37.3126 57.4624 36.9957 57.4618ZM15.274 41.3681L36.9957 53.5332L58.7145 41.3681V3.66892H15.274V41.3681Z"
                      fill="white"
                    ></path>
                    <path
                      d="M36.9957 39.0858C36.678 39.0854 36.3658 39.0038 36.0889 38.849L28.6284 34.6665C28.3433 34.5069 28.106 34.2749 27.9406 33.9942C27.7752 33.7135 27.6878 33.3941 27.6872 33.0688V25.3915H31.3773V32.0132L36.9986 35.1515L43.5552 31.4769L45.3658 34.6722L37.9053 38.8547C37.6271 39.0081 37.3138 39.0877 36.9957 39.0858Z"
                      fill="white"
                    ></path>
                    <path
                      d="M36.9957 48.2752C36.678 48.2748 36.3658 48.1933 36.0889 48.0384L20.5739 39.3482C20.2891 39.1885 20.0522 38.9563 19.8873 38.6756C19.7225 38.3949 19.6356 38.0756 19.6356 37.7506V17.8425C19.6356 17.356 19.83 16.8894 20.176 16.5453C20.522 16.2013 20.9913 16.008 21.4806 16.008H44.2668V19.6855H23.3199V36.6864L36.99 44.3438L50.6571 36.6864V28.7323H54.3472V37.7506C54.3472 38.0756 54.2603 38.3949 54.0954 38.6756C53.9306 38.9563 53.6936 39.1885 53.4089 39.3482L37.8938 48.0384C37.6196 48.192 37.3104 48.2735 36.9957 48.2752Z"
                      fill="white"
                    ></path>
                    <path
                      d="M54.3529 21.7197H50.6628V11.6744H26.1664V8.00545H52.5108C53.0001 8.00545 53.4694 8.19872 53.8154 8.54275C54.1614 8.88678 54.3558 9.35338 54.3558 9.83991L54.3529 21.7197Z"
                      fill="white"
                    ></path>
                    <path
                      d="M0 78.5624C0 73.2244 3.97991 69.1304 9.46915 69.1304C11.0224 69.1067 12.5559 69.4796 13.9228 70.2134C15.2898 70.9471 16.4446 72.0173 17.2769 73.3214L13.6872 75.4013C12.8809 74.0005 11.3199 73.1731 9.47202 73.1731C6.2439 73.1731 4.16356 75.3242 4.16356 78.5624C4.16356 81.8005 6.2439 83.9516 9.47202 83.9516C11.3199 83.9516 12.9153 83.1243 13.6872 81.7235L17.2769 83.7976C15.7159 86.3652 12.8034 87.9943 9.47202 87.9943C3.97991 87.9943 0 83.9003 0 78.5624Z"
                      fill="white"
                    ></path>
                    <path
                      d="M53.1248 83.9174V87.9515H40.8264V69.1219H53.1248V73.156H45.1478V76.3827H52.1693V80.4681H45.1478V83.9088L53.1248 83.9174Z"
                      fill="white"
                    ></path>
                    <path
                      d="M32.5997 81.0673C33.63 80.5632 34.5007 79.7866 35.1162 78.8229C35.7317 77.8591 36.0683 76.7453 36.0889 75.6038C36.092 74.7546 35.9262 73.9131 35.601 73.1278C35.2759 72.3425 34.7979 71.6288 34.1945 71.0278C33.591 70.4268 32.8741 69.9502 32.0848 69.6256C31.2956 69.301 30.4495 69.1346 29.5954 69.1361H22.0201V88H26.3472V81.7948H28.4075L31.9799 87.9943H36.6341L32.5997 81.0673ZM29.5954 78.0231H26.3472V73.1731H29.5954C30.7862 73.1731 31.759 74.223 31.759 75.5981C31.759 76.9733 30.7862 78.0231 29.5954 78.0231Z"
                      fill="white"
                    ></path>
                    <path
                      d="M64.8178 69.1304H57.8594V87.9315H64.8178C70.0229 87.9315 74 83.8489 74 78.531C74 73.213 70.0143 69.1304 64.8178 69.1304ZM64.8178 83.9174H62.175V73.1674H64.8063C67.7733 73.1674 69.8221 75.31 69.8221 78.5338C69.8221 81.7577 67.7848 83.9174 64.8178 83.9174Z"
                      fill="white"
                    ></path>
                  </svg>
                </Offcanvas.Title>

                <button
                  className="btn modal-close-btn rounded-0"
                  onClick={() => {
                    setShowOffcanvas(false);
                    setOpen(false);
                  }}
                >
                  <Hamburger
                    direction="right"
                    size={30}
                    toggled={true}
                    color="#FFFFFF"
                  />
                </button>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <div>
                  <div className="row d-flex">
                    <div className="col-md-1 p-0"></div>
                    <div className="col-md-10 d-flex p-0">
                      <div className="content-menu" data-aos="fade-up">
                        <div
                          className={`gilroy-test ${
                            hoveredItem == "WHAT'S NEW" && "selected"
                          }`}
                          onMouseEnter={() => handleHover("WHAT'S NEW")}
                        >
                          <h4 className="menu-headers">WHAT'S NEW</h4>
                        </div>
                        <div
                          className={`gilroy-test ${
                            hoveredItem == "PAYMENTS" && "selected"
                          }`}
                          onMouseEnter={() => handleHover("PAYMENTS")}
                        >
                          <h4 className="menu-headers">PAYMENTS</h4>
                        </div>
                        <div
                          className={`gilroy-test ${
                            hoveredItem == "UPGRADES" && "selected"
                          }`}
                          onMouseEnter={() => handleHover("UPGRADES")}
                        >
                          <h4 className="menu-headers">UPGRADES</h4>
                        </div>
                        <div
                          className={`gilroy-test ${
                            hoveredItem == "COMPANY" && "selected"
                          }`}
                          onMouseEnter={() => handleHover("COMPANY")}
                        >
                          <h4 className="menu-headers">COMPANY</h4>
                        </div>
                        <div
                          className={`gilroy-test ${
                            hoveredItem == "INSIDER PERKS" && "selected"
                          }`}
                          onMouseEnter={() => handleHover("INSIDER PERKS")}
                        >
                          <h4 className="menu-headers">INSIDER PERKS</h4>
                        </div>
                      </div>
                      {hoveredItem == "WHAT'S NEW" && (
                        <div className="d-flex flex-column content-items">
                          <div className="spotlight-container w-100">
                            <img
                              src="/spotlight-poster-final.png"
                              alt="spotlight-img"
                              className="w-100"
                              style={{
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                              }}
                            />
                            <div className="now-live">NOW LIVE</div>
                          </div>
                          <div className="utilities-container w-100 d-flex justify-content-between mt-5">
                            <div className="utilities-wrapper p-2">
                              <img
                                src="/garage-thumbnail.png"
                                alt="garage-img"
                                width={"180px"}
                              />
                              <div className="d-flex flex-column">
                                <h4 className="utilities-text fw-bold">
                                  GARAGE
                                </h4>
                                <h5 className="utilities-sub-text">
                                  manage, maintain, and
                                  <br /> obsess over your cars
                                </h5>
                              </div>
                            </div>
                            <div className="utilities-wrapper p-2">
                              <img
                                src="/p2p-thumbnail.png"
                                alt="p2p-img"
                                width={"180px"}
                              />
                              <div className="d-flex flex-column">
                                <h4 className="utilities-text fw-bold">
                                  PAY ANYONE
                                </h4>
                                <h5 className="utilities-sub-text">
                                  pay anyone, no matter
                                  <br /> what UPI app they're on
                                </h5>
                              </div>
                            </div>
                            <div className="utilities-wrapper p-2">
                              <img
                                src="/careers-thumbnail.png"
                                alt="career"
                                width={"180px"}
                              />
                              <div className="d-flex flex-column">
                                <h4 className="utilities-text fw-bold">
                                  WORK FOR CRED
                                </h4>
                                <h5 className="utilities-sub-text">
                                  apply to build the most
                                  <br /> trustworthy community
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {hoveredItem == "PAYMENTS" && (
                        <div className="row d-flex flex-column content-items w-100">
                          <div className="row d-flex p-0">
                            <div className="col-md-6 d-flex align-items-center p-0">
                              <img
                                src="/tnp-logo.png"
                                alt="tnp-logo"
                                className="utility-imgs"
                              />
                              <h4 className="utility-headers b-0">
                                TAP TO PAY
                              </h4>
                            </div>
                            <div className="col-md-6 d-flex align-items-center p-0">
                              <img
                                src="/p2p-logo.png"
                                alt="p2p-logo"
                                className="utility-imgs"
                              />
                              <h4 className="utility-headers b-0">
                                PAY ANYONE
                              </h4>
                            </div>
                          </div>
                          <div className="row p-0">
                            <div className="col-md-12 d-flex align-items-center p-0">
                              <img
                                src="/rupay-logo.png"
                                alt="rupay-logo"
                                className="utility-imgs"
                              />
                              <h4 className="utility-headers b-0">
                                RUPAY CARDS ON UPI
                              </h4>
                            </div>
                          </div>
                          <div className="row p-0">
                            <div className="col-md-12 d-flex align-items-center p-0">
                              <img
                                src="/snp-logo.png"
                                alt="snp-logo"
                                className="utility-imgs"
                              />
                              <Link
                                to={"/cred-pay"}
                                style={{ textDecoration: "none" }}
                              >
                                {" "}
                                <h4 className="utility-headers b-0">
                                  SCAN AND PAY
                                </h4>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                      {hoveredItem == "UPGRADES" && (
                        <div className="row d-flex flex-column content-items w-100">
                          <div className="row d-flex p-0">
                            <div className="col-md-6 d-flex align-items-center p-0">
                              <img
                                src="/travel-logo.png"
                                alt="travel-logo"
                                className="utility-imgs"
                              />
                              <h4 className="utility-headers b-0">TRAVEL</h4>
                            </div>
                            <div className="col-md-6 d-flex align-items-center p-0">
                              <img
                                src="/garage-logo.png"
                                alt="garage-logo"
                                className="utility-imgs"
                              />
                              <h4 className="utility-headers b-0">GARAGE</h4>
                            </div>
                          </div>
                          <div className="row p-0">
                            <div className="col-md-12 d-flex align-items-center p-0">
                              <img
                                src="/mint-logo.png"
                                alt="mint-logo"
                                className="utility-imgs"
                              />
                              <h4 className="utility-headers b-0">MINT</h4>
                            </div>
                          </div>
                        </div>
                      )}
                      {hoveredItem == "COMPANY" && (
                        <div className="row d-flex flex-column content-items w-100">
                          <div className="row d-flex flex-xolumn p-0">
                            <h4
                              className="utility-headers b-0"
                              style={{
                                color: "rgba(255, 255, 255, 0.4)",
                                fontSize: "28.08px",
                              }}
                            >
                              ABOUT CRED
                            </h4>
                            <h4
                              className="utility-headers b-0"
                              style={{
                                marginTop: "20px",
                                color: "rgba(255, 255, 255, 0.4)",
                                fontSize: "28.08px",
                              }}
                            >
                              CAREERS
                            </h4>
                          </div>
                        </div>
                      )}
                      {hoveredItem == "INSIDER PERKS" && (
                        <div className="row d-flex flex-column content-items w-100">
                          <div className="row d-flex flex-xolumn p-0">
                            <h4
                              className="utility-headers b-0"
                              style={{
                                color: "rgba(255, 255, 255, 0.4)",
                                fontSize: "28.08px",
                              }}
                            >
                              UPGRADE TO UPI
                            </h4>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="col-md-1 p-0"></div>
                  </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default Menu;
