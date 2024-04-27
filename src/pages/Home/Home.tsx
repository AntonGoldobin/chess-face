import { ConnectButton, ConnectDialog, useConnect } from '@connect2ic/react'
import { Unity, useUnityContext } from 'react-unity-webgl'

export const Home = () => {
	const { isConnected, principal } = useConnect({
		onConnect: () => {
			console.log('connected')
			sendMessage('AuthorizationPage', 'sendMessage', principal)
		},
		onDisconnect: () => {
			console.log('disconected')
		},
	})

	const { unityProvider, sendMessage } = useUnityContext({
		loaderUrl: 'build/unity-webgl-build.loader.js',
		dataUrl: 'build/unity-webgl-build.data',
		frameworkUrl: 'build/unity-webgl-build.framework.js',
		codeUrl: 'build/unity-webgl-build.wasm',
	})

	return (
		<div style={{ display: 'flex' }}>
			<div>
				{principal || 'Не залогинен'}
				<ConnectButton />
				<ConnectDialog />
				<button
					onClick={() =>
						sendMessage('AuthorizationPage', 'sendMessage', principal)
					}
				>
					set message
				</button>
			</div>
			<div>
				<Unity
					unityProvider={unityProvider}
					style={{ width: '1000px', height: '800px' }}
				/>
			</div>
		</div>
	)
	//return <></>
}
