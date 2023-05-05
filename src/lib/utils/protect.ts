import type { Role } from '$lib/store';
import { user } from '$lib/store';
import { get } from 'svelte/store';

export const protect = (...roles: Role[]) => {
	const account = get(user);
	if (!roles) return account.id !== 0;
	return roles.includes(account.role);
};
