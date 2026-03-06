import prisma from "../prisma.js"

export const getAllFiles = async (req,res)=>{
    try {
        const files =await prisma.file.findMany();

        return res.status(200).json({
            success:true,
            data:files
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const createFile = async (req,res)=>{
    try {
        const {fileName}= req.body;
        if(!fileName){
            return res.status(400).json({
                success:false,
                message:"missing credentials"
            })
        }
        const file = await prisma.file.create({data:{
            name:fileName
        }});
        if(!file){
            return res.status(400).json({
                success:false,
                message:"creating file failed"
            })
        }
        res.status(201).json({
            success:true,
            message:"file created",
            data:file
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const getFile =async (req,res)=>{
    try {
        const id = req.params.id;
        if(!id){
            return res.status(400).json({
                success:false,
                message:"missing credintials"
            })
        }
        const file =await prisma.file.findUnique({where:{
            id
        }})

        if(!file){
            return res.status(404).json({
                success:false,
                message:"file not found!"
            })
        }
        return res.status(200).json({
            success:true,
            data:file
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}