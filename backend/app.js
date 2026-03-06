import express from "express";
import cors from "cors";
import filesRouter from "./src/routes/files.route.js";
import nodesRoute from "./src/routes/nodes.route.js";
import edgeRoute from "./src/routes/edges.route.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "ThreadMind API is running" });
});
app.use("/api/files", filesRouter);
app.use("/api/nodes", nodesRoute);
app.use("/api/edges", edgeRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
