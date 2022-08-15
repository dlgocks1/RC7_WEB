import { SuspenseGet } from 'utils/api';

const fetchHome3MinsArticle = () =>
	SuspenseGet({
		url: `web/home/article`,
	});

const fetchHomeVod = () =>
	SuspenseGet({
		url: `web/home/vod`,
	});

const fetchgrowthEvent = () =>
	SuspenseGet({
		url: `web/home/growthEvent`,
	});

export const fetchHomeData = () => ({
	article3Mins: fetchHome3MinsArticle(),
	homevods: fetchHomeVod(),
	growthEvent: fetchgrowthEvent(),
});
