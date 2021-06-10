import React from "react";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";

const Header: React.FC = () => {
	return (
		<HeaderAppBar position={"sticky"}>
			<Toolbar></Toolbar>
		</HeaderAppBar>
	);
};

const HeaderAppBar = styled(AppBar)``;

const HeaderLogo = styled()``;

export default Header;
