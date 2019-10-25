import React from 'react';
import Rectangle from '../Rectangle/Rectangle';

class Circle extends React.Component {
    render () {
        const value = this.props.width > this.props.height ? this.props.height : this.props.width;
        return (
            <Rectangle 
                width={value}
                height={value}
                borderRadius="50%"
            >
            </Rectangle>
        )
    }
}

export default Circle;