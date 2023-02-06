import { writable } from 'svelte/store';

import type { notification } from '../type';

export const notificationStore = writable<notification[]>([]);

const toast = () => {
	const push = (notif: notification) => {
		notif.id = Date.now();
		notificationStore.update((state) => {
			return [...state, notif];
		});
	};
	const pop = (notif: notification) => {
		notificationStore.update((state) => {
			const index = state.indexOf(notif);
			state.splice(index, 1);
			return [...state];
		});
	};
	return {
		push,
		pop
	};
};
export default toast();
