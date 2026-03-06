import { Router } from "express";
import { createFile, getAllFiles, getFile } from "../controllers/files.controller.js";

const router = Router();

router.get("/",getAllFiles);
router.post("/",createFile);
router.get("/:id",getFile);

export default router

