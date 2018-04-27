import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Col } from 'antd';
import Template from 'components/common/Template';
import './login.scss';

const FormItem = Form.Item;

class Login extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const { history } = this.props;
        history.push('/home');
    }

    render() {
        return (
            <div className="g-theme m-login">
                <Col span={12} className="m-login-grid">
                    <Form onSubmit={this.handleSubmit} className="m-login-form">
                        <FormItem>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="m-login-form-button">
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                </Col>
            </div>
        );
    }
}

Login.defaultProps = {};
Login.propTypes = {
    history: PropTypes.shape({})
};

export default Template(Login);
