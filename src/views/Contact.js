import React from 'react';
import Template from 'components/common/Template';

class Contact extends React.Component {
    render() {
        return (
            <div className="about-component">
                <h2>联系我们</h2>
            </div>
        );
    }
}

Contact.displayName = 'Contact';
Contact.propTypes = {};
Contact.defaultProps = {};

export default Template(Contact);
