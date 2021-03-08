import { VFC } from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {
	Avatar,
	ListQAA,
	SocialNetworkIcon,
	Typography,
	CircleProgress,
	Progress,
	ListItem,
} from '../../interfaces';
import DUMMY_LANGUAGES from '../../constant/DUMMY/languages';
import DUMMY_LIST_SKILLS from '../../constant/DUMMY/listSkills';
import DUMMY_SKILLS from '../../constant/DUMMY/skills';
import DUMMY_SOCIALS from '../../constant/DUMMY/socials';
import ISelectorState from '../../store/@types';
import styles from './Aside.module.scss';

const Aside: VFC = () => {
	const activeAside = useSelector<
		ISelectorState,
		boolean
	>((store) => store.AsideReducer.active);

	const AsideHeader = () => {
		return (
			<div className={styles.AsideHeader}>
				<Avatar
					src="http://mimwp.com/theme/arter/demo/light/wp-content/uploads/2020/09/face-1.jpg"
					alt="avatar"
				/>

				<Typography
					component="Link"
					href="/"
					fontFamily="mikhak"
					variant="TextLarge"
					color="Dark"
					decoration="None"
					hoverColor="Danger"
					noneSelection
				>
					امیررضا همتی
				</Typography>

				<Typography
					component="p"
					variant="TextSmall"
					align="Center"
					noneSelection
				>
					توسعه دهنده وب
					<br />
					برنامه نویس
				</Typography>
			</div>
		);
	};

	const AsideDescription = () => {
		return (
			<div className={styles.AsideDescription}>
				<div
					className={styles.AsideDescriptionItem}
				>
					<ListQAA
						question="محل سکونت"
						answer="ایران"
					/>

					<ListQAA
						question="شهر"
						answer="شیراز"
					/>

					<ListQAA question="سن" answer="۱۸" />
				</div>

				<div
					className={styles.AsideDescriptionItem}
				>
					<div
						className={
							styles.AsideDescriptionItemLanguages
						}
					>
						{DUMMY_LANGUAGES.map(
							(language, key) => (
								<CircleProgress
									key={key}
									text={language.text}
									value={language.value}
								/>
							),
						)}
					</div>
				</div>

				<div
					className={styles.AsideDescriptionItem}
				>
					<div
						className={
							styles.AsideDescriptionItemSkills
						}
					>
						{DUMMY_SKILLS.map((skill, key) => (
							<div key={key}>
								<Progress
									text={skill.text}
									value={skill.value}
								/>
							</div>
						))}
					</div>
				</div>

				<div
					className={styles.AsideDescriptionItem}
				>
					{DUMMY_LIST_SKILLS.map((item, key) => (
						<ListItem key={key}>
							{item.text}
						</ListItem>
					))}
				</div>

				<div
					className={`${styles.AsideDescriptionItem} ${styles.AsideDescriptionItemResumeLink}`}
				>
					<Typography
						component="a"
						variant="LinkSmall"
						hoverColor="Dark"
						href="https://google.com"
						target="_blank"
					>
						دانلود رزومه
						<FaCloudDownloadAlt />
					</Typography>
				</div>
			</div>
		);
	};

	const AsideFooter = () => {
		return (
			<div className={styles.AsideFooter}>
				{DUMMY_SOCIALS.map((item, key) => (
					<SocialNetworkIcon
						Icon={item.Icon}
						title={item.title}
						url={item.url}
						key={key}
					/>
				))}
			</div>
		);
	};

	return (
		<aside
			className={`${styles.Aside} ${
				activeAside ? styles.AsideActive : ''
			}`}
		>
			{AsideHeader()}

			{AsideDescription()}

			{AsideFooter()}
		</aside>
	);
};

export default Aside;
