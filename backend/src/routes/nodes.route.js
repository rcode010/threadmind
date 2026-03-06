import { Router } from "express";
import { createNode, deleteNode, getAllNodes } from "../controllers/nodes.controller.js";

const router = Router();

router.get("/:id",getAllNodes);
router.post("/",createNode);
router.delete("/:id",deleteNode);

export default router

