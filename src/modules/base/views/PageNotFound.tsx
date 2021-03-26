import React from 'react'
import { useLocation } from 'react-router-dom'

export default (): React.ReactElement => {
	const { pathname } = useLocation()

	return (
		<div>
			<h3>
				No match for <code>{pathname}</code>
			</h3>
		</div>
	)
}
