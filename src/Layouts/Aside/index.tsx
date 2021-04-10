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
import ISelectorState from '../../store/@types';
import styles from './Aside.module.scss';
import { deActiveAside } from '../../store/reducers/Aside/actions';
import { deActiveNavbar } from '../../store/reducers/Navbar/actions';
import { lightBoxOptions } from '../../options';
import { useGetUserInformation } from '../../hooks';
import Utilities from '../../Services/Utilities';

const Aside: VFC = () => {
	const dispatch = useDispatch();
	const {
		profile,
		language,
		skill,
		social,
		knowledge,
	} = useGetUserInformation();

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
						<a href={profile.normal_avatar}>
							<Avatar
								src={profile.small_avatar}
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
					{profile.firstname} {profile.lastname}
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
						answer={profile.country}
					/>

					<ListQAA
						question="شهر"
						answer={profile.city}
					/>

					<ListQAA
						question="سن"
						answer={profile.age}
					/>
				</div>

				<div
					className={styles.AsideDescriptionItem}
				>
					<div
						className={
							styles.AsideDescriptionItemLanguages
						}
					>
						{language.map((languageItem, key) => (
							<CircleProgress
								key={key}
								text={languageItem.title}
								value={parseInt(
									languageItem.percent,
								)}
							/>
						))}
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
						{skill.map((skillItem, key) => (
							<div key={key}>
								<Progress
									text={skillItem.title}
									value={parseInt(
										skillItem.percent,
									)}
								/>
							</div>
						))}
					</div>
				</div>

				<div
					className={styles.AsideDescriptionItem}
				>
					{knowledge.map((item, key) => (
						<ListItem key={key}>
							{item.value}
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
				{social.map((item, key) => (
					<SocialNetworkIcon
						Icon={Utilities.getIconWihName(
							Utilities.getSocialNameInLink(
								item.link,
							).name,
						)}
						title={item.title}
						url={item.link}
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
