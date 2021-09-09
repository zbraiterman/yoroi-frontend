// @flow
import type { Node } from 'react';
import { GlobalStyles } from '@mui/material';

const globalStyles = (theme: Object): Node => (
  <GlobalStyles
    styles={{
      ':root': {
        /* BUTTON */
        // general button primary variant
        '--mui-button-primary-background-color': theme.palette.secondary.main,
        '--mui-button-primary-background-color-hover': theme.palette.secondary.dark,
        '--mui-button-primary-background-color-active': theme.palette.secondary.dark,
        '--mui-button-primary-background-color-disabled': theme.palette.secondary.light,
        '--mui-button-primary-text-disabled': theme.palette.secondary.contrastText,
        '--mui-button-primary-text': theme.palette.secondary.contrastText,
        // general button secondary variant
        '--mui-button-outlined-background-color': theme.palette.secondary.contrastText,
        '--mui-button-outlined-background-color-hover': theme.palette.secondary.contrastText,
        '--mui-button-outlined-border-color': theme.palette.secondary.main,
        '--mui-button-outlined-border-color-disabled': theme.palette.secondary.light,
        '--mui-button-outlined-border-color-hover': theme.palette.secondary.dark,
        '--mui-button-outlined-background-color-active': theme.palette.secondary.light,
        '--mui-button-outlined-background-color-disabled': theme.palette.secondary.contrastText,
        '--mui-button-outlined-text-color-disabled': theme.palette.secondary.light,
        '--mui-button-outlined-text-color': theme.palette.secondary.main,
        '--mui-button-outlined-active-text-color': theme.palette.secondary.dark,
        // classic button secondary variant
        '--mui-button-flat-background-color': 'hsl(330 5% 93%)',
        '--mui-button-flat-background-color-hover': 'hsl(9 73% 81% / 10%)',
        '--mui-button-flat-background-color-active': 'hsl(9 30% 64% / 10%)',
        '--mui-button-flat-background-color-disabled': 'hsl(204 20% 95% / 30%)',
        '--mui-button-flat-text-color-disabled': 'hsl(237 37% 11%)',
        '--mui-button-flat-text-color': 'hsl(237 37% 11%)',
      },
    }}
  />
);

export { globalStyles };
