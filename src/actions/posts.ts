import { environment } from "@/config/environment";
import { IComment, IPost } from "@/types/http/posts.interface";
import * as E from "@/utils/either";

/**
 * Interface para os parâmetros de paginação e filtragem dos posts
 * @param page - Número da página para simular paginação, já que a API não oferece este recurso
 * @param limit - Limite de posts por página para simular paginação
 * @param userId - ID do usuário para simular filtragem por usuário, já que a API não oferece este recurso
 */
interface IGetPostsPayload {
  page?: number;
  limit?: number;
  userId?: number;
}

interface IGetPostsResponse {
  totalAmount: number;
  posts: IPost[];
}

/**
 * Busca posts com simulação de paginação e filtragem
 * @param page - Página atual (padrão: 1)
 * @param limit - Limite de posts por página (padrão: máximo de número seguro)
 * @param userId - Filtro opcional por ID do usuário
 * @returns Either contendo array de posts ou erro
 *
 * Como a API não oferece paginação nem filtragem nativa,
 * estas funcionalidades são simuladas no cliente:
 * - Paginação: slice do array de posts
 * - Filtragem por usuário: filter do array de posts
 */
export const getPosts = async ({
  page = 1,
  limit = Number.MAX_SAFE_INTEGER,
  userId,
}: IGetPostsPayload = {}): Promise<E.Either<Error, IGetPostsResponse>> => {
  try {
    const response = await fetch(`${environment.serverUrl}/posts`);
    const data = await response.json();

    const filteredPosts = userId
      ? data.filter((post: IPost) => post.userId === userId)
      : data;
    const paginatedPosts = filteredPosts.slice(
      (page - 1) * limit,
      page * limit
    );

    return E.right({
      totalAmount: filteredPosts.length,
      posts: paginatedPosts,
    });
  } catch (error) {
    return E.left(error as Error);
  }
};

export const getPost = async (
  postId: number
): Promise<E.Either<Error, IPost>> => {
  try {
    const response = await fetch(
      `${environment.serverUrl}/posts/${postId}`
    );
    const data = await response.json();

    if (!data) {
      return E.left(new Error("Post not found"));
    }

    return E.right(data);
  } catch (error) {
    return E.left(error as Error);
  }
};

export const getComments = async (
  postId: number
): Promise<E.Either<Error, IComment[]>> => {
  try {
    const response = await fetch(
      `${environment.serverUrl}/posts/${postId}/comments`
    );
    const data = await response.json();

    return E.right(data);
  } catch (error) {
    return E.left(error as Error);
  }
};
