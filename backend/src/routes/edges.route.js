import { Router } from "express";
import { createEdge, deleteEdge, getAllEdges } from "../controllers/edges.controller.js";

const router = Router();

router.get("/",getAllEdges);
router.post("/",createEdge);
router.get("/:id",deleteEdge);

export default router

