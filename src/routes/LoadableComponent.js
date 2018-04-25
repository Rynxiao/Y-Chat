/* eslint arrow-body-style:0 */

import Loadable from 'react-loadable';
import MyLoadingComponent from './Loading';

const LoadableComponent = component => {
    return Loadable({
        loader: () => import(`views/${component}`),
        loading: MyLoadingComponent
    });
};

export default LoadableComponent;
