import React from 'react';
import Button from '../../UI/Button/Button';

import classes from './PaginationArea.module.css';
import icons from '../../../assets/images/icons.svg';

class PaginationArea extends React.Component {
    render () {
        return (
            <div className={classes.Paginations}>
                {
                    this.props.from === 0 ? null : (
                        <Button 
                            classList={["ButtonInline"]} 
                            styles={{float: "left", flexDirection: "row-reverse"}}
                            clicked={() => this.props.clicked(this.props.from - 10)}    
                        >
                            <svg>
                                <use href={icons + "#icon-triangle-left"}></use>
                            </svg>
                            <span>Page {Math.round(this.props.from / 10)}</span>
                        </Button>
                    )

                }
                
                {
                    this.props.to === 100 || this.props.count - 10 <= this.props.from ? null : (
                        <Button 
                            classList={["ButtonInline"]} 
                            styles={{float: "right"}}
                            clicked={() => this.props.clicked(this.props.to)}    
                        >
                            <svg>
                                <use href={icons + "#icon-triangle-right"}></use>
                            </svg>
                            <span>Page {Math.round(this.props.to / 10) + 1}</span>
                        </Button>
                    )
                }

                
            </div>
        )
    }
}

export default PaginationArea;