import './SkinCitizen.less';

mw.loader
	.using(['mediawiki.util'])
	.then(() => {
		/* Trigger search box when click on the fake search button on main page */
		if (mw.config.get('wgPageName') === '有兽档案馆:首页') {
			const searchTrigger = document.getElementById('skin-citizen-search-trigger');
			if (searchTrigger) {
				searchTrigger.addEventListener('click', () => {
					const event: Event = new Event('input', {bubbles: true, composed: true});
					const checkbox: HTMLInputElement = document.getElementById(
						'citizen-search__checkbox'
					) as HTMLInputElement;
					checkbox.checked = true;
					checkbox.dispatchEvent(event);
				});
			}
		}
	})
	.catch((error) => {
		return console.error(error);
	});
