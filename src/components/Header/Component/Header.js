import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Row } from "react-bootstrap";
import './Header.css';
import strings from '../constants';

class Header extends Component {    
    render(){
        return(
         <div>   
            <Row>
                <Paper className="PaperStyle" zDepth = {3} >
                    <div className="header-string">{ strings.header }</div>
                </Paper>
            </Row>
        </div>
        )
    }

}

export default Header;