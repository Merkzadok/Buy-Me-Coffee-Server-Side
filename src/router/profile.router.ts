import express from "express";
import { createProfile } from "../controller/profile/create-profile.controller";
import { getUserProfile } from "../controller/profile/get-profile.controller";
import { getProfileExplore } from "../controller/profile/get-profile-explore.controller";
// import { updateProfile } from "../controller/profile/update-profile.controller";

const profileRouter = express.Router();

profileRouter.post("/:userId", createProfile); 

profileRouter.get("/view/:username", getUserProfile);
profileRouter.get("/explore", getProfileExplore);
// profileRouter.put("/:profileId", updateProfile)

export default profileRouter;