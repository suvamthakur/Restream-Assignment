import { useContext, useState } from "react";
import { contents } from "../../utils/constants";
import { RxCross2 } from "react-icons/rx";
import { streamContext } from "../../utils/streamContext";

const StreamDetails = () => {
  const [tooltip, setTooltip] = useState(false);

  // Get data and functions to update data
  const { title, description, value, setStreamDetails, setIsEditStreamActive } =
    useContext(streamContext);

  // Update details
  const [titleText, setTitleText] = useState(title);
  const [descriptionText, setDescriptionText] = useState(description);
  const [contentType, setContentType] = useState(value);

  const handleUpdateDetails = () => {
    setStreamDetails({
      title: titleText,
      description: descriptionText,
      value: contentType,
    });

    setIsEditStreamActive(false);
  };

  return (
    <div className="stream-details-popup">
      <h3>Stream details</h3>
      <p>
        You can update title & description for each destination individually in
        the destination settings.
      </p>

      <div className="stream-edit-container">
        <label>Title</label>
        <input
          className="input"
          value={titleText}
          type="text"
          onChange={(e) => setTitleText(e.target.value)}
        />

        <label>Description</label>
        <textarea
          className="input"
          name=""
          value={descriptionText}
          onChange={(e) => setDescriptionText(e.target.value)}
        ></textarea>

        <label>Content type</label>
        <select name="" id="" onChange={(e) => setContentType(e.target.value)}>
          {contents.map((content, index) => (
            <option key={index} value={content}>
              {content}
            </option>
          ))}
        </select>
      </div>

      <button className="update-btn" onClick={() => handleUpdateDetails()}>
        Update All
      </button>

      <div className="close-btn-wrapper">
        {tooltip && <div className="tooltip">Close</div>}

        <RxCross2
          className="stream-details-close-btn"
          //  Show/Hide tooltip and Popup
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
          onClick={() => setIsEditStreamActive(false)}
        />
      </div>
    </div>
  );
};
export default StreamDetails;
