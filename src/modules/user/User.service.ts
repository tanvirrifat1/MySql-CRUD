import { User } from "@prisma/client";
import prisma from "../../Shared/Prisma";

const insertIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data });
  return result;
};

const getAllData = async () => {
  const result = await prisma.user.findMany();
  const count = await prisma.user.count();
  return {
    result,
    count,
  };
};

const getSingleData = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: { id },
  });
  return result;
};

const updateUser = async (id: string, payload: Partial<User>) => {
  const result = await prisma.user.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteUser = async (id: string) => {
  const result = await prisma.user.delete({
    where: { id },
  });
  return result;
};

export const UserService = {
  insertIntoDB,
  getAllData,
  getSingleData,
  updateUser,
  deleteUser,
};
