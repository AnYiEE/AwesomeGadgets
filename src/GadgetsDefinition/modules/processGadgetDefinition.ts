import {makeLink, makeWikilink} from './util/makeLink';
import {REXEX_GADGET_NAME} from './constant';
import {generateGadgetId} from './util/generateGadgetId';

const linkGadgetSource = (sourcePage: string) => {
	return makeWikilink(`MediaWiki:Gadget-${sourcePage}`, sourcePage);
};

const linkGadgetAnchor = (gadgetName: string, text?: string) => {
	return makeLink(`#${generateGadgetId(gadgetName)}`, text || gadgetName);
};

const processGadgetDefinition = (innerHTML: string): string => {
	return (
		innerHTML
			// link gadget name to system message page and add space after it
			.replace(REXEX_GADGET_NAME, (_wholeMatch: string, whitespace: string, gadgetName: string): string => {
				return `${whitespace + linkGadgetSource(gadgetName)} `;
			})
			.replace(/([\w_\-.]+\.(?:css|js(?:on)?))/g, linkGadgetSource) // link script names
			.replace(/\s*\|\s*/g, ' | ') // spaces around pipes
			/**
			 * process options
			 *
			 * Link dependencies: ext.gadget.name to entry on this page, others to
			 * [[mw:ResourceLoader/Core modules]] (even though not all have an entry
			 * there).
			 *
			 * Link peers to entry on this page.
			 *
			 * Link rights to [[mw:Manual:User_rights#List_of_permissions]]. There
			 * are unfortunately no anchors for individual rights.
			 */
			.replace(/([a-z]+)\s*=\s*(.+?)(?=\s*[|\]])/g, (_wholeMatch: string, key: string, value: string) => {
				let splitValue: string[] = value.split(/\s*,\s*/g);
				switch (key) {
					case 'dependencies':
						splitValue = splitValue.map((dependency: string) => {
							const gadgetName: RegExpExecArray | null = /^ext\.gadget\.(.+)$/.exec(dependency);
							if (gadgetName) {
								const _gadgetName: string = gadgetName[1] ?? '';
								return linkGadgetAnchor(_gadgetName, dependency);
							}
							return makeWikilink(
								`Special:GoToInterwiki/mw:ResourceLoader/Core_modules#${dependency}`,
								dependency
							);
						});
						break;
					case 'rights':
						key = makeWikilink('Special:GoToInterwiki/mw:Manual:User_rights#List_of_permissions', key);
						break;
					case 'peers':
						splitValue = splitValue.map((gadgetName: string): string => {
							return linkGadgetAnchor(gadgetName);
						});
				}
				return `${key} = ${splitValue.join(', ')}`;
			})
	);
};

export {processGadgetDefinition};
