import React from "react";
import { experimentalStyled as styled } from "@material-ui/core/styles";

interface PageTitleProps {
	title: string;
	subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
	return (
		<PageTitleContainer>
			<PageTitleStyled>{props.title}</PageTitleStyled>
			<PageSubTitleStyled>{props.subtitle}</PageSubTitleStyled>
		</PageTitleContainer>
	);
};

const PageTitleContainer = styled("div")`
	text-align: center;
	margin: ${({ theme }) => theme.spacing(5)} 0;
`;

const PageTitleStyled = styled("h1")`
	margin: 0;
	color: ${({ theme }) => theme.palette.primary.main};
	font-size: ${({ theme }) => theme.typography.h2.fontSize};
	font-weight: 600;

	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.h3.fontSize};
	}
`;

const PageSubTitleStyled = styled("h2")`
	margin: ${({ theme }) => theme.spacing(1.5)} 0;
	color: ${({ theme }) => theme.palette.text.primary};
	font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
	font-weight: normal;

	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.subtitle2.fontSize};
	}
`;

export default PageTitle;
