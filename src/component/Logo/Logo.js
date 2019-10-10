import React from 'react';
import Tilt from 'react-tilt';
import computer from './computer.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 65 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3">
 					<img style={{paddingTop: '25px', paddingLeft: '5px'}} alt='logo' src={computer}/>
 				</div>
			</Tilt>
		</div>
	);
}

export default Logo;