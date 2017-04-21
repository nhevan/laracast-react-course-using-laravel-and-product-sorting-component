import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Avatar extends Component {
    render() {
    	const style = {
			width: '100px',
		};
        return (
            <div className='avatar'>
                <img style={style} src={this.props.src} />
            </div>
        );
    }
}

export default Avatar;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console 
if (document.getElementById('example')) {
    ReactDOM.render(<Avatar src="https://maxcdn.icons8.com/Share/icon/Cinema/avatar1600.png" />, document.getElementById('example'));
}