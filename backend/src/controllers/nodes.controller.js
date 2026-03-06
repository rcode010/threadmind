import prisma from "../prisma.js";

export const getAllNodes = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "missing credintials",
      });
    }
    const nodes = await prisma.node.findMany({ where: {fileId:id} });

    return res.status(200).json({
      success: true,
      data: nodes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const createNode = async (req, res) => {
  try {
    const { fileId, label, notes, type, risk, confidence, posX, posY } =
      req.body;
    if (
      !fileId ||
      !label ||
      !type ||
      !risk ||
      !confidence
    ) {
      return res.status(400).json({
        success: false,
        message: "missing credentials",
      });
    }
    const node = await prisma.node.create({
      data: {
        fileId,
        label,
        notes,
        type,
        risk,
        confidence,
        posX,
        posY,
      },
    });
    if (!node) {
      return res.status(400).json({
        success: false,
        message: "creating node failed",
      });
    }
    res.status(201).json({
      success: true,
      message: "file created",
      data: node,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteNode = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "missing credintials",
      });
    }
    const file = await prisma.node.delete({
      where: {
        id,
      },
    });

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "deleting node failed!",
      });
    }
    return res.status(200).json({
      success: true,
      message:"node deleted successfuly",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
