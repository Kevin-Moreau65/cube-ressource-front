import convertDate from '$lib/utils/convert-date';
import { describe, it } from 'vitest';

describe('Testing convert-date', () => {
	it('Should return 01/01/2023', ({ expect }) => {
		const result = convertDate(new Date('01 January 2023 14:48 UTC').toISOString());
		expect(result).toBe('01/01/2023');
	});
	it('Should return 23/02/2020', ({ expect }) => {
		const result = convertDate(new Date('23 February 2020 14:48 UTC').toString());
		expect(result).toBe('23/02/2020');
	});
	it('Should return 31/12/2015', ({ expect }) => {
		const result = convertDate(new Date('31 December 2015 14:48 UTC').toUTCString());
		expect(result).toBe('31/12/2015');
	});
	it('Should return error "test"', ({ expect }) => {
		expect(() => convertDate('test')).throws();
	});
	it('Should return error "41/23/2023"', ({ expect }) => {
		expect(() => convertDate('41/23/2023')).throws();
	});
});
