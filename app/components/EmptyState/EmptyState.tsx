import React, { useState } from 'react';
import styles from './EmptyState.module.css';
import Image from 'next/image';
const EmptyState = () => {
  return (
    <div className={styles.emptyStateWrapper}>
      <Image width={'213'} height={'230'} src={'./images/emptyState.svg'} alt={'empty'} />
      <div className={styles.emptyStateText}> No results</div>
    </div>
  );
};
export default EmptyState;
