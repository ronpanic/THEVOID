import React, { useState } from 'react';
import "./SideBar.css"

const SideBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Cart",
			icon: "image/cart.svg",
		},
		{
			text: "Brand",
			icon: "image/earth.svg",
		},
		{
			text: "Help",
			icon: "image/help.svg",
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
							<h2>THE VOID CODER</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
                {menuItems.map(({ text, icon }, index) => (
                    <a
                        key={index} 
                        className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
                        href="#"
                    >
                        <img className="menu-item-icon" src={icon} alt="" srcSet={""} />
                        {isExpanded && <p>{text}</p>}
                    </a>
                ))}
				
				

				</div>
			</div>
		</div>
	);
};

export default SideBar
