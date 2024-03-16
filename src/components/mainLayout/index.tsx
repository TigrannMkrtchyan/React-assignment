'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MapIcon from '@mui/icons-material/Map';
import { paths } from '@/utils/constants';

import styles from './index.module.scss';

const MainLayout: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Link href={paths.HOME}>
          <LocalShippingIcon
            className={`${styles.icon} ${
              pathname === paths.HOME ? styles.filledIcon : ''
            }`}
          />
        </Link>
        <Link href={paths.MAP}>
          <MapIcon
            className={`${styles.icon} ${
              pathname === paths.MAP ? styles.filledIcon : ''
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default MainLayout;
