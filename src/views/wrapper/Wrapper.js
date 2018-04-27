import React from 'react';
import { Route } from 'react-router-dom';
import Template from 'components/common/Template';
import LoadableComponent from 'src/routes/LoadableComponent';
import 'styles/global.scss';

const Login = LoadableComponent('login/Login');
const Home = LoadableComponent('Home');

class Wrapper extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={ Login }/>
                <Route exact path="/home" component={ Home }/>
            </React.Fragment>
        );
    }
}

Wrapper.defaultProps = {};
export default Template(Wrapper);
