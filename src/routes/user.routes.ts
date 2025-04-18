import { Router } from "express";
import { getAllUser, getUserById } from "../controllers/user.controller";
import { verificationAccess } from "../middlewares/auth";

const router = Router();

router.get("/", verificationAccess, getAllUser);
router.get("/:id", verificationAccess, getUserById);

// router.post("/", verificationAccess, createUser);
// router.patch("/:id", verificationAccess, updateUser);
// router.delete("/:id", verificationAccess, deleteUser);

export default router;
