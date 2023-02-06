export type Account = {
	id: number;
	nom: string;
	prenom: string;
};
export const login = async (email: string, password: string) => {
	const res = await fetch('https://api', {
		body: JSON.stringify({
			email,
			password
		})
	});
	const data = await res.json();
};
