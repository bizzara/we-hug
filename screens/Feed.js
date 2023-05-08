import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image,
    TextInput,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES, images } from '../constants'
import {
    MaterialIcons,
    Ionicons,
    Feather,
    Foundation,
    MaterialCommunityIcons,
} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { friends } from '../constants/data'

const users = [images.user1, images.user2, images.user3, images.user4]
const Feed = () => {
    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.body4,
                            marginRight: 4,
                        }}
                    >
                        My Networks
                    </Text>
                    <MaterialIcons
                        name="keyboard-arrow-down"
                        size={24}
                        color={COLORS.black}
                    />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            height: 50,
                            width: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#fff',
                            shadowColor: '#18274B',
                            shadowOffset: {
                                width: 0,
                                height: 4.5,
                            },
                            shadowOpacity: 0.12,
                            shadowRadius: 6.5,
                            elevation: 2,
                            borderRadius: 22,
                        }}
                    >
                        <Ionicons
                            name="filter"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>

                    <LinearGradient
                        colors={['#F68464', '#EEA849']}
                        style={{
                            height: 50,
                            width: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: '#18274B',
                            shadowOffset: {
                                width: 0,
                                height: 4.5,
                            },
                            shadowOpacity: 0.12,
                            shadowRadius: 6.5,
                            elevation: 2,
                            borderRadius: 22,
                            marginLeft: 12,
                        }}
                    >
                        <Feather name="plus" size={24} color={COLORS.white} />
                    </LinearGradient>
                </View>
            </View>
        )
    }

    function renderSuggestionsContainer() {
        return (
            <View>
                <View style={{ marginVertical: 8 }}>
                    <Text style={{ ...FONTS.h3 }}>Timeline</Text>
                    <Text style={{ ...FONTS.body3 }}>Friends</Text>
                </View>

                <FlatList
                    horizontal={true}
                    data={friends}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <View
                            key={item.id}
                            style={{
                                flexDirection: 'column',
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => console.log('Pressed')}
                                style={{
                                    paddingVertical: 4,
                                    marginRight: 10,
                                }}
                            >
                                {item.hasPremium && (
                                    <LinearGradient
                                        colors={['#F68464', '#EEA849']}
                                        style={{
                                            height: 30,
                                            width: 30,
                                            borderRadius: 15,
                                            position: 'absolute',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            zIndex: 1,
                                            bottom: 20,
                                            right: 32,
                                        }}
                                    >
                                        <Foundation
                                            name="crown"
                                            size={20}
                                            color={COLORS.white}
                                        />
                                    </LinearGradient>
                                )}

                                <Image
                                    source={item.image}
                                    resizeMode="contain"
                                    style={{
                                        width: 96,
                                        height: 150,
                                        borderRadius: 80,
                                        borderWidth: 4,
                                        borderColor: '#fff',
                                    }}
                                />
                            </TouchableOpacity>
                            <Text
                                style={{ ...FONTS.body3, fontWeight: 'bold' }}
                            >
                                {item.name}
                            </Text>
                        </View>
                    )}
                />
            </View>
        )
    }

    function renderFeedPost() {
        return (
            <View
                style={{
                    backgroundColor: '#fff',
                    flexDirection: 'column',
                    width: '100%',
                    borderRadius: 26,
                    borderWidth: 1,
                    borderColor: '#fff',
                    marginVertical: 12,
                }}
            >
                {/* Post header */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 8,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 8,
                        }}
                    >
                        <Image
                            source={images.user1}
                            style={{
                                height: 52,
                                width: 52,
                                borderRadius: 20,
                            }}
                        />

                        <View style={{ marginLeft: 12 }}>
                            <Text
                                style={{ ...FONTS.body4, fontWeight: 'bold' }}
                            >
                                Ankita Shrama
                            </Text>
                            <Text
                                style={{
                                    ...FONTS.body4,
                                    color: COLORS.primary,
                                    fontWeight: 'bold',
                                }}
                            >
                                #Lost_soul
                            </Text>
                        </View>
                    </View>

                    <MaterialCommunityIcons
                        name="dots-vertical"
                        size={24}
                        color={COLORS.black}
                    />
                </View>

                {/* Post content */}

                <View
                    style={{
                        marginHorizontal: 8,
                        marginVertical: 8,
                    }}
                >
                    <Text style={{ ...FONTS.body4, fontWeight: 'bold' }}>
                        #So who am I
                    </Text>
                    <Text style={{ ...FONTS.body4 }}>
                        In this world of virtual connections. It is important to
                        remenber the value of real, meaningfull relationships
                    </Text>
                </View>

                <View
                    style={{
                        marginHorizontal: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Ionicons
                        name="location-outline"
                        size={21}
                        color={COLORS.primary}
                    />
                    <Text
                        style={{
                            fontSize: 12,
                            fontFamily: 'regular',
                            color: COLORS.primary,
                            marginLeft: 4,
                        }}
                    >
                        Gold City | 10 mins ago
                    </Text>
                </View>

                {/* Posts likes and comments */}

                <View
                    style={{
                        marginHorizontal: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingBottom: 6,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',

                                alignItems: 'center',
                                marginRight: SIZES.padding2,
                            }}
                        >
                            <Feather
                                name="heart"
                                size={20}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.body4, marginLeft: 2 }}>
                                22
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',

                                alignItems: 'center',
                            }}
                        >
                            <MaterialCommunityIcons
                                name="message-text-outline"
                                size={20}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.body4, marginLeft: 2 }}>
                                22
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text
                                style={{ ...FONTS.body4, fontWeight: 'bold' }}
                            >
                                Liked By 340
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 10,
                            }}
                        >
                            {users.map((user, index) => (
                                <Image
                                    source={user}
                                    key={index}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        borderRadius: 999,
                                        borderWidth: 1,
                                        borderColor: '#fff',
                                        marginLeft: -5,
                                    }}
                                />
                            ))}
                        </View>
                    </View>
                </View>

                {/* comment section */}

                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: 8,
                        paddingVertical: 18,
                        borderTopWidth: 1,
                        borderTopColor: '#FDF6ED',
                    }}
                >
                    <Image
                        source={images.user2}
                        resizeMode="contain"
                        style={{
                            height: 52,
                            width: 52,
                            borderRadius: 26,
                        }}
                    />

                    <View
                        style={{
                            flex: 1,
                            height: 52,
                            borderRadius: 26,
                            borderWidth: 1,
                            borderColor: '#CCC',
                            marginLeft: 12,
                            paddingLeft: 12,
                            justifyContent: 'center',
                        }}
                    >
                        <TextInput
                            placeholder="Add a comment"
                            placeholderTextColor="#CCC"
                        />
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E7E7E7' }}>
            <View style={{ flex: 1, paddingHorizontal: 22 }}>
                {renderHeader()}
                <ScrollView>
                    {renderSuggestionsContainer()}
                    {renderFeedPost()}
                    {renderFeedPost()}
                    {renderFeedPost()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Feed
