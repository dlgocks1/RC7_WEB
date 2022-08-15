import React from 'react';
import { CustomGet, CustomPatch, CustomPost } from 'utils/api';

function useUserFavor() {
	async function AddBookMark({ wdIndex, userId, jwt }) {
		const result = await CustomPost({
			url: `/web/bookMarkList/${userId}`,
			body: {
				companyDuty_no: `${wdIndex}`,
			},
			headers: {
				'x-access-token': jwt,
			},
		});
		console.log(result);
	}

	async function PatchBookMark({ wdIndex, userId, jwt }) {
		const result = await CustomPatch({
			url: `/web/bookMarkList/${userId}/status`,
			body: {
				companyDuty_no: `${wdIndex}`,
			},
			headers: {
				'x-access-token': jwt,
			},
		});
		console.log(result);
	}

	async function AddLiked({ wdIndex, userId, jwt }) {
		const result = await CustomPost({
			url: `/web/likeList/${userId}`,
			body: {
				companyDuty_no: `${wdIndex}`,
			},
			headers: {
				'x-access-token': jwt,
			},
		});
		console.log(result);
	}

	async function PatchLiked({ wdIndex, userId, jwt }) {
		const result = await CustomPatch({
			url: `/web/likeList/${userId}/status`,
			body: {
				companyDuty_no: `${wdIndex}`,
			},
			headers: {
				'x-access-token': jwt,
			},
		});
		console.log(result);
	}

	return { AddBookMark, PatchBookMark, PatchLiked, AddLiked };
}

export default useUserFavor;
