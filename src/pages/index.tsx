import Head from "next/head";
import SafeEnviroment from "ui/components/feedback/SafeEnviroment/SafeEnviroment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
	return (
		<div>
			<SafeEnviroment />
			<PageTitle
				title={"Conheça os profissionais"}
				subtitle={
					"Preencha seu endereço e veja todos os profissionais da sua localidade."
				}
			/>
			<UserInformation
				name={"Thaylor Santos"}
				picture={"https://github.com/thaylorz.png"}
				rating={5}
				description={"Santa Catarina"}
			/>
			<UserInformation
				name={"Thaylor Santos"}
				picture={"https://github.com/thaylorz.png"}
				rating={5}
				description={"Santa Catarina"}
			/>
			<UserInformation
				name={"Thaylor Santos"}
				picture={"https://github.com/thaylorz.png"}
				rating={5}
				description={"Santa Catarina"}
			/>
			<UserInformation
				name={"Thaylor Santos"}
				picture={"https://github.com/thaylorz.png"}
				rating={5}
				description={"Santa Catarina"}
			/>
		</div>
	);
}
