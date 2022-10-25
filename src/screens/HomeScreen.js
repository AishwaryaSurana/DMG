import React, { useEffect, useState } from 'react';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios'; //Only import if using api

import { addData } from '../redux/actions/actions';

import { styles } from './homeStyle';

export default function HomeScreen(props) {
  const dispatch = useDispatch();

  const dataReducer = useSelector(state => state.dataReducer);
  const { data } = dataReducer;

  const [key, setKey] = useState(1);
  const [columns, setColumns] = useState(1);

  const [page, setPage] = useState(0);

  const renderLoader = () => {
    return (
      <View style={styles.renderView}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );

  };

  const loadMoreItem = () => {
    setPage(page + 1);
  };

  useEffect(() => getData(), [page]);


  const getData = () => {
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=D4ANmTAGBf3AaAWW5JRQN4L4C93QywY4&q=unitedstates&page=${page}&size=5`;
    axios
      .get(url)
      .then(res => res.data)
      .then(data => {
        dispatch(addData([...dataReducer.data, ...data.response.docs]));
      })
      .catch(error => alert(error.message))
  };

  const renderItem = ({ item, index }) => {
    if (columns == 1) {
      return (
        <View style={styles.row}>
          <View>
            <Image
              source={{
                uri: 'https://www.shutterstock.com/image-photo/newspapers-laptop-pile-daily-papers-600w-1408220747.jpg',
              }}
              style={{ width: 160, height: 80 }}
            />
          </View>
          <View style={{ marginLeft: 5, flex: 1 }}>
            <View>
              <Text numberOfLines={1} style={styles.title}>
                {parseInt(index) + 1}
                {'. '}
                {item.abstract}
              </Text>

              <Text numberOfLines={2} style={styles.description}>
                {item.snippet}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                flex: 1,
                marginRight: 5,
                marginBottom: 5,
              }}>
              <Text style={styles.description}>{item.pub_date}</Text>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.gridView}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={{
                uri: 'https://www.shutterstock.com/image-photo/newspapers-laptop-pile-daily-papers-600w-1408220747.jpg',
              }}
              style={{ width: 160, height: 80 }}
            />
          </View>
          <View
            style={{
              marginTop: 5,
              marginLeft: 5,
              flex: 1,
              alignItems: 'center',
            }}>
            <View>
              <Text numberOfLines={1} style={styles.title}>
                {parseInt(index) + 1}
                {'. '}
                {item.abstract}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                flex: 1,
                marginRight: 5,
                marginBottom: 5,
              }}></View>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.mainView}>
      <FlatList
        key={key}
        numColumns={columns}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `flat_${index}`}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
      />

      <View
        style={{
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (columns == 1) {
              setColumns(columns + 1);
            } else {
              setColumns(columns - 1);
            }
            setKey(key + 1);
          }}>
          {columns === 1 ? (
            <Image
              source={require('../assets/grid.png')}
              style={{ width: 30, height: 30 }}
            />
          ) : (
            <Image
              source={require('../assets/row.png')}
              style={{ width: 30, height: 30 }}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

