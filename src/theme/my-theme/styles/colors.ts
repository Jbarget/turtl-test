const brandColors = {
  neutral: {
    '000': '#F8F9F9',
    '100': '#F5F6F6',
    '200': '#F0F2F2',
    '300': '#E9ECEC',
    '400': '#DFE4E4',
    '500': '#D1D8D9',
    '600': '#ACB9BB',
    '700': '#8EA0A3',
    '800': '#768C8F',
    '900': '#637C7F',
    '1000': '#2B3132',
  },
  green: {
    '000': '#E7FCEA',
    '100': '#DCFBE1',
    '200': '#CDF9D4',
    '300': '#B8F7C2',
    '400': '#9AF3A8',
    '500': '#6FEE83',
    '600': '#66DC7C',
    '700': '#5ECC76',
    '800': '#57BE71',
    '900': '#51B16C',
    '1000': '#4BA568',
  },
  yellow: {
    '000': '#FEFAEA',
    '100': '#FFF8D4',
    '200': '#FFF5C1',
    '300': '#FFF1A7',
    '400': '#FFEB81',
    '500': '#FFE24B',
    '600': '#E8D14A',
    '700': '#D3C249',
    '800': '#C0B548',
    '900': '#AFA947',
    '1000': '#A09E46',
  },
  orange: {
    '500': '#F9974C',
  },
  red: {
    '500': '#F24C4C',
  },
  purple: {
    '500': '#D07EE6',
  },
  blue: {
    '500': '#6F9BED',
  },
  pink: {
    '500': '#FFA9E7',
  },
  white: '#FFFFFF',
  black: '#2B3132',
};

const colors = {
  light: {
    text: brandColors.neutral['1000'],
    background: brandColors.neutral['000'],
    primary: brandColors.green['500'],
    secondary: brandColors.yellow['500'],
    tertiary: brandColors.orange['500'],
    white: brandColors.white,
    black: brandColors.black,
  },
};

export default colors;
