import * as React from 'react';
import { ViewStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import { TYPOGRAPHY } from '../../styles/typography';
import * as CategoryIcons from './category';

interface Props {
  style?: ViewStyle;
  color?: string;
}

export const SVGDefaultProps: Props = {
  style: { width: 26, height: 26 },
  color: TYPOGRAPHY.COLOR.DefaultSelected,
};

const Search = ({ style, color }: Props) => {
  return (
    <Svg viewBox="0 0 30 30" style={style} >
      <Path
        fill={color}
        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
      />
    </Svg>
  );
};
Search.defaultProps = SVGDefaultProps;

const Camera = ({ style, color = TYPOGRAPHY.COLOR.Primary }: Props) => {
  return (
    <Svg viewBox="0 0 48 48" style={style}>
      <Path
        fill={color}
        d="M 20.472656 5 C 18.87426 5 17.390847 5.8519349 16.585938 7.2324219 L 14.388672 11 L 10.5 11 C 6.9280619 11 4 13.928062 4 17.5 L 4 36.5 C 4 40.071938 6.9280619 43 10.5 43 L 37.5 43 C 41.071938 43 44 40.071938 44 36.5 L 44 17.5 C 44 13.928062 41.071938 11 37.5 11 L 33.611328 11 L 31.414062 7.2324219 C 30.609153 5.8519349 29.12574 5 27.527344 5 L 20.472656 5 z M 20.472656 8 L 27.527344 8 C 28.062947 8 28.553175 8.2826276 28.822266 8.7441406 L 31.455078 13.255859 A 1.50015 1.50015 0 0 0 32.75 14 L 37.5 14 C 39.450062 14 41 15.549938 41 17.5 L 41 36.5 C 41 38.450062 39.450062 40 37.5 40 L 10.5 40 C 8.5499381 40 7 38.450062 7 36.5 L 7 17.5 C 7 15.549938 8.5499381 14 10.5 14 L 15.25 14 A 1.50015 1.50015 0 0 0 16.544922 13.255859 L 19.177734 8.7441406 C 19.446825 8.2826276 19.937053 8 20.472656 8 z M 24 17 C 19.047202 17 15 21.047206 15 26 C 15 30.952794 19.047202 35 24 35 C 28.952798 35 33 30.952794 33 26 C 33 21.047206 28.952798 17 24 17 z M 24 20 C 27.331479 20 30 22.668523 30 26 C 30 29.331477 27.331479 32 24 32 C 20.668521 32 18 29.331477 18 26 C 18 22.668523 20.668521 20 24 20 z"
      />
    </Svg>
  );
};
Camera.defaultProps = SVGDefaultProps;

export default {
  Search,
  Camera,
  CategoryIcons,
};
