import React, { FC } from "react";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { AppBar, Toolbar, Container } from "@material-ui/core";

const Header: FC = () => {
	return (
		<HeaderAppBar position={"sticky"}>
			<Toolbar component={Container}>
				<HeaderLogo src={"/img/logos/logo.svg"} alt={""}></HeaderLogo>
			</Toolbar>
		</HeaderAppBar>
	);
};

const HeaderAppBar = styled(AppBar)`
	background-color: ${({ theme }) => theme.palette.background.paper};
	box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

	${({ theme }) => theme.breakpoints.up("md")} {
		.MuiToolbar-root {
			height: 100px;
		}
	}

	${({ theme }) => theme.breakpoints.down("md")} {
		.MuiToolbar-root {
			display: flex;
			justify-content: center;
		}
	}
`;

const HeaderLogo = styled("img")`
	height: 25px;

	${({ theme }) => theme.breakpoints.up("md")} {
		height: 47px;
	}
`;

export default Header;
