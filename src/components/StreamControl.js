import { MdEdit } from "react-icons/md";
import { IoCode } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { useContext } from "react";
import { streamContext } from "../utils/streamContext";

const StreamControl = () => {
  const { title, value, setIsEditStreamActive } = useContext(streamContext);

  return (
    <div className="stream-control-section">
      <div
        className="edit-stream-controls"
        onClick={() => setIsEditStreamActive(true)}
      >
        <span className="stream-title">{title}</span>
        <button className="content-type">{value}</button>
        <MdEdit className="edit-btn" />
      </div>

      <div className="stream-settings">
        <div className="embed-stream">
          <IoCode className="embed-logo" />
          <span>EMBED STREAM</span>
        </div>

        <div className="settings">
          <IoMdSettings className="settings-logo" />
          <span>STREAM SETTINGS</span>
        </div>
      </div>
    </div>
  );
};
export default StreamControl;
