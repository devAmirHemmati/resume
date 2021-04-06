import { VFC, useState, useEffect } from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import {
	useDispatch,
	useSelector,
} from 'react-redux';
import { SRLWrapper } from 'simple-react-lightbox';
import { Collapse } from 'react-collapse';

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
import { deActiveAside } from '../../store/reducers/Aside/actions';
import { deActiveNavbar } from '../../store/reducers/Navbar/actions';
import { lightBoxOptions } from '../../options';

const Aside: VFC = () => {
	const dispatch = useDispatch();

	const activeAside = useSelector<
		ISelectorState,
		boolean
	>((store) => store.AsideReducer.active);
	const [
		isShowData,
		setIsShowData,
	] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setIsShowData(true);
		}, 650);
	}, []);

	const AsideHeader = () => {
		const clickLinkHandler = (): void => {
			dispatch(deActiveAside());
			dispatch(deActiveNavbar());
		};

		return (
			<div className={styles.AsideHeader}>
				<SRLWrapper options={lightBoxOptions}>
					<div className="avatar-image">
						<a href="http://mimwp.com/theme/arter/demo/light/wp-content/uploads/2020/09/face-1.jpg">
							<Avatar
								src="http://mimwp.com/theme/arter/demo/light/wp-content/uploads/2020/09/face-1.jpg"
								alt="avatar"
							/>
						</a>
					</div>
				</SRLWrapper>

				<Typography
					component="Link"
					href="/"
					fontFamily="mikhak"
					variant="TextLarge"
					color="Dark"
					decoration="None"
					hoverColor="Danger"
					onClick={clickLinkHandler}
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
					<Collapse isOpened={isShowData}>
						<Typography noneSelection>
							امیررضا همتی هستم، برنامه نویس ریکت
							جی اس. شدیدا علاقمند به یادگیری
							مباحث برنامه نویسی. هرروز تلاش میکنم
							تا علم خود را در برنامه نویسی بیشتر
							و بیشتر کنم
						</Typography>
					</Collapse>
				</div>

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
