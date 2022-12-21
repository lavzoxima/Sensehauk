import React, { useMemo, useCallback, useEffect, useState, } from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import useApi from '../../hooks/useApi';
import { getStarWar } from '../../redux/auth/index'
const Home = ({ navigation }: any) => {
  const theme = useSelector((state: any) => state.colors.theme);
  const starChar = useSelector((state: any) => state.auth.starChar);
  const styles = useMemo(() => createStyles(theme), [theme]);
  const renderKeyExtractor = (item: any, index: any) => index.toString();
  const { apiCall } = useApi();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarWar(apiCall, {}));
  }, []);

  const renderItem = useCallback(({ item }: any) => {

    return (
      <TouchableOpacity onPress={() => navigation.navigate('HomeDetail', { data: item })}>
        <View style={{ marginBottom: 10, marginTop: 5 }}>
          <Text >{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }, []);
  console.log(starChar)
  return (
    <SafeAreaView edges={['top']} style={styles.screen}>
      <StatusBar backgroundColor={theme.light} />
      <View style={styles.screen}>
        <FlatList


          data={starChar}
          keyExtractor={renderKeyExtractor}
          renderItem={renderItem}

        />
      </View>
    </SafeAreaView>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.white,
    },
  });

export default Home;
/* {"birth_year": "19BBY", "created": "2014-12-09T13:50:51.644000Z", "edited": "2014-12-20T21:17:56.891000Z", "eye_color": "blue", "films": ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/6/"], "gender": "male", "hair_color": "blond", "height": "172", "homeworld": "https://swapi.dev/api/planets/1/", "mass": "77", "name": "Luke Skywalker", "skin_color": "fair", "species": [], "starships": ["https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/"], "url": "https://swapi.dev/api/people/1/", "vehicles": ["https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/"]} */