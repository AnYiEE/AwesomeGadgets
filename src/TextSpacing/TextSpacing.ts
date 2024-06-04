import './TextSpacing.less';
import {WRAPPER_CLASS, addSpaceToString, adjustSpacing, getLeafElements} from './modules/spacing';

const run = (element: HTMLElement): void => {
	const leaves: HTMLElement[] = getLeafElements(element);
	for (const leaf of leaves) {
		adjustSpacing(leaf);
	}
};

const mutationObserver: MutationObserver = new MutationObserver((records: MutationRecord[]): void => {
	for (const record of records) {
		if (record.type !== 'childList') {
			continue;
		}

		const addedNodes: Node[] = [...record.addedNodes];

		// Exclude mutations caused by adjustSpacing() to prevent infinite loops
		// Typically they will contain nodes with class WRAPPER_CLASS
		if (
			addedNodes.some((node: Node): boolean => {
				return node instanceof HTMLElement && node.classList.contains(WRAPPER_CLASS);
			})
		) {
			continue;
		}

		for (const node of addedNodes) {
			if (node instanceof HTMLElement) {
				run(node);
			} else if (node instanceof Text) {
				const {parentElement} = node;
				if (parentElement) {
					run(parentElement);
				}
			}
		}
	}
});

const main = (): void => {
	document.title = addSpaceToString(document.title);
	// Watch for added nodes
	mutationObserver.observe(document.body, {
		subtree: true,
		childList: true,
	});
	run(document.body);
};

$(main);
