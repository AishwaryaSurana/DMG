import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,

    //justifyContent: 'center',
    //alignItems: 'center',
    flexDirection: 'row',
  },
  gridView: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    margin: 10,
    borderColor: 'lightgrey',
    borderWidth: 2,
    borderRadius: 10,
  },
  mainView: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    marginTop: -80,
    marginRight: 20,
    marginBottom: 20,
  },
  renderView: {
    marginVertical: 16,
    alignItems: 'center',
  },
});
