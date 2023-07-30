import styled from 'styled-components';
import { Card, Typography } from '@mui/material';
import { fontSizes, spacings } from '@/app/styles';

export const StyledNavigationCard = styled(Card)`
  border: 1px solid transparent;
  border-radius: 0.5rem;
  transition-property: color, border, background-color;
  transition-duration: 0.2s;

  :hover {
    border-color: #d1d5db;
    background-color: #f3f4f6;
  }

  @media (prefers-color-scheme: dark) {
    :hover {
      border-color: #4b5563;
      background-color: #2d3748;
    }
  }
`;

export const StyledNavigationCardTitle = styled.h2`
  margin-bottom: ${spacings.md};
  font-size: ${fontSizes.lg};
  font-weight: 600;
`;
