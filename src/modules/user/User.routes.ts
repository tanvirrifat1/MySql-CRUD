import express from "express";
import { UserController } from "./User.controller";

const router = express.Router();

router.post("/create", UserController.insertIntoDB);
router.post("/profile", UserController.insertOrUpdate);
router.get("/:id", UserController.getSingleData);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
router.get("/", UserController.getAllData);

export const UserRouter = router;
