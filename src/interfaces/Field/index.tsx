import { FC } from 'react';
import styles from './Field.module.scss';

const Field: FC = ({ children }) => {
	return (
		<div className={styles.Field}>{children}</div>
	);
};

export default Field;
