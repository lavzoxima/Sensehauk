import React, { useState, useLayoutEffect, useEffect } from "react";
import { View, Text, Pressable, SafeAreaView, FlatList } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Modal from '../../components/Modal';
import ChatComponent from '../../components/ChatComponent';
import socket from '../../utils/socket';
import { styles } from "../../utils/styles";

const Chat = () => {
    const [visible, setVisible] = useState(false);
    const [rooms, setRooms] = useState([]);

    useLayoutEffect(() => {
        function fetchGroups() {
            fetch("http://10.0.2.2:4000/api")
                .then((res) => {

                    let response = res.json()
                })
                .then((data) => {
                    console.log('data', data)
                    //setRooms(data)
                })
                .catch((err) => {
                    console.log('Failed ')
                    console.error(err.response)
                }
                );

        }
        fetchGroups();
    }, []);

    useEffect(() => {
        socket.on("roomsList", (rooms) => {
            setRooms(rooms);
        });
    }, [socket]);

    const handleCreateGroup = () => setVisible(true);

    return (
        <SafeAreaView style={styles.chatscreen}>
            <View style={styles.chattopContainer}>
                <View style={styles.chatheader}>
                    <Text style={styles.chatheading}>Chats</Text>
                    <Pressable onPress={handleCreateGroup}>
                        <Feather name='edit' size={24} color='green' />
                    </Pressable>
                </View>
            </View>

            <View style={styles.chatlistContainer}>
                {rooms.length > 0 ? (
                    <FlatList
                        data={rooms}
                        renderItem={({ item }) => <ChatComponent item={item} />}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <View style={styles.chatemptyContainer}>
                        <Text style={styles.chatemptyText}>No rooms created!</Text>
                        <Text>Click the icon above to create a Chat room</Text>
                    </View>
                )}
            </View>
            {visible ? <Modal setVisible={setVisible} /> : ""}
        </SafeAreaView>
    );
};

export default Chat;