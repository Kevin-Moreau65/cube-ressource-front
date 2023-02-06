import { account } from '$lib/store';
export interface ZoneGEO {
	id: number;
	code: number;
	alpha2: string;
	alpha3: string;
	nom_en_gb: string;
	nom_fr_fr: string;
	user?: User[];
}

export interface Role {
	id: number;
	nomRole: string;
	user?: User[];
}

export interface User {
	id: number;
	nom: string;
	prenom: string;
	email: string;
	password: string;
	telephone: string;
	pseudo: string;
	dateCreation: Date;
	isDeleted: boolean;
	isConfirm: boolean;
	idZoneGeo: number;
	zone_GEO: ZoneGEO;
	role: Role;
}
export const login = async (email: string, password: string) => {
	// const res = await fetch('https://api', {
	// 	body: JSON.stringify({
	// 		email,
	// 		password
	// 	})
	// });
	// const data = await res.json();
	if (email === 'kevin@rattrapage.com' && password === 'faitchier') {
		account.set({
			id: 1,
			firstname: 'Kévin',
			lastname: 'Moreau',
			nickname: 'Kéké65'
		});
		return { statusCode: 200 };
	} else {
		return { statusCode: 400, message: 'Email ou mot de passe incorrect' };
	}
};

export const signUp = async (
	email: string,
	password: string,
	firstname: string,
	lastname: string,
	nickname: string
) => {
	// const res = await fetch('https://api', {
	// 	body: JSON.stringify({
	// 		email,
	// 		password
	// 	})
	// });
	// const data = await res.json();
	if (email === 'test') {
		account.set({
			id: 1,
			firstname: 'Kévin',
			lastname: 'Moreau',
			nickname: 'Kéké65'
		});
		const timeout = (ms: number) => {
			return new Promise((resolve) => setTimeout(resolve, ms));
		};
		await timeout(5000);
		return { statusCode: 200 };
	} else {
		return { statusCode: 400, message: 'Une erreur est survenue' };
	}
};
