import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: { [key: string]: any };
    screenLg: string;
    screenLgMax: string;
    screenMd: string;
    screenMdMax: string;
    screenSm: string;
    screenSmMax: string;
    screenXl: string;
    screenXsMax: string;
  };
};
