import { Button, Container, CssBaseline, Grid } from '@material-ui/core'
import React, { ReactElement } from 'react'

interface DashboardProps {
	logout: () => void
}

export default (props: DashboardProps): ReactElement => {
	const { logout } = props
	return (
		<Container component="main" maxWidth="lg">
			<CssBaseline />
			<div>Dashboard!</div>
			<Grid container>
				<Grid item xs>
					<Button type="submit" variant="contained" color="primary" onClick={logout}>
						Sign out
					</Button>
				</Grid>
			</Grid>
		</Container>
	)
}
