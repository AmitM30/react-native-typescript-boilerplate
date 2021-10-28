import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { CText, CTextPrice } from '../../elements/inputs';
import { BUTTON_PRIMARY, BUTTON_SECONDARY } from '../../elements/buttons';

interface Props {
  componentId: string;
  rightButtonText: string;
  onSubmitRight: () => void;
  style?: StyleProp<ViewStyle>;
}

interface LeftButtonProps {
  title: string;
  onSubmitLeft: () => void;
}

type leftColumnProps =
  | { price: number; priceText: string; text?: never }
  | { text: string; priceText?: never; price?: never }

type showLeftButtonProps =
  | { showLeftButton?: false; left: leftColumnProps, leftButton?: never }
  | { showLeftButton: true; left?: never, leftButton: LeftButtonProps }

const BottomControl: React.FC<Props & showLeftButtonProps> = (props: Props & showLeftButtonProps) => {
  const {
    left, showLeftButton = false, onSubmitRight, leftButton, rightButtonText
  } = props;

  const renderPrice = () => !showLeftButton && left?.price && (
    <View style={GLOBAL.LAYOUT.column}>
      <CText style={GLOBAL.FONTS.body}>{left.priceText.toUpperCase()}</CText>
      <CTextPrice>{`$${left.price}`}</CTextPrice>
    </View>
  );

  const renderText = () => !showLeftButton && left?.text && (
    <View style={GLOBAL.LAYOUT.column}>
      <CText style={GLOBAL.FONTS.subTitle}>{left.text}</CText>
    </View>
  );

  return (
    <View style={[GLOBAL.LAYOUT.row, GLOBAL.ELEMENTS.BottomControl, props.style]}>
      {showLeftButton && leftButton && (
        <BUTTON_SECONDARY
          style={GLOBAL.ELEMENTS.BottomControlButton}
          title={leftButton.title}
          onClick={leftButton.onSubmitLeft} 
        />
      )}
      {renderPrice()}
      {renderText()}
      <BUTTON_PRIMARY
        style={GLOBAL.ELEMENTS.BottomControlButton}
        title={rightButtonText}
        onClick={onSubmitRight}
      />
    </View>
  );
};

export default BottomControl;
