import Tracker from "@openreplay/tracker";

const key = process.env.REACT_APP_OPEN_REPLAY_ID;
let replay;
if (key) {
  replay = new Tracker({
    projectKey: key,
    defaultInputMode: 1,
  });
  replay.start().then();
}

export const setUser = (name, joiningPublic) => {
  if (replay) {
    replay.setUserID(name);
    replay.setMetadata("publicRoom", joiningPublic ? "true" : "false");
  }
};
