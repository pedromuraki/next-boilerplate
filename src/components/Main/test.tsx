import { render } from '@testing-library/react'

import Main from './index'

describe('Main', () => {
  it('Should have the text "xxx"', () => {
    const { getByText } = render(<Main />)

    expect(getByText('Next Boilerplate')).toBeInTheDocument()
  })
})
