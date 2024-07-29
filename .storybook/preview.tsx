import React from 'react'
import { CUSTOM_VIEWPORTS } from './customViewports'
import type { Preview } from '@storybook/react'

import 'destyle.css/destyle.css'
import '../src/styles/global.css'
import '../src/styles/variables.css'
import '../src/styles/a11y.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...CUSTOM_VIEWPORTS,
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
}

export default preview
