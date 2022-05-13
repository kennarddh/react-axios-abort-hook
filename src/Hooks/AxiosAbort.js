import { useEffect, useState } from 'react'

import axios from 'axios'

const useAxiosAbort = () => {
	const get = (url, options) => {
		return axios.get(url, options)
	}

	const request = { get }

	return [request]
}

export default useAxiosAbort
