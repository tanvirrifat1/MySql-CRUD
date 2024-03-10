import { Profile, User } from "@prisma/client";
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

const insertOrUpdate = async (data: Profile) => {
  const isExist = await prisma.profile.findFirst({
    where: {
      userId: data.userId,
    },
  });

  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        id: isExist.id,
      },
      data: {
        bio: data.bio,
        name: data.name,
      },
    });
    return result;
  }

  const result = await prisma.profile.create({ data });
  return result;
};

export const UserService = {
  insertIntoDB,
  getAllData,
  getSingleData,
  updateUser,
  deleteUser,
  insertOrUpdate,
};
