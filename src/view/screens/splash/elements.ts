import styled from 'styled-components/native';
import { TYPOGRAPHY } from '../../styles/typography';

export const SplashView = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${TYPOGRAPHY.COLOR.Default};
`;

export const SplashImage = styled.Image`
  width: 70%;
`;
