import React from 'react';

class ProductDetail extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {text} = this.props;
        return (
            <div dangerouslySetInnerHTML={{__html:text}} />
        )
    }
}

export default ProductDetail;