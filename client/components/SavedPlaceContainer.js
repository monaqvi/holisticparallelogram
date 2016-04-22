import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import SavedPlaceEntry from './SavedPlaceEntry.js';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import GoogleMap from 'google-map-react';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width:650,
    height: 400,
    marginBottom: 24,
    marginRight:650
  },
};
 const defaultProps = {lat: 37.7749, lng: 122.4194}

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
           cellHeight={100}
           style={styles.gridList}
           padding={10}

          >

          { this.props.savedPlaces.map((savedPlace) => (
            <div>
              <SavedPlaceEntry savedPlace={savedPlace} />
            </div>
          ))}

        </GridList>
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

export default connect(
  mapStateToProps
)(SavedPlaceContainer);
