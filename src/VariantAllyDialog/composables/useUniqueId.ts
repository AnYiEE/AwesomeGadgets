let counter = 0;

/**
 * Return a unique element ID on each call.
 * @returns id
 */
function useUniqueId(): string {
	return `va-${counter++}`;
}

export default useUniqueId;
