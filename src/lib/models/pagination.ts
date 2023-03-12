/*"pageNumber": 1,
  "pageSize": 10,
  "firstPage": "https://apiresource2.azurewebsites.net/api/Resources?pageNumber=1&pageSize=10",
  "lastPage": "https://apiresource2.azurewebsites.net/api/Resources?pageNumber=2&pageSize=10",
  "totalPages": 2,
  "totalRecords": 17,
  "nextPage": "https://apiresource2.azurewebsites.net/api/Resources?pageNumber=2&pageSize=10",
  "previousPage": null,*/

export interface Pagination {
	pageNumber: number;
	pageSize: number;
	firstPage: string;
	lastPage: string;
	totalPages: number;
	totalRecords: number;
	nextPage: string;
	previousPage?: string;
}
