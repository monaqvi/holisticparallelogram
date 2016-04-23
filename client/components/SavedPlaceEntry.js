import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

var SavedPlaceEntry = (props) => (

  <div className='saved-place-entry animated fadeIn'>
    <a href={'https://www.google.com/maps/place/' + props.savedPlace.name + ' ' + props.savedPlace.address} target="_blank">
      <p className='saved-place-name'>{ props.savedPlace.name }</p>
      <p className='saved-place-address'>{ props.savedPlace.address }</p>
    </a>
    <div>
      <a className='saved-place-entry-link' href={'//www.images.google.com/search?q=' + props.savedPlace.name + ' ' + props.savedPlace.address + '&tbm=isch'}
      target='_blank'>View Images</a>
      <span className='place-entry-link-divider'>&middot;</span>
      <a className='saved-place-entry-link' href={'//www.google.com/search?q=' + props.savedPlace.name + ' ' + props.savedPlace.address}
      target='_blank'>Find on Google</a>
    </div>
  </div>
);

export default SavedPlaceEntry;
