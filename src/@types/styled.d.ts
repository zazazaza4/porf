import { darkThemeType } from "../styles/Themes";

declare module "styled-components" {
  export interface DefaultTheme extends darkThemeType {}
}
