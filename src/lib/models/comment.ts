import { fetchApi, type Fetch, type ResponseAPI } from '$lib/utils/fetch-api';

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
}

interface CommentResponse extends ResponseAPI {
	comments: Comment[];
}
export const getCommentsByResource = async (id: string, fetch: Fetch) => {
	const res = await fetchApi<CommentResponse>(
		`/api/Comments/getallcommentsbyidressource/${id}`,
		'GET',
		fetch
	);
	return res;
};
