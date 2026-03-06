import prisma from "../prisma.js";

export const getAllEdges = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "missing credintials",
      });
    }
    const edges = await prisma.edge.findMany({
      where: {
        source: { fileId: id },
      },
    });

    return res.status(200).json({
      success: true,
      data: edges,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const createEdge = async (req, res) => {
  try {
    const { sourceId, targetId, type, notes } = req.body;
    if (!sourceId || !targetId || !type ) {
      return res.status(400).json({
        success: false,
        message: "missing credentials",
      });
    }
    const edge = await prisma.edge.create({
      data: {
        sourceId,
        targetId,
        notes,
        type,
      },
    });
    if (!edge) {
      return res.status(400).json({
        success: false,
        message: "creating edge failed",
      });
    }
    res.status(201).json({
      success: true,
      message: "edge created",
      data: edge,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteEdge = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "missing credintials",
      });
    }
    const edge = await prisma.edge.delete({
      where: {
        id,
      },
    });

    if (!edge) {
      return res.status(404).json({
        success: false,
        message: "deleting edge failed!",
      });
    }
    return res.status(200).json({
      success: true,
      message: "edge deleted successfuly",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
