import {type getViewer} from './viewer';

const viewerMap = new Map<string, ReturnType<typeof getViewer>>();

export {viewerMap};
