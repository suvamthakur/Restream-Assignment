import { MdLayers } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { RiSendPlane2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { MdBlock } from "react-icons/md";

import restreamIconBlack from "../assests/restream-icon-black.svg";
import { useEffect, useState } from "react";

const ChatSection = () => {
  let time = new Date().toLocaleTimeString("en-GB");
  const [popupBlockUser, setPopupBlockUser] = useState(false);
  const [popupRestreamBox, setPopupRestreamBox] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    // Cleanup the event while unmounting the component
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  function handleOutsideClick() {
    setPopupBlockUser(false);
    setPopupRestreamBox(false);
  }

  return (
    <div className="chat-section">
      <div className="chat-buttons">
        <button className="chat-overlay-btn">
          <MdLayers className="overlay-icon" />
          Chat Overlay
        </button>

        <button className="chat-setting-btn">
          <IoMdSettings className="settings-icon" />
          Settings
        </button>
      </div>

      <div className="chat-box">
        <div className="initial-message">
          {/* <img src={restreamIconBlack} alt="" /> */}
          <div className="message">
            <p className="name">
              <span
                onClick={(e) => {
                  e.stopPropagation(); // Otherwise popup will not open
                  setPopupBlockUser(true);
                }}
              >
                Restream.io <IoIosArrowDown className="user-setting" />
              </span>
              <span className="message-time">{time}</span>

              {/* Popup */}
              {popupBlockUser && (
                <div
                  className="block-user"
                  onClick={(e) => e.stopPropagation()} // Otherwise popup will close
                >
                  <div className="block-user-wrapper">
                    <MdBlock className="block-icon" />
                    <p>Add to blocklist in Restream chat</p>
                  </div>
                </div>
              )}
            </p>

            <p className="text">
              Read & reply to messages from multiple platforms here.
            </p>
          </div>
        </div>
      </div>

      <div className="message-box">
        <div
          className="chat-icon-message"
          onClick={(e) => {
            e.stopPropagation();
            setPopupRestreamBox(true);
          }}
        >
          <img src={restreamIconBlack} alt="" />
          <IoIosArrowDown />
        </div>

        <input
          type="text"
          className="input-message"
          placeholder="Type a message"
        />

        <RiSendPlane2Fill className="message-send-btn" />

        {/* Popup */}
        {popupRestreamBox && (
          <div className="restream-box" onClick={(e) => e.stopPropagation()}>
            <img src={restreamIconBlack} alt="" />
            <span>Restream</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default ChatSection;
