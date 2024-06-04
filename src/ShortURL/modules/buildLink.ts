import {addLink} from './addLink';

const buildLink = (oldId: number | null, diffId: number): void => {
	let link: string = '/d';
	if (oldId) {
		link += `/${oldId}`;
	}
	link += `/${diffId}`;

	addLink(link);
};

export {buildLink};
