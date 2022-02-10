import { GrayscalePlugin } from "./plugins/grayscalePlugin";
import {
  selectIsLocalVideoPluginPresent,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import React from "react";

export const grayScalePlugin = new GrayscalePlugin();
export function PluginButton({ plugin, name }) {
  const isPluginAdded = useHMSStore(
    selectIsLocalVideoPluginPresent(plugin.getName())
  );
  const hmsActions = useHMSActions();

  const togglePluginState = async () => {
    if (!isPluginAdded) {
      await hmsActions.addPluginToVideoTrack(plugin);
    } else {
      await hmsActions.removePluginFromVideoTrack(plugin);
    }
  };

  return (
    <button id="grayscale-btn" className="btn" onClick={togglePluginState}>
      {`${isPluginAdded ? "Remove" : "Add"} ${name}`}
    </button>
  );
}
