import * as React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { GLOBAL } from '../../styles/global';
import locale from '../../../constants/locale';
import { ListItem } from '../../elements/layout';
import UserProfile from '../../widgets/profile';

export interface Props {
  componentId: string;
}

const Settings: React.FC<Props> = ({ componentId }: Props) => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    <UserProfile componentId={componentId} />
    <ScrollView style={GLOBAL.LAYOUT.pageContainer} showsHorizontalScrollIndicator={false}>
      <ListItem title={'Edit Profile'} image={require('../../assets/images/edit.png')} />
      <ListItem title={'Shipping Address'} image={require('../../assets/images/delivery.png')} />
      <ListItem title={'Wishlist'} showBadge={true} text={locale.New} image={require('../../assets/images/wishlist.png')} />
      <ListItem title={'Order History'} image={require('../../assets/images/order.png')} />
      <ListItem title={'Edit Profile'} image={require('../../assets/images/edit.png')} />
      <ListItem title={'Shipping Address'} showBadge={true} text={locale.Checkout} image={require('../../assets/images/delivery.png')} />
      <ListItem title={'Wishlist'} image={require('../../assets/images/wishlist.png')} />
      <ListItem title={'Order History'} image={require('../../assets/images/order.png')} />
    </ScrollView>
  </SafeAreaView>
);

export default Settings;
