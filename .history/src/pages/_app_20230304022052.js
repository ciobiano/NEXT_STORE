import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { SessionProvider} from "next-auth/react"






const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvi session={pageProps.session}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </SessionProvi>
  )
}

export default MyApp
