import React from 'react'
import BlackPath from './black-path';

export default function notesWrapper(Component) {
	// return a newly generated React component
	// using a functional, stateless component
	return function(props) {
		// pass in the user variable as a property, along with
		// all the other props that we might be given
		return <BlackPath {...props} />
	}
}
