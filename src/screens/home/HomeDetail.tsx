import React, { useMemo, useCallback, useEffect, useState, } from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import useApi from '../../hooks/useApi';
import { getStarMovie } from '../../redux/auth/index'

const HomeDetail = (navigation: any) => {
    const data = navigation.route.params.data;
    const theme = useSelector((state: any) => state.colors.theme);
    const starChar = useSelector((state: any) => state.auth.setCharMovie);
    const styles = useMemo(() => createStyles(theme), [theme]);
    const renderKeyExtractor = (item: any, index: any) => index.toString();
    const { apiCall } = useApi();
    const dispatch = useDispatch();

    useEffect(() => {
        data.films.forEach(element => {
            dispatch(getStarMovie(apiCall, element));
        });

    }, []);

    const renderItem = useCallback(({ item }: any) => {

        return (
            <TouchableOpacity>
                <View style={{ marginBottom: 10, marginTop: 5 }}>
                    <Text >{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }, []);

    return (
        <SafeAreaView edges={['top']} style={styles.screen}>
            <StatusBar backgroundColor={theme.light} />
            <View style={styles.screen}>
                <Text >{data.name}</Text>
                <Text >{data.gender}</Text>
                <Text >{data.birth_year}</Text>
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

export default HomeDetail;