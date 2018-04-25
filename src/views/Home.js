import React from 'react';
import PropTypes from 'prop-types';
import Template from 'components/common/Template';

class Home extends React.Component {

    componentDidMount() {
        this.props.actions.getItems();
    }

    render() {
        const { items } = this.props;
        const list = items.get('items');

        return (
            <div className="home-component">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>论坛名字</th>
                            <th>用户等级</th>
                            <th>经验值</th>
                            <th>是否收藏</th>
                            <th>喜欢</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((l, index) => {
                                return (
                                    <tr key={ `list${index}` }>
                                        <td>{ l.get('forum_name') }</td>
                                        <td>{ l.get('user_level') }</td>
                                        <td>{ l.get('user_exp') }</td>
                                        <td>{ l.get('is_like') === 0 ? '是' : '否' }</td>
                                        <td>{ l.get('favo_type') }</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

Home.displayName = 'Home';
Home.propTypes = {
    actions: PropTypes.shape({
        getItems: PropTypes.func,
        getAsyncItem: PropTypes.func
    }),
    items: PropTypes.shape({})
};
Home.defaultProps = {};

export default Template(Home);
