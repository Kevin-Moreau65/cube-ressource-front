export type notification = {
	id?: number;
	message: string;
	type: theme;
	timeout: number;
};
export type theme = 'error' | 'alert' | 'info' | 'confirmation';
