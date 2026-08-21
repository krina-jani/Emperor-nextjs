'use client';

import React, { useState } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '../../lib/utils';
import styles from './Image.module.css';

interface ImageProps extends Omit<NextImageProps, 'src'> {
  src: string;
  fallbackText?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  fallbackText,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate a premium CSS gradient based on the alt text to ensure visual aesthetics
  const getGradientClass = () => {
    const chars = alt.charCodeAt(0) + (alt.charCodeAt(1) || 0);
    if (chars % 3 === 0) return styles.gradient1;
    if (chars % 3 === 1) return styles.gradient2;
    return styles.gradient3;
  };

  return (
    <div className={cn(styles.imageWrapper, className)}>
      {!isLoaded && !hasError && <div className={styles.skeleton} />}
      
      {hasError ? (
        <div className={cn(styles.fallback, getGradientClass())}>
          <div className={styles.fallbackOverlay} />
          <span className={styles.fallbackTitle}>{fallbackText || alt}</span>
        </div>
      ) : (
        <NextImage
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            styles.image,
            isLoaded ? styles.loaded : styles.loading
          )}
          {...props}
        />
      )}
    </div>
  );
};

export default Image;
