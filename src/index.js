import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HMSRoomProvider } from "@100mslive/hms-video-react";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <HMSRoomProvider>
      <App />
    </HMSRoomProvider>
  </StrictMode>,
  rootElement
);
