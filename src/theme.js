/**
 * The theme object containing colors, borders and boxShadow properties.
 * @typedef {Object} Theme
 * @property {Object} colors - The color palette used by the theme.
 * @property {Object} borders - The borders with used by the theme.
 * @property {Object} boxShadow - The box shadow used by the theme.
*/

const theme = {
    colors: {
        primary: '#0047AB',
        secondary: '#D0417E',
        lightBackground: '#F9F9F9',
        darkBackground: '#696969',
        lightGray: '#F5F5F5',
        darkGray: '#696969',
        mediumGray: '#ddd',
        rgbDarkColor: "rgba(0,0,0,0.5)",
    },
    borders: {
        sm: '8px',
        md: '10px',
        lg: '20px',
    },
    boxShadow: {
        strong: "0 10px 15px 0 rgba(59, 65, 178, 0.2)",
        light: "0 6px 8px 0 rgba(59, 65, 178, 0.1)",
    },
};

export default theme;