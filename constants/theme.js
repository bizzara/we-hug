import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export const COLORS = {
    primary: '#EEA849',
    secondary: '#A9ADBC',
    white: '#FFF9E8',
    black: '#212121',
    blue: '#027DEF',
}

export const SIZES = {
    // global SIZES
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,
    padding3: 16,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 14,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,
}

export const FONTS = {
    largeTitle: {
        fontFamily: 'black',
        fontSize: SIZES.largeTitle,
        lineHeight: 55,
        color: COLORS.black,
    },
    h1: {
        fontFamily: 'bold',
        fontSize: SIZES.h1,
        lineHeight: 36,
        color: COLORS.black,
    },
    h2: {
        fontFamily: 'bold',
        fontSize: SIZES.h2,
        lineHeight: 30,
        color: COLORS.black,
    },
    h3: {
        fontFamily: 'bold',
        fontSize: SIZES.h3,
        lineHeight: 22,
        color: COLORS.black,
    },
    h4: {
        fontFamily: 'bold',
        fontSize: SIZES.h4,
        lineHeight: 20,
        color: COLORS.black,
    },
    body1: {
        fontFamily: 'regular',
        fontSize: SIZES.body1,
        lineHeight: 36,
        color: COLORS.black,
    },
    body2: {
        fontFamily: 'regular',
        fontSize: SIZES.body2,
        lineHeight: 30,
        color: COLORS.black,
    },
    body3: {
        fontFamily: 'regular',
        fontSize: SIZES.body3,
        lineHeight: 22,
        color: COLORS.black,
    },
    body4: {
        fontFamily: 'regular',
        fontSize: SIZES.body4,
        lineHeight: 20,
        color: COLORS.black,
    },
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme
