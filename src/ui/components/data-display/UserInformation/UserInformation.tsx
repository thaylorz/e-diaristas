import React, { FC } from "react";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Avatar, Rating } from "@material-ui/core";

interface UserInformationProps {
	picture: string;
	name: string;
	rating: number;
	description?: string;
}

const UserInformation: FC<UserInformationProps> = ({
	picture,
	name,
	rating,
	description,
}) => {
	return (
		<UserInformationContainer>
			<AvatarStyled src={picture}>{name[0]}</AvatarStyled>
			<UserName>{name}</UserName>
			<RationgStyled readOnly value={rating} />
			<UserDescription>{description}</UserDescription>
		</UserInformationContainer>
	);
};

const UserInformationContainer = styled("div")`
	display: grid;
	grid-template-columns: 60px 1fr;
	grid-template-rows: repeat(3, auto);
	grid-template-areas:
		"avatar name"
		"avatar rating"
		"avatar description";

	background-color: ${({ theme }) => theme.palette.grey[50]};
	padding: ${({ theme }) => theme.spacing(3)};
	align-items: center;
	gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(2)};
`;

const UserName = styled("div")`
	font-weight: bolder;
	color: ${({ theme }) => theme.palette.text.primary};
	font-size: ${({ theme }) => theme.typography.body2.fontSize};

	grid-area: name;
`;

const UserDescription = styled("div")`
	color: ${({ theme }) => theme.palette.text.secondary};
	font-size: ${({ theme }) => theme.typography.body2.fontSize};

	grid-area: description;
`;

const AvatarStyled = styled(Avatar)`
	grid-area: avatar;

	width: 100%;
	height: initial;
	aspect-ratio: 1;
`;

const RationgStyled = styled(Rating)`
	font-size: 14px;

	grid-area: rating;
`;

export default UserInformation;
