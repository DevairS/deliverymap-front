import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    primary: string;
    primaryDark: string;
    secondary: string;
    background: string;
    surface: string;
    error: string;
    text: string;
    textDark: string;
  }
}
