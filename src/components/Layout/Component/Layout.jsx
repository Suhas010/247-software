import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Row, Col } from 'react-bootstrap';
import { SortablePane, Pane } from 'react-sortable-pane';

import EditableLable from '../../EditableLable/Component/EditableLable';
import Dragable from '../../Dragable/Component/Dragable';
import './Layout.css';

import strings from '../Constant';

class Layout extends Component {

  constructor(props) {
    super(props);
  
  }

  render() {

    return (
    
      <div className="Layout-container">
        <Row 
          className = "hr">

          <Col sm={3} md={3} xm={3}>
          
            <EditableLable 
              label = { strings.longForm }/>
        
          </Col>

        </Row>
        
        <Row 
          className = "hr">
        
          <Col sm={3} md={3} xm={3}>
        
            <EditableLable 
              label = { strings.when }/>
        
          </Col>
        
        </Row>
        <Row>
            <Dragable/>
        </Row>
        <div>
      
    </div>
      </div>
    );
  }
}

export default Layout;