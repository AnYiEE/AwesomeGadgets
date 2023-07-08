/**
 * Generate deployment targets based on the definitions
 *
 * @param {string[]} definitions Array of gadget definitions (in the format of MediaWiki:Gadgets-definition item)
 * @return {Promise<Record<string, {files:string[]}>>}
 */
const generateTargets = async (definitions) => {
	console.log(definitions);
	const targets = {};
	for (const definition of definitions) {
		if (definition === '') {
			continue;
		}
		const [_, name, files, description] = definition.match(/^\*\s(\S+?)\[\S+?]\|(\S+?)#(.*?)$/);
		targets[name] = {};
		targets[name].files = files.split('|').filter((file) => file !== '');
		targets[name].description = description || name;
	}
	return targets;
};

export {generateTargets};
