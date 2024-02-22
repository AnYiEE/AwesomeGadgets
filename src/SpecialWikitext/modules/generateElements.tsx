import React from 'ext.gadget.React';
import {getMessage} from './i18n';

const LOADER_IMAGE: string = 'https://youshou.wiki/images/d/de/Ajax-loader.gif';
const FAIL_IMAGE: string =
	'https://youshou.wiki/wiki/File:%E7%9A%AE%E7%9A%AE%E6%B3%A8%E6%84%8F%E7%89%8C%EF%BC%88%E6%A9%99%EF%BC%89.svg';

const noticeLoadingElement = () => (
	<div className={'specialwikitext__preview-loading'} id={'specialwikitext__preview-loading'}>
		<div className={'specialwikitext__preview-loading-inner'} id={'specialwikitext__preview-loading-inner'}>
			<div className={'specialwikitext__preview-loading-content'} id={'specialwikitext__preview-loading-content'}>
				<img src={LOADER_IMAGE} decoding="async" width="32" height="32" />
				<span>&nbsp;{getMessage('Loading preview')}</span>
			</div>
		</div>
	</div>
);

const noticeFailElement = () => (
	<>
		<img src={FAIL_IMAGE} decoding="async" width="32" height="32" />
		<span>&nbsp;{getMessage('Failed to load preview')}</span>
	</>
);

export {noticeLoadingElement, noticeFailElement};
