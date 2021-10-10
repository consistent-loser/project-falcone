import React, { Component } from 'react'; 
import './App.css';
import Layout from './components/layout/layout';
import FindFalcone from './containers/FindFalcone/FindFalcone';
class App extends Component {

  render() {
    return (
      <div>
        
        <Layout>
          <FindFalcone />
        </Layout>  
      </div>
    );
  }
}

export default App;
