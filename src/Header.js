import {
  selectIsConnectedToRoom,
  useDevices,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import React, { Fragment } from "react";
import { grayScalePlugin, PluginButton } from "./plugin";

function Header() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  return (
    <header>
      <img
        className="logo"
        src="https://ashwins93.app.100ms.live/static/media/100ms_logo.3cfd8818.svg"
        alt="logo"
      />
      {isConnected && (
        <div>
          <UpdateCamera />
          <PluginButton plugin={grayScalePlugin} name={"Grayscale"} />
          <button
            id="leave-btn"
            className="btn btn-danger"
            onClick={() => hmsActions.leave()}
          >
            Leave Room
          </button>
        </div>
      )}
    </header>
  );
}

// not everyone's default camera is functional let's add a selector for camera
function UpdateCamera() {
  const { allDevices, selectedDeviceIDs, updateDevice } = useDevices();

  if (allDevices.videoInput.length <= 1) {
    return null; // no choices to give
  }

  const updateCamera = (event) => {
    console.log("updating device ", event.target, event.target.value);
    updateDevice({
      deviceType: "videoInput",
      deviceId: event.target.value,
    }).then();
  };

  return (
    <Fragment>
      <select
        className="camera-selection"
        onChange={updateCamera}
        value={selectedDeviceIDs.videoInput}
      >
        {allDevices.videoInput.map((video) => (
          <option key={video.deviceId} value={video.deviceId}>
            {video.label}
          </option>
        ))}
      </select>
    </Fragment>
  );
}

export default Header;
