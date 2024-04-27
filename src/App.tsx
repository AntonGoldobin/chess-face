import { createClient } from '@connect2ic/core'
import { defaultProviders } from '@connect2ic/core/providers'
import '@connect2ic/core/style.css'
import { Connect2ICProvider } from '@connect2ic/react'
import './App.css'
import { Home } from './pages/Home/Home'

const client = createClient({
	providers: defaultProviders as any,
	//globalProviderConfig: {
	//	dev: import.meta.env.DEV,
	//},
})

function App() {
	return (
		<Connect2ICProvider client={client}>
			<div className="App-header">
				<Home />
			</div>
		</Connect2ICProvider>
	)
}

export default App
