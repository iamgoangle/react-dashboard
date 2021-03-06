import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import NavLink from '../NavLink';

class SingleMenu extends Component {
	constructor (props, context) {
		super(props, context);
	}

	static propType = {
		redirect: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		activeMenu: PropTypes.string,
		icon: PropTypes.string
	}

	// receive context
	static contextTypes = {
		appProps: PropTypes.object.isRequired,	// App.js
		setActiveMenuItem: PropTypes.func,	// LeftSideBar.js
		activeClass: PropTypes.string
	}

	render () {
		const icon = (typeof(this.props.icon) === 'undefined') ? 'fa fa-link' : this.props.icon;
		return (
			<li onClick={() => this.context.setActiveMenuItem(this.props.redirect)}
				className={(this.props.activeMenu === this.props.redirect) ? this.context.activeClass : ''}>
				<NavLink to={this.props.redirect}>
					<i className={icon}></i>
					<span>{this.props.title}</span>
				</NavLink>
			</li>
		)
	}
}

export default SingleMenu;
