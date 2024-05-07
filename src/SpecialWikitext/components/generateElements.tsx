import {previewLoadingContent, previewLoadingInner} from './SpecialWikitext.module.less';
import React from 'ext.gadget.React';
import {getMessage} from '../modules/i18n';

const Failed = () => (
	<>
		<img
			src={
				'https://youshou.wiki/images/thumb/d/d6/Old_Alert_Mark_%28Orange%29.svg/48px-Old_Alert_Mark_%28Orange%29.svg.png'
			}
			decoding="async"
			width="32"
			height="32"
		/>
		<span>&nbsp;{getMessage('Failed')}</span>
	</>
);

const Loading = () => (
	<div id={'specialwikitext-preview-loading'}>
		<div className={['quotebox', previewLoadingInner]} id={'specialwikitext-preview-loading__inner'}>
			<div className={previewLoadingContent} id={'specialwikitext-preview-loading__content'}>
				<img
					src={'https://youshou.wiki/images/b/b1/Loading_icon.gif'}
					decoding="async"
					width="32"
					height="32"
				/>
				<span>&nbsp;{getMessage('Loading')}</span>
			</div>
		</div>
	</div>
);

export {Failed, Loading};
