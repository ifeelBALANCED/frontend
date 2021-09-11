import React from 'react';
import styled from 'styled-components';
import { theme } from '@box/lib/theme';

import { Text } from '../atoms';
import { iconClose } from '../icons';

interface ChipProps {
  label: string;
  onRemove: () => void;
}
export const Chip: React.FC<ChipProps> = ({ onRemove, label }) => {
  return (
    <ChipStyled>
      <Text>{label}</Text>
      <CloseButton onClick={onRemove}>
        <img src={iconClose} alt="remove tag" />
      </CloseButton>
    </ChipStyled>
  );
};

const CloseButton = styled.button`
  border-radius: 50%;
  border: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${theme.palette.bnw900});
`;

const ChipStyled = styled.div`
  background-color: var(${theme.palette.bnw800});
  padding: ${theme.spacing(1, 1, 1, 2)};
  border-radius: ${theme.spacing()};
  display: grid;
  grid-template-columns: repeat(2, min-content);
  align-items: center;
  grid-gap: ${theme.spacing()};
  margin: ${theme.spacing(2, 0, 0, 2)};
`;