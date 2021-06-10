import React from "react";
import { SafeEnviromentContainer } from "./SafeEnviroment.style";
import { Container } from "@material-ui/core";

const SafeEnviroment = () => {
	return (
		<Container>
			<SafeEnviromentContainer>Ambiente seguro</SafeEnviromentContainer>
		</Container>
	);
};

export default SafeEnviroment;
