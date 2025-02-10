import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { appStore } from '../../utils/appStore'
import '@testing-library/jest-dom'
import { Header } from '../Header'

it('should render header with login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )
  const loginBtn = screen.getByRole('button')
  expect(loginBtn).toBeInTheDocument()
})
