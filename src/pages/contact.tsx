import { NextPage } from 'next';
import { APIGetContact } from '../Api/Contact';
import {
	ContactInformation,
	ContactSendMessage,
} from '../components/Contact';
import { DUMMY_CONTACT } from '../constant/DUMMY/contact';
import { useGetUserInformation } from '../hooks';
import { IContactPageProps } from './../pages-types';

const Contact: NextPage<IContactPageProps> = ({
	information,
}) => {
	const { profile } = useGetUserInformation();

	return (
		<div>
			<div>
				<ContactInformation
					email={{
						name: profile.email.split('@')[0],
						href: profile.email,
					}}
					firstPhoneNumber={{
						name: information.first_phone_number,
						href: information.first_phone_number,
					}}
					github={{
						name: 'devAmirHemmati@',
						href: information.github,
					}}
					instagram={{
						name: 'devAmirHemmati@',
						href: information.instagram,
					}}
					linkedin={{
						name: 'devAmirHemmati@',
						href: information.linkedin,
					}}
					secondPhoneNumber={{
						name: information.second_phone_number,
						href: information.second_phone_number,
					}}
					telegram={{
						name: 'devAmirHemmati@',
						href: information.instagram,
					}}
					virgool={{
						name: 'devAmirHemmati@',
						href: information.virgool,
					}}
					whatsapp={{
						name: 'whatsapp link',
						href: information.whatsapp,
					}}
				/>
			</div>

			<div style={{ marginTop: 30 }}>
				<ContactSendMessage />
			</div>
		</div>
	);
};

Contact.getInitialProps = async () => {
	const response = await APIGetContact();

	return {
		information: response[0],
	};
};

export default Contact;
