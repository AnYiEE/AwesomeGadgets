/**
 * @file Convert comments to preservable comments when passing the source code to esbuild
 */
import {declare} from '@babel/helper-plugin-utils';

const plugin = declare(() => {
	return {
		visitor: {
			Program(path): void {
				path.traverse({
					enter(p) {
						const {node} = p;

						for (let comments of [node.leadingComments, node.innerComments, node.trailingComments]) {
							if (!comments) {
								continue;
							}

							comments = comments.map((comment) => {
								if (comment.type === 'CommentLine' && comment.value.trim().startsWith('src/')) {
									comment.value = `!${comment.value}`;
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
