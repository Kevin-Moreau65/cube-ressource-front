import { fetchApi, type Fetch, type ResponseAPI } from '$lib/utils/fetch-api';
import type { User } from './account';
import { user } from '$lib/store';

// {
//     "id": 0,
//     "datePost": "2023-03-12T13:59:20.305Z",
//     "content": "string",
//     "isDeleted": true,
//     "ressourceId": 0,
//     "userId": 0
//   }

export interface Comment {
	id: number;
	content: string;
	datePost: string;
	isDeleted: boolean;
	ressourceId: number;
	userId: number;
	user: User;
}

export const postComment = async (
	token: string,
	comment: Pick<Comment, 'content' | 'ressourceId'>
) => {
	const res = await fetchApi('/api/Comments', 'POST', fetch, token, comment);
	return res;
};
