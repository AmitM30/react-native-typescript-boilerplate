import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView, ScrollView } from 'react-native';

import { Props } from './index';
import { GLOBAL } from '../../styles/global';
import LinksWidget from '../../widgets/links';
import ProductDisplay from '../../widgets/productDisplay';
import { SearchResponse } from '../../../../shared/redux/types/search/ISearchResponse';

const Listings: React.FC<Props> = ({ componentId, search, query }: Props) => {
  const [result, setResult]: [SearchResponse, React.Dispatch<any>] = React.useState<SearchResponse>({ results: [] });

  const getAPIdata = async (text: string) => {
    const response = await search(text);
    setResult(response);
    Navigation.mergeOptions(componentId, {
      topBar: { title: { text } },
    });
  };

  React.useEffect(() => {
    getAPIdata(query);
  }, []);

  const { results } = result;

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <ScrollView contentContainerStyle={GLOBAL.LAYOUT.listings} style={GLOBAL.LAYOUT.pageContainer} showsVerticalScrollIndicator={false}>
        <LinksWidget
          componentId={componentId}
          onSelected={(text: string) => getAPIdata(text)}
          selectedCategory={query}
        />
        {results && results.length > 0 && results.map(
          (product, index) => <ProductDisplay key={`search_product-${index}`} title={product.name.substr(0, 30)} price={product.price} imageUrl={product.image} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Listings;
