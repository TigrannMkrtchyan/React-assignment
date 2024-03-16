import React from 'react';
import RoomIcon from '@mui/icons-material/Room';

import { MapMarker } from './type';
import styles from './index.module.scss';

const MapMarker: React.FC<MapMarker> = ({ sequenceNumber, currentDeliveredNumber }) => {
  return (
    <div className={styles.container}>
      <RoomIcon className={styles.icon} />
      <div
        className={`${styles.number} ${
          currentDeliveredNumber > sequenceNumber ? styles.correctNumber : ''
        }`}
      >
        {sequenceNumber}
      </div>
    </div>
  );
};

export default MapMarker;
