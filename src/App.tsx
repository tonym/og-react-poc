import {
  createTheme,
  ThemeOptions,
  ThemeProvider,
  styled
} from '@mui/material/styles';
import cssBaseline from '../node_modules/@opensesame/gemini/styles/cssBaseline';
import provideTokens from '../node_modules/@opensesame/gemini/styles/provideTokens';
import useMuiTheme from '../node_modules/@opensesame/gemini/styles/useMuiTheme';
import { AppBar, Button } from '@mui/material';

function App() {
  provideTokens('simon');
  //console.log(useMuiTheme);

  const ogTheme = useMuiTheme() as ThemeOptions; // <-- Gemini function returns an OG type, MuiThemeOptions, that we cast to a MUI type

  const theme = createTheme(ogTheme); // <-- MUI function to create a MUI theme

  cssBaseline(); // <-- Gemini baseline (MUI baseline is not used)

  const AppBarPrimary = styled(AppBar)({
    padding: theme.spacing(3)
  });

  const AppWrapper = styled('div')({
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(10)
  });

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <AppBarPrimary>Gemini for React</AppBarPrimary>
        <div>
          <Button variant="contained">Primary contained</Button>
          <Button variant="outlined">Primary outlined</Button>
        </div>
        <div>
          <Button color="secondary" variant="contained">
            Secondary contained
          </Button>
          <Button color="secondary" variant="outlined">
            Secondary outlined
          </Button>
        </div>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
