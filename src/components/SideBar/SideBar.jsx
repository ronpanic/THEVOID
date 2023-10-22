import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SideBar.css"

const SideBar = () => {
	const [isExpanded, setExpandState] = useState(false);
	const menuItems = [
		{
			text: "Cart",
			icon: "image/cart.svg",
		},
		{
			text: "Brand",
			icon: "image/earth.svg",
			to: "/brand", 
		},
		{
			text: "Help",
			icon: "image/help.svg",
			to: "/formcontact", 
		},
		{
			text: "Settings",
			icon: "image/settings.svg",
		},
	];

	return (
		<div
			className={
				isExpanded ? "side-nav-container" : "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<Link className='link-home' to="/"> {}
								<h2>THE VOID CODER</h2>
							</Link>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpandState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon, to }, index) => (
						<Link
							key={index}
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							to={to}
						>
							<img className="menu-item-icon" src={icon} alt="" srcSet={""} />
							{isExpanded && <p>{text}</p>}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default SideBar;
