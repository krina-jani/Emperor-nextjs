import React from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  as: Component = 'div',
  className,
  ...props
}) => {
  return <Component className={cn('container', className)} {...props} />;
};

export default Container;
