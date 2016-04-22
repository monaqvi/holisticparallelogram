import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Header from './Header';
import PlaceContainer from './PlaceContainer';
import SavedPlaceContainer from './SavedPlaceContainer';
import searchGooglePlaces from '../utils/searchGooglePlaces.js';
import touchTap from 'react-tap-event-plugin';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a'
    };
  }

  handleChange(e, index, value){
    console.log(arguments);
console.log('fire');
    this.setState({
      value: e
    });
  };

  render() {
    return (
      <div>
        <Header/>
        <Tabs
          value={this.state.value}
        >
            <Tab label='View Search' value='a' onClick={this.handleChange.bind(this, 'a')} ref='TEST'>
            <div className='grid'>
              <PlaceContainer/>
            </div>
            </Tab>
            <Tab label='Your Places' value='b' onClick={this.handleChange.bind(this, 'b')} ref='TEST'>
            <SavedPlaceContainer/>
            </Tab>
        </Tabs>
      </div>
    );
  }
}



export default App;
