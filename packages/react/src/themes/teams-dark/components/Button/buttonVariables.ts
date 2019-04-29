import { ButtonVariables } from '../../../teams/components/Button/buttonVariables'

export default (siteVars: any): Partial<ButtonVariables> => {
  return {
    color: siteVars.colors.white,
    colorHover: siteVars.colors.white,
    colorFocus: siteVars.colors.white,
    backgroundColor: 'transparent',
    primaryBackgroundColorActive: siteVars.brand08,

    primaryBackgroundColorHover: siteVars.brand08,
    primaryBackgroundColorFocus: siteVars.brand14,

    circularColorActive: siteVars.black,
    circularBackgroundColorActive: siteVars.gray02,
    circularBackgroundColorHover: siteVars.gray03,
    circularBackgroundColorFocus: siteVars.gray02,
  }
}
