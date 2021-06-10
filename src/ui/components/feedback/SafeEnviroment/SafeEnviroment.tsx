import React from "react";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const SafeEnviroment = () => {
	return (
		<Container>
			<SafeEnviromentContainer>
				Ambiente seguro <i className={"twf-lock"}></i>
			</SafeEnviromentContainer>
		</Container>
	);
};

const SafeEnviromentContainer = styled("div")`
	color: ${({ theme }) => theme.palette.text.secondary};
	background-color: ${({ theme }) => theme.palette.background.default};
	text-align: right;
	padding: ${({ theme }) => theme.spacing(2)} 0;
	font-size: 12px;
`;

export default SafeEnviroment;
