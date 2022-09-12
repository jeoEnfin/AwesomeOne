import React from "react";
import { View, FlatList, Text, StyleSheet,Dimensions } from "react-native";

const Posts = () => {

    const renderList = () => {
        return (
          <TouchableOpacity>
           <Text>Nothing yet</Text>
          </TouchableOpacity>
        );
      };

    return (
        <View style={Style.container}>
            <Text style={Style.mainHead}>My Videos</Text>
            <FlatList
                ListEmptyComponent={() => (
                    <View style={Style.emptyListView}>
                        <Text style={Style.emptyListText}>
                            No posts yet
                        </Text>
                    </View>
                )}
                horizontal={false}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.5}
                keyExtractor={item => item.id}
                removeClippedSubviews={true}
                renderItem={renderList}
            />
        </View>
    );
}
export default Posts;

const Style=StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        marginTop: 25
    },
    emptyListView: {
        height: Dimensions.get('window').height / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyListText: {
        textAlign: 'center',
        color: '#fff'
    },
    mainHead: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600'
    }
})