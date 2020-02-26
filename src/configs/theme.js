import { createMuiTheme } from '@material-ui/core/styles'

export const colors = {
  orange: '#FF5722',
  blue: '#577399',
  aqua: '#BDD5EA',
  white: '#F7F7FF',
  sunset: '#FE5F55',
  grey: '#455a64'
}

export function getTheme(theme){
  return createMuiTheme({
    palette: {
      type: theme,
      primary: {
        main: colors.orange
      },
      secondary: {
        main: colors.blue
      },
      tertiary: {
        main: colors.sunset
      },
      grey: {
        main: colors.grey
      },
      white: {
        main: colors.white
      },
      warning: {
        main: '#ffeb3b'
      },
      error: {
        main: '#ff1744'
      },
      background: {
        default: colors.grey
      },
    },
    overrides: {
      MuiCard: {
        root: {
          backgroundColor: colors.blue
        }
      }
    }
  })
}