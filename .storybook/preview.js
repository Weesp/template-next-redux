import store from '../src/redux/store'
import { Provider } from 'react-redux'
import { initialize, mswDecorator } from 'msw-storybook-addon'

// Initialize MSW
initialize()

// Provide the MSW addon decorator globally

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  mswDecorator,
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
]
