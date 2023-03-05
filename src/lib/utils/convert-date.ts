const convertDate = (stringDate: string) => {
	if (isNaN(Date.parse(stringDate))) {
		throw new Error(`La date: "${stringDate}" fournie n'est pas valide`);
	}
	const date = new Date(stringDate);
	const day = date.getDate().toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	});
	const month = (date.getMonth() + 1).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	});
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
};

export default convertDate;
