import { RxCross2 } from "react-icons/rx";
import { platforms } from "../../utils/constants";
import Platform from "./Platform";
import { useState } from "react";

const Platforms = ({ setShowPlatforms }) => {
  const [tooltip, setTooltip] = useState(false);

  return (
    <div className="platforms-container">
      <h3>Platforms</h3>

      <div className="platforms-wrapper">
        {platforms.map((platform, index) => (
          <Platform key={index} platformData={platform} />
        ))}
        {platforms.map((platform, index) => (
          <Platform key={index} platformData={platform} />
        ))}
        {platforms.map((platform, index) => (
          <Platform key={index} platformData={platform} />
        ))}
      </div>

      <div className="close-btn-wrapper">
        {/* Tooltip */}
        {tooltip && <div className="tooltip">Close</div>}

        <RxCross2
          className="stream-details-close-btn"
          //  Show/Hide tooltip and Popup
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
          onClick={() => setShowPlatforms(false)}
        />
      </div>
    </div>
  );
};
export default Platforms;
