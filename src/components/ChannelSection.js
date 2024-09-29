import { FaPlus } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import squid from "../assests/squid.png";
import { streamContext } from "../utils/streamContext";
import { useContext } from "react";

const ChannelSection = () => {
  const { setIsEditStreamActive, setShowPlatforms } = useContext(streamContext);

  return (
    <div className="channel-section">
      <div className="channel-buttons">
        <button
          className="add-channel-btn"
          onClick={() => setShowPlatforms(true)}
        >
          <FaPlus className="add-icon" />
          Add Channel
        </button>
        <button
          className="update-titles-btn"
          onClick={() => setIsEditStreamActive(true)}
        >
          <MdEdit className="edit-icon" />
          Update Titles
        </button>
      </div>

      <div className="channel-toggle">
        <span>0 of 2 active</span>
        <p>
          Toggle all <span>OFF</span> | <span>ON</span>
        </p>
      </div>

      <div className="channel-container">
        <img src={squid} alt="" className="squid-img" />
      </div>
      <button
        className="add-channel-btn add-first-channel-btn"
        onClick={() => setShowPlatforms(true)}
      >
        <FaPlus className="add-icon" />
        Add First Channel
      </button>
    </div>
  );
};
export default ChannelSection;
