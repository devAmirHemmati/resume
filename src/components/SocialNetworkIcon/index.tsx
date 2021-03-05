import { VFC } from 'react';
import Tooltip from 'rc-tooltip';
import { Typography } from '..';
import { ISocialNetworkItemProps } from './types';
import styles from './SocialNetworkIcon.module.scss';

const SocialNetworkIcon: VFC<ISocialNetworkItemProps> = ({
	Icon,
	url,
	title,
	...rest
}) => {
	return (
		<Typography
			component="a"
			hoverColor="Dark"
			href={url}
			target="_blank"
			{...(rest as any)}
			className={styles.SocialNetworkIcon}
		>
			<Tooltip
				placement="top"
				overlay={<span>{title}</span>}
			>
				<Icon size="20px" />
			</Tooltip>
		</Typography>
	);
};

export default SocialNetworkIcon;
