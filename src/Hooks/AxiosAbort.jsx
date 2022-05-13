import { useRef, useEffect } from 'react'

import axios from 'axios'

const useAxiosAbort = () => {
	const Controller = useRef(new AbortController())

	useEffect(() => {
		return () => {
			Controller.current.abort()
		}
	}, [])

	const get = (url, options) => {
		return axios.get(url, { signal: Controller.current.signal, ...options })
	}

	const request = { get }

	return [request]
}

export default useAxiosAbort
