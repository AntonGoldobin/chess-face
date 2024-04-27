import { Unity, useUnityContext } from 'react-unity-webgl'

export const Home = () => {
	const { unityProvider } = useUnityContext({
		loaderUrl: 'build/unity-webgl-build.loader.js',
		dataUrl: 'build/unity-webgl-build.data',
		frameworkUrl: 'build/unity-webgl-build.framework.js',
		codeUrl: 'build/unity-webgl-build.wasm',
	})

	return (
		<Unity
			unityProvider={unityProvider}
			style={{ width: '1000px', height: '800px' }}
		/>
	)
	//return <></>
}
