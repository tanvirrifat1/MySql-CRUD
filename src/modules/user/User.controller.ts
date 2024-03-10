import { Response, Request } from "express";
import { UserService } from "./User.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertIntoDB(req.body);

    res.send({
      success: true,
      message: "user created successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllData = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllData();

    res.send({
      success: true,
      message: "user fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleData = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleData(req.params.id);

    res.send({
      success: true,
      message: "get single user successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.updateUser(req.params.id, req.body);

    res.send({
      success: true,
      message: "user updated successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.deleteUser(req.params.id);

    res.send({
      success: true,
      message: "user deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  insertIntoDB,
  getAllData,
  getSingleData,
  updateUser,
  deleteUser,
};
