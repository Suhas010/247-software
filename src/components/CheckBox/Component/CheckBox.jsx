import React, { Component } from 'react';
import { Row, Col, Checkbox } from 'react-bootstrap';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import EditableLable from '../../EditableLable/Component/EditableLable';

/**
 * @description Render CheckBox component in dragable component
 * @author Suhas R More
 * @class CheckBox
 * @extends {Component}
 */

class CheckBox extends Component {
    constructor(props) {
        
        super(props);
        
        this.state = {
            id: this.props.id,
            value:1
        }
        
        this.callback =this.callback.bind(this);
    }

    /**
     * call back to parent components with panel id
     */
    callback = () => {
        this.props.callback(this.state.id);
    }

    /**
     * handle drop down change
     */
    handleChange = (event, index, value) => this.setState({value});

    render(){
        return(
            <div>
                <Row>
                    <Col sm={9} md={9}>
                        <EditableLable/>
                    </Col>
                    
                    <Col sm={3} md={3}>
                        <ActionDelete
                            color="red"
                            className="setting-icon"
                            onClick={this.callback}
                        />
                    </Col>
                </Row>
                
                <Row>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="Never" />
                        <MenuItem value={2} primaryText="Every Night" />
                        <MenuItem value={3} primaryText="Weeknights" />
                        <MenuItem value={4} primaryText="Weekends" />
                        <MenuItem value={5} primaryText="Weekly" />
                    </DropDownMenu>
                </Row>    
            
            </div>
        );
    }
}

export default CheckBox;