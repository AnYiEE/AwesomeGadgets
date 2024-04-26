import {edittoolsVplus} from './modules/edittoolsVplus';

const {wgNamespaceNumber} = mw.config.get();

if (![8, 828].includes(wgNamespaceNumber)) {
	edittoolsVplus();
}
