import React from 'react';
import './style.css';

class Header extends React.Component {
	render() {
		return (
			<div className="header-button">
				<h2>{this.props.title}</h2>
			</div>
		)
	}
}

export default Header;