'use client';
import React, { useMemo } from 'react';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useDelivery } from '@/hooks/useDelivery';
import Button from '../button';
import { CardProps } from './type';

import styles from './index.module.scss';

const Card: React.FC<CardProps> = ({ card }) => {
  const { deliveredSequence, completeDelivery } = useDelivery();
  const isSequenceEqual = useMemo(
    () => deliveredSequence === card.sequence_number,
    [deliveredSequence, card]
  );

  return (
    <div
      className={`${styles.mainContainer} ${
        deliveredSequence > card.sequence_number
          ? styles.passedContainer
          : isSequenceEqual
          ? styles.currentContainer
          : ''
      }`}
    >
      {isSequenceEqual && <div className={styles.chosenIcon} />}
      <div className={styles.firstSection}>
        <div className={styles.streetContainer}>
          <div className={styles.number}>{card.sequence_number}</div>
          <h1>{card.street}</h1>
        </div>
        <h1>{card.eta}</h1>
      </div>
      <div className={styles.secondSection}>
        <p>
          {card.zip} {card.city}
        </p>
        <p>{card.time_window}</p>
      </div>
      {isSequenceEqual && (
        <div className={styles.actionsContainer}>
          <a
            className={styles.directionContainer}
            href={`https://www.google.com/maps/dir/?api=1&destination=${card.lat},${card.lng}`}
            target='_blank'
          >
            <DirectionsIcon className={styles.icon} />
          </a>
          <Button onClick={completeDelivery} />
        </div>
      )}
    </div>
  );
};

export default Card;
