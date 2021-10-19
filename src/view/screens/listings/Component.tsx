import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView, ScrollView } from 'react-native';

import { Props } from './index';
import { GLOBAL } from '../../styles/global';
import ProductDisplay from '../../widgets/productDisplay/Component';
import { SearchResponse } from '../../../../shared/redux/types/search/ISearchResponse';

const Listings: React.FC<Props> = ({ componentId, search, query }: Props) => {
  const [result, setResult] = React.useState<SearchResponse>({ results: [] });
  const backNavigation = () => {
    Navigation.popToRoot(componentId);
  };

  React.useEffect(() => {
    const getAPIdata = async () => {
      const response = await search(query);
      setResult(response);
    };
    getAPIdata();
    
  }, [result]);

  const { results } = result;

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <ScrollView contentContainerStyle={GLOBAL.LAYOUT.listings} style={GLOBAL.LAYOUT.pageContainer} showsVerticalScrollIndicator={false}>
        {results.length > 0 && results.map(
          (product, index) => <ProductDisplay key={`search_product-${index}`} title={product.name.substr(0, 30)} price={product.price} imageUrl={product.image} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Listings;
