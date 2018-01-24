import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import EditableLable from '../../EditableLable/Component/EditableLable';
import ActionDelete from 'material-ui/svg-icons/action/delete';
class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
        }
        this.callback =this.callback.bind(this);
    }

    callback = () => {
        this.props.callback(this.state.id);
    }

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
                    <input type="text"/>
                </Row>    
            </div>
        );
    }
}

export default InputBox;