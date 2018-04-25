import React from 'react';
import { Route, Link } from 'react-router-dom';
import Template from 'components/common/Template';
import LoadableComponent from 'src/routes/LoadableComponent';

const App = LoadableComponent('app/App');
const Home = LoadableComponent('Home');
const About = LoadableComponent('About');
const Contact = LoadableComponent('Contact');

class Wrapper extends React.Component {
    render() {
        return (
            <div className="global-wrapper">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <Link className="navbar-brand" to="/">主页</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/home">我的贴吧</Link></li>
                                <li><Link to="/about">我的图书</Link></li>
                                <li><Link to="/contact">联系我们</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Route exact path="/" component={ App }/>
                <Route exact path="/home" component={ Home }/>
                <Route exact path="/about" component={ About }/>
                <Route exact path="/contact" component={ Contact }/>
            </div>
        );
    }
}

Wrapper.defaultProps = {};
export default Template(Wrapper);
