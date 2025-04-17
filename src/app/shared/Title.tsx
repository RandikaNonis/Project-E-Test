import React from 'react';
import styles from '../styles/Title.module.css';
import '../../index.css';

interface TitleProps {
  mainText: string;
  highlightText: string;
  highlightTextColor: string;
}

const Title: React.FC<TitleProps> = ({
  mainText,
  highlightText,
  highlightTextColor,
}) => {
  const colorClassName = `color-${highlightTextColor.replace('#', '')}`;

  return (
    <p className={styles.title}>
      {mainText}
      <span className={`${styles.highlightText} ${colorClassName}`}>{highlightText}</span>
    </p>
  );
};

export default Title;
