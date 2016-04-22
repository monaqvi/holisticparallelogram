import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

http://i.livescience.com/images/i/000/054/836/i02/beach-sea-130716.jpg?1373978821
var SavedPlaceEntry = (props) => (

  <GridTile
          key={'http://i.livescience.com/images/i/000/054/836/i02/beach-sea-130716.jpg?1373978821'}
          title={props.savedPlace.name}
          subtitle={<span><p >{ props.savedPlace.address }</p></span>}
          actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
          col={3}
        >
    <p>{ props.savedPlace.name }</p>
    <p >{ props.savedPlace.address }</p>
      <a className='saved-place-entry-link' href={'//www.images.google.com/search?q=' + props.savedPlace.name + ' ' + props.savedPlace.address + '&tbm=isch'}
      target='_blank'>View Images</a>
      <span className='place-entry-link-divider'>&middot;</span>
      <a className='saved-place-entry-link' href={'//www.google.com/search?q=' + props.savedPlace.name + ' ' + props.savedPlace.address}
      target='_blank'>Find on Google</a>

</GridTile>
);

export default SavedPlaceEntry;
