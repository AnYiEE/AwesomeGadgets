import {addListener} from './modules/addListener';
import {getBody} from 'ext.gadget.Util';

void getBody().then(addListener);
