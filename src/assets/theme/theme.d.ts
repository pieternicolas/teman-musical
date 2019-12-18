import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: object;
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
