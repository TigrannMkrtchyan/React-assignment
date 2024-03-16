import React, { HTMLAttributes } from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import styles from './index.module.scss';

const Button: React.FC<HTMLAttributes<HTMLDivElement>> = ({ onClick }) => {
  return (
    <div className={styles.main} onClick={onClick}>
      <DoneAllIcon className={styles.icon} /> <p>Complete</p>
    </div>
  );
};

export default Button;
