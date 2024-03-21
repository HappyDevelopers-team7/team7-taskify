import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const postCreateCard = async (
  assigneeUserId: number | undefined,
  dashboardId: number,
  columnId: number,
  title: string,
  description: string,
  dueDate: string | undefined,
  tags: string[],
  imageUrl: string | undefined,
) => {
  try {
    const response = await axiosInstance.post(API.CARDS.CARDS, {
      assigneeUserId,
      dashboardId,
      columnId,
      title,
      description,
      dueDate,
      tags,
      imageUrl,
    });
    return response;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
