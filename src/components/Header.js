import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { TiArrowUp } from "react-icons/ti";
import { useContext, useEffect, useState } from "react";
import { streamContext } from "../utils/streamContext";
import { userContext } from "../utils/userContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

import { RiBillLine } from "react-icons/ri";
import { TbSwitch3 } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";

const Header = () => {
  const [showUserPopop, setShowUserPopup] = useState(false);

  const { isEditStreamActive, showPlatforms } = useContext(streamContext);
  const { email, photoURL } = useContext(userContext);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  function handleOutsideClick() {
    setShowUserPopup(false);
  }

  // Sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={
        "header " +
        (isEditStreamActive || showPlatforms //Check if any popup is opened
          ? "pointer-events-none low-opacity"
          : "")
      }
    >
      <div className="header-left">
        <MdKeyboardArrowLeft className="left-arrow" />
        <h2>Encoder</h2>

        <div className="upgrade-btn-wrapper">
          <button className="upgrade-btn">
            Upgrade
            <TiArrowUp className="up-arrow" />
          </button>
        </div>
      </div>

      <div className="header-right">
        <img
          className="user-logo"
          src={
            photoURL
              ? photoURL
              : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"
          }
          alt=""
        />
        <div
          className="user-information"
          onClick={(e) => {
            e.stopPropagation();
            setShowUserPopup(!showUserPopop);
          }}
        >
          <p className="email">{email}</p>
          <p className="plan-info">Personal • Basic</p>

          {/* popup */}
          {showUserPopop && (
            <div
              className="user-popup"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <p>
                <RiBillLine className="icons" /> Billing
              </p>
              <p>
                <IoMdSettings className="icons" />
                Setting
              </p>
              <p>
                <TbSwitch3 className="icons" />
                Switch Account
              </p>
              <p onClick={() => handleSignOut()}>
                <LuLogOut className="icons" />
                Logout
              </p>
            </div>
          )}
        </div>

        {showUserPopop ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
    </div>
  );
};
export default Header;
