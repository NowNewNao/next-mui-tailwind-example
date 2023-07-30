'use client';

import React, { FC } from 'react';
import { Card, CardActionArea, CardContent } from '@mui/material';
import {
  StyledNavigationCard,
  StyledNavigationCardTitle,
} from '@/app/components/Card/NavigationCard.styled';

type NavigationCardProps = {
  title: string;
};

export const NavigationCard: FC<NavigationCardProps> = ({ title }) => (
  <StyledNavigationCard>
    <CardActionArea>
      <CardContent>
        <StyledNavigationCardTitle>
          {title}{' '}
          <span className='inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none'>
            -&gt;
          </span>
        </StyledNavigationCardTitle>
      </CardContent>
    </CardActionArea>
  </StyledNavigationCard>
);
