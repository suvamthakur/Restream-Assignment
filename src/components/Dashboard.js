import { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import StreamDetails from "./Popups/StreamDetails";
import { contents } from "../utils/constants";
import { streamContext } from "../utils/streamContext";
import Platforms from "./Popups/Platforms";

const Dashboard = () => {
  const [isEditStreamActive, setIsEditStreamActive] = useState(false);
  const [showPlatforms, setShowPlatforms] = useState(false);

  // To modify the streamContext Data
  const [{ title, description, value }, setStreamDetails] = useState({
    title: "restream",
    description:
      "Restream helps you multistream & reach your audience, wherever they are.",
    value: contents[0],
  });

  return (
    <div className="dashboard">
      {/* Providing Context (Stream details) values */}
      <streamContext.Provider
        value={{
          title,
          description,
          value,
          isEditStreamActive, // To make background blur and freeze functionalities (<Body/>)
          showPlatforms,
          setIsEditStreamActive, // Show/hide stream details
          setStreamDetails,
          setShowPlatforms, // Show/hide platform container
        }}
      >
        <Header />
        <Body />

        {/* Popups */}

        {isEditStreamActive && <StreamDetails />}
        {showPlatforms && <Platforms setShowPlatforms={setShowPlatforms} />}
      </streamContext.Provider>
    </div>
  );
};
export default Dashboard;
