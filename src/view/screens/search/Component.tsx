import * as React from 'react';
import { NativeSyntheticEvent, SafeAreaView, TextInputSubmitEditingEventData, View } from 'react-native';
import ROUTER from '../../../navigators/router';
import { CText } from '../../elements/inputs';
import { ListItem } from '../../elements/layout';
import { SectionTitle } from '../../elements/section/title';

import { GLOBAL } from '../../styles/global';
import Header from '../../widgets/header/Component';

interface Props {
  componentId: string;
}

const searchTerm = { searchTerm: '' };
export const SearchContext = React.createContext(searchTerm);

const Search: React.FC<Props> = (props: Props) => {
  const [recentSearches, setRecentSearches] = React.useState<Array<string>>([]);

  React.useEffect(() => {
    // good place to make that API call
    async function thatAPIcall() {
      setRecentSearches(['Speakers', 'Headphones']);
    }
    thatAPIcall();

    // Gets called after every render
    // on mount, and every re-render
    console.log('render!');

    // similar to `componentWillUnmount`, return a function from here
    return () => console.log('unmounting...');
  }, [setRecentSearches]);   // <--- this is very important

  const onSubmit = ({ nativeEvent }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    // console.log('>>> nativeEvent.text', nativeEvent.text);
    setRecentSearches([...recentSearches, nativeEvent.text ])
  }

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <SearchContext.Provider value={searchTerm} >
        <View style={GLOBAL.LAYOUT.pageContainer}>
          <Header onSubmit={onSubmit} />
          <SectionTitle title={'Recent Searches'} />
          {recentSearches.length > 0 && (
            recentSearches.map(
              (text) => <ListItem onClick={() => ROUTER.showListingsScreen({ componentId: props.componentId, passProps: { query: text } }, text)} key={text}><CText>{text}</CText></ListItem>
            )
          )}
        </View>
      </SearchContext.Provider>
    </SafeAreaView>
  )
};

export default Search;

/**
 * Class based implementation - For reference from the course
 */
// interface State {
//   recentSearches: Array<string>;
// }

// class Search extends React.PureComponent<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       recentSearches: []
//     }
//   }

//   componentDidMount () {
//     // make api calls
//   }

//   shouldComponentUpdate (nextProps: Readonly<Props>, nextState: Readonly<State>) {
//     return true;
//   }

//   componentDidUpdate (prevProps: any, prevState: any) {
//     // if ()
//   }

//   onSubmit = ({ nativeEvent }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
//     console.log('>>> nativeEvent.text', nativeEvent.text);
//     const { recentSearches } = this.state;
//     recentSearches.push(nativeEvent.text)
//     this.setState({ recentSearches }, () => {
//       console.log('this.state.recentSearches', this.state.recentSearches);
//     });
//   }

//   render () {
//     const { recentSearches } = this.state;

//     return (
//       <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
//         <View style={GLOBAL.LAYOUT.pageContainer}>
//           <Header onSubmit={this.onSubmit} />
//           <SectionTitle title={'Recent Searches'} />
//           {recentSearches.length > 0 && (
//             recentSearches.map((search) => <View><CText>{search}</CText></View>)
//           )}
//         </View>
//       </SafeAreaView>
//     )
//   }
// }
