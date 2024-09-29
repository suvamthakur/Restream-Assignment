import { useContext } from "react";
import DashboardSidebar from "./DashboardSidebar";
import SetupContainer from "./SetupContainer";
import { streamContext } from "../utils/streamContext";

const Body = ({ setStreamDetails }) => {
  const { isEditStreamActive, showPlatforms } = useContext(streamContext);

  return (
    <div
      className={
        "main " +
        (isEditStreamActive || showPlatforms
          ? "pointer-events-none low-opacity"
          : "")
      }
    >
      <SetupContainer setStreamDetails={setStreamDetails} />
      <DashboardSidebar />
    </div>
  );
};
export default Body;
