type ToastifyWithHideToast = (
	options: Toastify.Options,
	type?: 'info' | 'success' | 'warning' | 'error'
) => {
	hideToast: () => void;
};

declare global {
	type ToastifyInstance = ReturnType<ToastifyWithHideToast>;
}

export default global;
export {ToastifyWithHideToast};
