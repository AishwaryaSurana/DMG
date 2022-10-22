
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/redux/store'; //Import the store
import Home from './src/screens/Home' //Import the component file

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}


// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Button,
//   Text,

//   useColorScheme,

//   Image
// } from 'react-native';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as pageActions from './src/redux/actions/pageList';

// // class App extends Component {

// //   incrementCount() {
// //     let { actions } = this.props;
// //     actions.getPageList();
// //   }
// //   render() {

// //   }
// // };

// // const mapStateToProps = state => ({
// //   pageList: state.pageList.pageList,
// // });

// // const ActionCreators = Object.assign(
// //   {},
// //   pageActions,
// // );
// // const mapDispatchToProps = dispatch => ({
// //   actions: bindActionCreators(ActionCreators, dispatch),
// // });


// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   // const backgroundStyle = {
//   //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   // };
//   // const data = [
//   //   { id: 1, name: 'React JS', url: 'https://icon-library.com/images/react-icon/react-icon-29.jpg' },
//   //   { id: 2, name: 'JavaScript', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png' },
//   //   { id: 3, name: 'Node JS', url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png' },
//   // ];

//   getItemLayout = (data, index) => (
//     { length: Dimensions.get('window').width, offset: Dimensions.get('window').width * index, index }
//   )

//   scrollToIndex = () => {
//     this.flatListRef.scrollToIndex({ animated: true, index: 0 });
//   }

//   renderItem = ({ item, index }) => {
//     return (
//       <Image
//         resizeMode='contain'
//         style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
//         source={{
//           uri: item.url,
//         }}
//       />
//     )
//   }

//   const { pageList } = this.props;
//   console.log(pageList);
//   return (
//     <View styles={styles.container}>
//       <Button
//         title="Get Employee"
//         onPress={() => this.incrementCount()}
//       />
//       {pageList.map((employee) => (
//         <Text style={styles.textCenter}>{employee.employee_name}</Text>
//       ))}


//     </View>
//   );

//   // return (
//   //   <SafeAreaView style={backgroundStyle}>
//   //     <FlatList
//   //       initialScrollIndex={2}
//   //       initialNumToRender={1}

//   //       ref={(ref) => { this.flatListRef = ref; }}
//   //       getItemLayout={this.getItemLayout}
//   //       horizontal={true}
//   //       data={data}
//   //       renderItem={renderItem}
//   //       keyExtractor={item => item.id}
//   //       onEndReached={() => {
//   //         scrollToIndex()
//   //       }}

//   //     />
//   //   </SafeAreaView>
//   // );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 300
//   },
//   textCenter: {
//     textAlign: 'center'
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App)


