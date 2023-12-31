import { Request, Response } from "express";
import { PostService } from "./post.service";

const insertIntoDB = async (req: Request, res: Response) => {
    try {
        const result = await PostService.insertIntoDB(req.body);
        res.send({
            success: true,
            message: "post created successfully",
            data: result
        })
    } catch (err) {
        res.send(err);
    }
};

export const PostController = {
    insertIntoDB
}