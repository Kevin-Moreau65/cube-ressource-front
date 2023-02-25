import { redirect, type RequestHandler } from '@sveltejs/kit';

export const GET = (({ cookies }) => {
	cookies.delete('token');
	throw redirect(302, '/');
}) satisfies RequestHandler;
