import { useState } from "react";
import ChannelSection from "./ChannelSection";
import ChatSection from "./ChatSection";

const DashboardSidebar = () => {
  const [isChatActive, setIsChatActive] = useState(false);

  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-header">
        {/* Actions accroding the section which is active */}
        <p
          className={isChatActive ? "" : "channel-section-btn-bg"}
          onClick={() => setIsChatActive(!isChatActive)}
        >
          Destinations
        </p>

        <p
          className={isChatActive ? "channel-section-btn-bg" : ""}
          onClick={() => setIsChatActive(!isChatActive)}
        >
          Chat
        </p>
      </div>

      {isChatActive ? <ChatSection /> : <ChannelSection />}
    </div>
  );
};
export default DashboardSidebar;
