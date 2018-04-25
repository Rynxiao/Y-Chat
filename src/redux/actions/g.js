import { createAction } from 'middlewares/utils';
import { UPDATE_G_PROPERTY } from './const';

const updateGProperty = createAction(UPDATE_G_PROPERTY);


module.exports = {
    updateGProperty
};
