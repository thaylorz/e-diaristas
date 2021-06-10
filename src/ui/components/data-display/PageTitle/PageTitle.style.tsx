import { experimentalStyled as styled } from "@material-ui/core/styles";

export const PageTitleContainer = styled("div")`
	text-align: center;
	margin: ${({ theme }) => theme.spacing(5) + " " + 0};
`;

export const PageTitleStyled = styled("h1")`
	margin: 0;
	color: ${({ theme }) => theme.palette.primary.main};
	font-size: ${({ theme }) => theme.typography.h2.fontSize};
	font-weight: 600;

	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.h3.fontSize};
	}
`;

export const PageSubTitleStyled = styled("h2")`
	margin: ${({ theme }) => theme.spacing(1.5) + " " + 0};
	color: ${({ theme }) => theme.palette.text.primary};
	font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
	font-weight: 400;

	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.subtitle2.fontSize};
	}
`;
