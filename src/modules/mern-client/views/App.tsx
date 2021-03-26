import React, { ReactElement, useState } from 'react'
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom'

import '../styles/App.sass'
import Dashboard from './Dashboard'
import SignIn from '../../authorization/views/SignIn'
import PageNotFound from '../../base/views/PageNotFound'

interface RouteOptions {
	path: string
	exact?: boolean
	component: ReactElement
	beforeEnter?: () => string
}

export default (): ReactElement => {
	const [isAuthenticated, isAuthenticatedSet] = useState(false)
	const location = useLocation()

	const login = (): void => {
		isAuthenticatedSet(true)
	}
	const logout = (): void => {
		isAuthenticatedSet(false)
	}

	const authenticationGuard = (): string => {
		if (!isAuthenticated) return '/login'
		return ''
	}
	const guestGuard = (): string => {
		if (isAuthenticated) return '/'
		return ''
	}

	const routes = [
		{
			path: '/',
			exact: true,
			component: <Dashboard logout={logout} />,
			beforeEnter: authenticationGuard
		},
		{
			path: '/login',
			exact: true,
			component: <SignIn login={login} />,
			beforeEnter: guestGuard
		},
		{ path: '*', component: <PageNotFound /> }
	]

	return (
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/login">Sign in</Link>
				</li>
			</ul>
			<span style={{ margin: '30px' }}>{`${isAuthenticated}`}</span>

			<Switch>
				{routes.map((route: RouteOptions) => {
					if (route?.beforeEnter && route.beforeEnter() && route.path === location.pathname) {
						return <Redirect key={route.path} to={{ pathname: route.beforeEnter() }} />
					}
					return (
						<Route key={route.path} exact={route.exact} path={route.path}>
							{route.component}
						</Route>
					)
				})}
			</Switch>
		</div>
	)
}
