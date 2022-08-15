/* eslint-disable consistent-return */
import React from 'react';
import { SuspenseGet } from 'utils/api';

export const fetchEventData = ({
	InterestTagCategoryId = 0,
	pageIdx = 0,
	size = 0,
}) =>
	SuspenseGet({
		url: `web/event/?InterestTagCategoryId=${InterestTagCategoryId}&page_idx=${pageIdx}&size=${size}`,
	});
