import React from 'react';
import Rectangle from '../Rectangle/Rectangle';

class RoundedRectangle extends React.Component {
    render () {
        return (
            <Rectangle 
                width={this.props.width} 
                height={this.props.height} 
                borderRadius={this.props.borderRadius ? this.props.borderRadius : '10%'}
            >
            </Rectangle>
        )
    }
}

export default RoundedRectangle;