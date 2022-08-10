import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

// styled-components의 ThemeProvider 적용을 위한 Story 래핑
export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
