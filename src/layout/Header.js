import React, { Component } from 'react';
import { Link } from "react-router-dom";
import classnames from 'classnames';

import MenuSvg from '../assets/menu.svg';

import './styles/header.css';

class Header extends Component {
	constructor(props, context) {
		super (props, context);
		this.state = {
			displayMenu: false
		};

		this.updateDisplayMenu = this.updateDisplayMenu.bind(this);
	}

	updateDisplayMenu() {
		this.setState({
			displayMenu: !this.state.displayMenu
		});
	}

	render() {
		return (
			<header className="header">
				<div className="header__logo-and-menu">
					<div className="header__logo-container">
						<span className="header__logo-left">The</span>
						<span className="header__logo-right">Siren</span>
					</div>
					<div className="header__menu-image-container" onClick={this.updateDisplayMenu}>
						<img src={MenuSvg} alt="Menu" srcset="" />
					</div>
				</div>
				<div className="header__navbar">
					<Link to="/"><span className="header__navbar-item">Home</span></Link>
					<Link to="/array"><span className="header__navbar-item">Array</span></Link>
					<Link to="/linklist"><span className="header__navbar-item">Linklist</span></Link>
					<Link to="/searching"><span className="header__navbar-item">Searching</span></Link>
					<Link to="/recursion"><span className="header__navbar-item">Recursion</span></Link>
				</div>
				<div className={classnames("header__navbar-mobile", {
					"header__navbar-mobile--active": this.state.displayMenu
				})}>
					<Link to="/"><span className="header__navbar-item">Home</span></Link>
					<div className="header__horizontal-ruler"></div>
					<Link to="/array"><span className="header__navbar-item">Array</span></Link>
					<div className="header__horizontal-ruler"></div>
					<Link to="/linklist"><span className="header__navbar-item">Linklist</span></Link>
					<div className="header__horizontal-ruler"></div>
					<Link to="/searching"><span className="header__navbar-item">Searching</span></Link>
					<div className="header__horizontal-ruler"></div>
					<Link to="/recursion"><span className="header__navbar-item">Recursion</span></Link>
				</div>
				<div className="header__horizontal-ruler"></div>
			</header>
		)
	}
}

export default Header;