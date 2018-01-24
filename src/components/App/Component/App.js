import React, { Component } from 'react';
import './App.css';

import Layout from '../../Layout/Component/Layout';
import Header from "../../Header/Component/Header";
import Footer from "../../Footer/Component/Footer";

class App extends Component {
  
  render() {
    return (
      <div>
        {/* Renders Header*/}
        <Header/>  
          
            <Layout/>
      
        <div className="Footer">
          <Footer/>
        </div>
      
      </div>
    );
  }
}

export default App;
