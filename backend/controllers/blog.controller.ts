import { Blog } from "../models/Blog";
import { Request, Response } from "express";

export const blogController = {
  createBlog: async function (req: Request, res: Response) {},
  getBlog: async function (req: Request, res: Response) {},
  updateBlog: async function (req: Request, res: Response) {},
  deleteBlog: async function (req: Request, res: Response) {},
};

blogController.createBlog = async (req: Request, res: Response) => {
  try {
    const { title, author, body, date } = req.body;
    const newBlog = new Blog({ title, author, body, date });
    await newBlog.save();
    res.status(200).json({ status: "ok", data: newBlog });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

blogController.getBlog = async (req: Request, res: Response) => {
  try {
    const blogList = Blog.find({});
    res.status(200).json({ status: "ok", data: blogList });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};
