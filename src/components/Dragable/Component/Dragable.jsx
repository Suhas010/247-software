import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { Row, Col } from 'react-bootstrap';
import { SortablePane, Pane } from 'react-sortable-pane';

import InputBox from '../../InputBox/Component/InputBox';
import CheckBox from '../../CheckBox/Component/CheckBox';

import './Dragable.css';
import strings,{ dataArray, STATUS, styles } from '../Constant';


/**
 * @description render dragable component in layout component.
 * contains main logic 
 * @author Suhas R More
 * @class Dragable
 * @extends {Component}
 */

class Dragable extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            showOption : false,
            value: 1,
        }
        
        this.renderData = this.renderData.bind(this);
        this.handleAddElement = this.handleAddElement.bind(this);
        this.handleElementRemove = this.handleElementRemove.bind(this);
    }

    /**
     * handle Radio button click
     * add InputBox or CheckBox component according to choise
     */
    handleInputType = (e, value) => {
        // console.log(e.target,value);
        if(value == 1) {
            dataArray[e.target.id].status = STATUS.INPUT_BOX;    
        } else {
            dataArray[e.target.id].status = STATUS.CHECK_BOX;
        }
        //since I am using dataArray as constant .. I have to manually force component to update
        this.forceUpdate();
    }

    /**
     * handle on click of add element show radio buttons to user to chose element
     * he want to add
     */
    handleAddElement = (e) => {
        dataArray[e.target.id].status = STATUS.RADIO_BUTTON;
        this.forceUpdate();
    }

    /**
     * Remove Element of key position and put Add Element Component
     */
    handleElementRemove = (key) => {
        dataArray[key].status = STATUS.ADD_ELEMENT;
        this.forceUpdate();
    }

    /**
     * render appropriate component according to curretn status
     * 1 for add element
     * 2 to radio bux
     * 3 for input box
     * 4 for checkBox
     */
    renderData = () => {
       return(
            dataArray.map(
                    (data,i) => {
                        if(data.status == STATUS.ADD_ELEMENT){
                            // console.log(data.id);
                            return(
                                <Pane id={data.id} key={data.id} width={250} height="100%">
                                    
                                    <div
                                        className = "data"
                                        >
                                    
                                        <label id={data.id}
                                            onClick={this.handleAddElement}
                                            className="addElement">
                                            {strings.addElement}
                                        </label>
                                        
                                        
                                    </div>    
                                </Pane>
                            );

                        } else if (data.status == STATUS.RADIO_BUTTON ) {
                            return(
                                <Pane id={data.id} key={data.id} width={250} height="100%">
                            
                                    <div
                                        className = "data">
                            
                                          <RadioButtonGroup name="shipSpeed" id={1} onChange={this.handleInputType}>
                                                <RadioButton
                                                    value="1"
                                                    label="Input box"
                                                    id={data.id}
                                                    style={styles.radioButton}
                                                />
                                                <RadioButton
                                                    value="2"
                                                    id={data.id}
                                                    label="drop down"
                                                    style={styles.radioButton}
                                                />
                                           </RadioButtonGroup> 
                                    </div>  

                                </Pane>
                                
                            );
                            
                        } else if( data.status == STATUS.INPUT_BOX){
                            return(
                                
                                <Pane id={data.id} key={data.id} width={250} height="100%">
                                
                                    <div
                                        className = "data">
                                        {/* render component InputBox*/}
                                       <InputBox
                                            callback={this.handleElementRemove}
                                            id={data.id}
                                       />
                                
                                    </div>    
                                </Pane>
                                
                            );

                        } else if(data.status == STATUS.CHECK_BOX) {
                            return(

                                <Pane id={data.id} key={data.id} width={250} height="100%">
                                    <div
                                        className = "data">
                                        {/*render CheckBox Component*/}    
                                         <CheckBox
                                            callback = {this.handleElementRemove}
                                            id = {data.id}/>
                                    
                                    </div>    
                                </Pane>
                                
                            );
                        }
                    }
                )
       
        );

    }

    render(){
        // console.log(this.state.dataArray);
        return(
            <div
                className = "dragable">
                <Row>
                    <SortablePane
                        direction = {strings.horizontal} 
                        margin = {20}>

                        {/*render dragable components*/}
                        {this.renderData()}

                    </SortablePane>
                </Row>

            </div>    
        );
    }
}

export default Dragable;