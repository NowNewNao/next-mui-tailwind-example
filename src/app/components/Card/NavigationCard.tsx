'use client';

import React, { FC } from 'react';
import { Card, CardActionArea, CardContent } from '@mui/material';
import {
  StyledNavigationCard,
  StyledNavigationCardDescription,
  StyledNavigationCardTitle,
} from '@/app/components/Card/NavigationCard.styled';

type NavigationCardProps = {
  title: string;
  description: string;
};

export const NavigationCard: FC<NavigationCardProps> = ({
  title,
  description,
}) => (
  <StyledNavigationCard>
    <CardActionArea>
      <CardContent>
        <StyledNavigationCardTitle>
          {title}{' '}
          <span className='inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none'>
            -&gt;
          </span>
        </StyledNavigationCardTitle>
        <StyledNavigationCardDescription>
          {description}
        </StyledNavigationCardDescription>
      </CardContent>
    </CardActionArea>
  </StyledNavigationCard>
);
