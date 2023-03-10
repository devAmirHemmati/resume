import { VFC, useState, useEffect } from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import {
	useDispatch,
	useSelector,
} from 'react-redux';
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
import { useGetUserInformation } from '../../hooks';
import Utilities from '../../Services/Utilities';
import { SplashScreen } from '..';

const Aside: VFC = () => {
	const dispatch = useDispatch();
	const {
		profile,
		language,
		skill,
		social,
		knowledge,
	} = useGetUserInformation();
	const userInformationLoading = useSelector<
		ISelectorState,
		boolean
	>(
		(store) =>
			store.UserInformationReducer.loading,
	);

	const activeAside = useSelector<
		ISelectorState,
		boolean
	>((store) => store.AsideReducer.active);
	const [isShowData, setIsShowData] =
		useState<boolean>(false);
	const [description, setDescription] =
		useState('');

	useEffect(() => {
		setTimeout(() => {
			setIsShowData(true);
		}, 650);
	}, []);

	useEffect(() => {
		setDescription(profile.description);
	}, [profile.description]);

	const AsideHeader = () => {
		const clickLinkHandler = (): void => {
			dispatch(deActiveAside());
			dispatch(deActiveNavbar());
		};

		return (
			<div className={styles.AsideHeader}>
				<div className="avatar-image">
					<Avatar
						src={profile.small_avatar}
						alt="avatar"
					/>
				</div>

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
					?????????? ?????????? ????
					<br />
					???????????? ????????
				</Typography>
			</div>
		);
	};

	const AsideDescription = () => {
		return (
			<div className={styles.AsideDescription}>
				{typeof profile.description ===
					'string' && (
					<div
						className={
							styles.AsideDescriptionItem
						}
					>
						<Collapse isOpened={isShowData}>
							<Typography
								dangerouslySetInnerHTML={{
									__html: description.replace(
										/\n/g,
										'<br />',
									),
								}}
								noneSelection
							/>
						</Collapse>
					</div>
				)}

				<div
					className={styles.AsideDescriptionItem}
				>
					<ListQAA
						question="?????? ??????????"
						answer={profile.country}
					/>

					<ListQAA
						question="??????"
						answer={profile.city}
					/>

					<ListQAA
						question="????"
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
							<div
								className={
									styles.AsideDescriptionItemLanguagesItem
								}
								key={key}
							>
								<CircleProgress
									text={languageItem.title}
									value={parseInt(
										languageItem.percent,
									)}
								/>
							</div>
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
						href={profile.resume_file}
						download="resume.pdf"
						target="_blank"
					>
						???????????? ??????????
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
			<SplashScreen
				isOpened={!userInformationLoading}
			/>

			{!userInformationLoading && AsideHeader()}

			{!userInformationLoading &&
				AsideDescription()}

			{!userInformationLoading && AsideFooter()}
		</aside>
	);
};

export default Aside;
