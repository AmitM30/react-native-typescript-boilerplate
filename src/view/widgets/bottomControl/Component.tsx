import * as React from 'react';
import { View } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { Card } from '../../elements/layout';
import locale from '../../../constants/locale';
import { CText, CTextPrice } from '../../elements/inputs';
import { BUTTON_PRIMARY, BUTTON_SECONDARY } from '../../elements/buttons';

interface Props {
  componentId: string;
  rightButtonText: string;
  onSubmitRight: () => void;
}

interface LeftButtonProps {
  title: string;
  onSubmitLeft: () => void;
}

type leftColumnProps =
  | { price: number; text?: never }
  | { text: string; price?: never }

type showLeftButtonProps =
  | { showLeftButton?: false; left: leftColumnProps, leftButton?: never }
  | { showLeftButton: true; left?: never, leftButton: LeftButtonProps }

const BottomControl: React.FC<Props & showLeftButtonProps> = (props: Props & showLeftButtonProps) => {
  const {
    left, showLeftButton = false, onSubmitRight, leftButton, rightButtonText
  } = props;

  const renderPrice = () => !showLeftButton && left?.price && (
    <View style={GLOBAL.LAYOUT.column}>
      <CText style={GLOBAL.FONTS.body}>{locale.Price.toLocaleUpperCase()}</CText>
      <CTextPrice>{`$${left.price}`}</CTextPrice>
    </View>
  );

  const renderText = () => !showLeftButton && left?.text && (
    <View style={GLOBAL.LAYOUT.column}>
      <CText style={GLOBAL.FONTS.subTitle}>{left.text}</CText>
    </View>
  );

  return (
    <Card style={[GLOBAL.LAYOUT.row, GLOBAL.ELEMENTS.BottomControl]}>
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
    </Card>
  );
};

export default BottomControl;
