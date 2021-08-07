import { createTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
   typography: {
      fontFamily:
         "'Nunito Sans', sans-serif",
   },
   palette: {
      primary: {
         main: '#f1f3f4',
      },
      secondary: {
         main: '#663399',
      },
      error: {
         main: orange[400],
      },
   },
});

export default theme;