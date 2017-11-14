import React from 'react';

let nextId = 0;
class ProductDetail extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {text} = this.props;
        return (
            <div key={nextId++} dangerouslySetInnerHTML={{__html:text}} />
        )
    }
}

export default ProductDetail;