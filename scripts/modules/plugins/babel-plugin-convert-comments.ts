/**
 * @file Convert comments to preservable comments when passing the source code to esbuild
 */
import type {Comment, Program} from '@babel/types';
import type {NodePath} from 'babel__traverse';
import {declare} from '@babel/helper-plugin-utils';

const plugin = declare(() => {
	return {
		visitor: {
			Program(path: NodePath<Program>): void {
				path.traverse({
					enter(p: NodePath) {
						const {
							node: {innerComments, leadingComments, trailingComments},
						} = p;

						for (let comments of [innerComments, leadingComments, trailingComments]) {
							if (!comments) {
								continue;
							}

							comments = comments.map((comment: Comment): Comment => {
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
