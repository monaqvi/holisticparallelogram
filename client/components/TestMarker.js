import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';
const style = {
left: '-50%',
top: -34,
color: '#fff',
padding: '2px 4px',
fontSize: 14,
fontWeight: 'bold',
display: 'block',
backgroundColor:'#007a87'
}

const K_WIDTH = 40;
const K_HEIGHT = 40;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: 20,
  height: 20,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

export default class MyGreatPlace extends Component {



  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div style={greatPlaceStyle}>
       </div>
    );
  }
}
