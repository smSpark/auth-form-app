import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    fontColor: string,
    secondFontColor: string,
    mainColor: string
    secondColor: string,
    inactiveColor: string,
    rejectColor: string,
  }
}
