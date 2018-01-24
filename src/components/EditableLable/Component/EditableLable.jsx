import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import  ActionUpdate  from 'material-ui/svg-icons/action/update';

import './Editablelable.css';
import strings from '../Constants';

/**
 * @description Editable lable common component.
 * handle lable edit and save functionality
 * @author Suhas R More
 * @class EditableLable
 * @extends {Component}
 */
class EditableLable extends Component {
    constructor(props){
        super(props);

        this.state = {

            label : this.props.label ? this.props.label : strings.defaultLabel,
            isInput: false,

        }

        this.renderLabel = this.renderLabel.bind(this);
    }

    /**
     * @description render lable or input box 
     *              to change lable depending on the state of isInput 
     * @memberof EditableLable
     */
    renderLabel = () => {
        if( !this.state.isInput ) {
            
            return(
                <label>
                    {   
                        this.state.label != "" ? 
                        this.state.label : 
                        strings.defaultLabel 
                    }
                </label>
            );

        } else {
            
            return (
                <input
                    className = "input-box"
                    value = { this.state.label }
                    onChange = {
                            ( e ) => {
                                this.setState({
                                    label: e.target.value
                                });
                            }
                        }
                />
            );
        }    
    }

    render() {
        return(
            <div>
                <Row>
                       { this.renderLabel() }
                        
                        <ActionUpdate 
                            className = "setting-icon"
                            color="blue"
                            onClick = {
                                    () => {
                                        this.setState({
                                            isInput:!this.state.isInput
                                        })
                                    }
                                }
                        />
                </Row>
            </div>

        );
    }
}

export default EditableLable;