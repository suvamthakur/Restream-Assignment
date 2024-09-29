import { RxCross2 } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";
import { RTMP_URL, STREAM_KEY } from "../utils/constants";
import { useState } from "react";
import brandLogo from "../assests/brand-watermark.png";
import StreamControl from "./StreamControl";

const SetupContainer = () => {
  // Hide/Show key
  const [showPassword, setShowKey] = useState(false);

  return (
    <div className="stream-container">
      <div className="setup-container">
        <div className="brand-logo-container">
          <img src={brandLogo} alt="" className="brand-logo" />
          <RxCross2 className="brand-logo-remove-btn" />
        </div>

        <div className="stream-preview">
          <h2>Set Up Your Livestream</h2>
          <p>
            Copy and paste <span>RTMP settings</span> into your streaming
            software.
          </p>
        </div>

        <div className="text-boxes">
          <div className="label">
            <span>RTMP URL</span>
            <span className="copy-link-mobile-text">Copy link for mobile</span>
          </div>
          <div className="rtmp-url-container">
            <div className="input-box">
              <input type="text" value={RTMP_URL} />
            </div>
            <button className="copy-btn" title="Copy to clipboard">
              Copy
            </button>
          </div>

          <div className="label">
            <span>Stream key</span>
          </div>
          <div className="stream-key-container">
            <div className="input-box">
              <input
                type={showPassword ? "text" : "password"}
                value={STREAM_KEY}
                onFocus={(e) => {
                  // Show the key and select it
                  setShowKey(true);
                  e.target.select();
                }}
                onBlur={() => setShowKey(false)}
                className="stream-key-input"
              />
              <button className="reset-btn">Reset</button>
            </div>

            <button className="copy-btn" title="Copy to clipboard">
              Copy
            </button>
          </div>

          <p className="add-backup-btn">Add backup stream</p>
        </div>

        <div className="tutorial">
          <FaPlay className="play-btn" />
          <p> Explore how to connect OBS, Zoom, vMix</p>
        </div>
      </div>

      {/* Help button */}
      <button className="help-btn">Need help?</button>

      <StreamControl />
    </div>
  );
};
export default SetupContainer;
