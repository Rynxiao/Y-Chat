import React from 'react';
import PropTypes from 'prop-types';
import Template from 'components/common/Template';

class About extends React.Component {
    componentDidMount() {
        console.log('componentDidMount');
        this.props.actions.getAsyncItem({
            code: 'utf-8',
            q: '图书'
        });
    }

    render() {
        const { items } = this.props;
        const books = items.get('books');

        return (
            <div className="about-component">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>图书种类</th>
                            <th>图书数量</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((l, index) => {
                                return (
                                    <tr key={ `book${index}` }>
                                        <td>{ l.get(0) }</td>
                                        <td>{ l.get(1) }</td>
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

About.displayName = 'About';
About.propTypes = {
    actions: PropTypes.shape({
        getAsyncItem: PropTypes.func
    }),
    items: PropTypes.shape({})
};
About.defaultProps = {};

export default Template(About);
