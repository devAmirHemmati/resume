import { VFC } from 'react';
import {
	ContactInformation,
	ContactSendMessage,
} from '../components/Contact';
import { DUMMY_CONTACT } from '../constant/DUMMY/contact';

const Contact: VFC = () => {
	return (
		<div>
			<div>
				<ContactInformation
					email={DUMMY_CONTACT.links.email}
					firstPhoneNumber={
						DUMMY_CONTACT.links.firstPhoneNumber
					}
					github={DUMMY_CONTACT.links.github}
					instagram={
						DUMMY_CONTACT.links.instagram
					}
					linkedin={DUMMY_CONTACT.links.linkedin}
					secondPhoneNumber={
						DUMMY_CONTACT.links.secondPhoneNumber
					}
					telegram={DUMMY_CONTACT.links.telegram}
					virgool={DUMMY_CONTACT.links.virgool}
					whatsapp={DUMMY_CONTACT.links.whatsapp}
				/>
			</div>

			<div style={{ marginTop: 30 }}>
				<ContactSendMessage />
			</div>
		</div>
	);
};

export default Contact;
