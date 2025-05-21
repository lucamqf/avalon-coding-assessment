import { environment } from "@/config/environment";
import { User } from "@/types/http/users.interface";
import * as E from "@/utils/either";

export const getUsers = async (): Promise<E.Either<Error, User[]>> => {
  try {
    const response = await fetch(`${environment.serverUrl}/users`);
    const data = await response.json();

    return E.right(data);
  } catch (error) {
    return E.left(error as Error);
  }
};

export const getUser = async (
  userId: number
): Promise<E.Either<Error, User>> => {
  try {
    const response = await fetch(
      `${environment.serverUrl}/users/${userId}`
    );
    const data = await response.json();

    return E.right(data);
  } catch (error) {
    return E.left(error as Error);
  }
};
