import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import SavedPlaceEntry from './SavedPlaceEntry.js';
import ReactDOM from 'react-dom';
import actions from '../actions/index.js';
import $ from 'jquery';

import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import GoogleMap from 'google-map-react';
import TestMarker from './TestMarker.js'



const mapstyles = {width:580, height: 600, float:'left', marginLeft:100};
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    float:'left',
    marginTop: 20
  },
  gridList: {
    width:700,
    height: 600,
    marginBottom: 24,
    overflowY: 'auto'

  },
};
 var center;


class SavedPlaceContainer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.savedPlaces.length === 0) {

      // there are no saved places, so show an empty state
      return (
        <div >
        <h3>Your Saved Places</h3>
          <div >
            <p>
              If you like a place, click the &hearts; to save it for later.
            </p>
          </div>
        </div>
      );
    } else {

      // there are saved places, so display them
      return (
        <div>
          <div style={styles.root}>
          <GridList
           cellHeight={120}
           style={styles.gridList}
           padding={25}

          >

          { this.props.savedPlaces.map((savedPlace) => (
            <div>
              <SavedPlaceEntry savedPlace={savedPlace} onDeleteClick={this.props.onDeleteClick} />
            </div>
          ))}

        </GridList>
        </div>
        <div style={mapstyles}>
        <GoogleMap
          bootstrapURLKeys={{
              key: 'AIzaSyAeYPE2KvoYwdSiVVrZEwdyQ94engLcfxY',
              language: 'en'
          }}
          center={[37.783697, -122.408966]}
          zoom={12}
          >
          {this.props.savedPlaces.map((savedPlace ) =>(
            <TestMarker lat={savedPlace.lat} lng={savedPlace.lng} text={'A'}></TestMarker>

          ))}
          <TestMarker lat={37.794440} lng={-122.463226}></TestMarker>
          <TestMarker lat={37.785758} lng={-122.429581}></TestMarker>
          <TestMarker lat={37.771105} lng={-122.435074}></TestMarker>
          <TestMarker lat={37.724955} lng={-122.423401}></TestMarker>
          <TestMarker lat={37.724412} lng={-122.457733}></TestMarker>
          <TestMarker lat={37.761334} lng={-122.457733}></TestMarker>
          <TestMarker lat={37.767848} lng={-122.419968}></TestMarker>
          <TestMarker lat={37.707574} lng={-122.492752}></TestMarker>

        </GoogleMap>
        </div>
      </div>


      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    savedPlaces: state.savedPlaces
  };
};

SavedPlaceContainer.propTypes = {
  savedPlaces: PropTypes.array,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (place, user) => {
      $.ajax({
        url: '/api/places/saved',
        method: 'DELETE',
        data: {user: user, place: place},
      });
      dispatch(actions.deletePlace(place));
    }
  };
};


SavedPlaceContainer.propTypes = {
  places: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedPlaceContainer);
