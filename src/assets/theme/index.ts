import { DefaultTheme } from 'styled-components';

const blue = '#398AC6';
const green = '#1E9C9A';
const orange = '#F59C3F';
const pink = '#EB6BA2';
const purple = '#917CB4';

const screenXl = '1440px';
const screenLgMax = '1439px';
const screenLg = '1024px';
const screenMdMax = '1023px';
const screenMd = '600px';
const screenSmMax = '599px';
const screenSm = '360px';
const screenXsMax = '359px';

const theme: DefaultTheme = {
  color: {
    blue,
    green,
    orange,
    pink,
    purple,
  },
  screenLg,
  screenLgMax,
  screenMd,
  screenMdMax,
  screenSm,
  screenSmMax,
  screenXl,
  screenXsMax,
};

export default theme;
