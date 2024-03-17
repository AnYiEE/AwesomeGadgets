/**
 * @file Convert comments to preservable comments when passing the source code to esbuild
 */
import type {Comment} from '@babel/types';
import {declare} from '@babel/helper-plugin-utils';

const plugin = declare(() => {
	return {
		visitor: {
			Program(path) {
				path.traverse({
					enter(p) {
						const {
							node: {innerComments, leadingComments, trailingComments},
						} = p;

						for (let comments of [innerComments, leadingComments, trailingComments]) {
							if (!comments) {
								continue;
							}

							comments = comments.map<Comment>((comment) => {
								const {type, value} = comment;

								if (type === 'CommentLine' && value.trim().startsWith('src/')) {
									comment.value = `!${value}`;
								}

								return comment;
							});
						}
					},
				});
			},
		},
	};
});

export default plugin;
