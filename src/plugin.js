import { GrayscalePlugin } from "./plugins/grayscalePlugin";
import React from "react";

export const grayScalePlugin = new GrayscalePlugin();
export function PluginButton({ plugin, name }) {
  const togglePluginState = async () => {};

  return (
    <button id="grayscale-btn" className="btn" onClick={togglePluginState}>
      {`${isPluginAdded ? "Remove" : "Add"} ${name}`}
    </button>
  );
}
