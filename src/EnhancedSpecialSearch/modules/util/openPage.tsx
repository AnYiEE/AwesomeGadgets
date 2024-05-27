import React from 'ext.gadget.React';

const openPage = (url: string): void => {
	const element = (<a href={url} target="_blank" rel="noopener noreferrer" />) as HTMLAnchorElement;

	element.click();
};

export {openPage};
