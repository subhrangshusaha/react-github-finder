import { createContext, useReducer } from "react";
// Removed as reducer is being used
// import { useState } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

// Not required anymore as functions have been moved to GithubActions.js
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
	// Removed as reducer is being used
	// const [users, setUsers] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);

	const initialState = {
		users: [],
		user: {},
		isLoading: false,
		repos: [],
	};

	const [state, dispatch] = useReducer(githubReducer, initialState);

	// Only used for dev work
	// const fetchUsers = async () => {
	// 	setLoading();
	// 	const response = await fetch(`${GITHUB_URL}/users`, {
	// 			headers: {
	// 				Authorization: `token ${GITHUB_TOKEN}`
	// 			}
	// 	});

	// 	const data = await response.json();

	// 	// Removed as reducer is being used
	// 	// setUsers(data);
	// 	// setIsLoading(false);

	// 	dispatch({
	// 		type: 'GET_USERS',
	// 		payload: data
	// 	});
	// };


	// Search for matching Users - added to GithubActions.js
	// const searchUsers = async (text) => {
	// 	setLoading();

	// 	const params = new URLSearchParams({
	// 		q: text
	// 	})

	// 	const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
	// 			headers: {
	// 				Authorization: `token ${GITHUB_TOKEN}`
	// 			}
	// 	});

	// 	// const data = await response.json();
	// 	const { items } = await response.json();

	// 	// Removed as reducer is being used
	// 	// setUsers(data);
	// 	// setIsLoading(false);

	// 	dispatch({
	// 		type: 'GET_USERS',
	// 		// payload: data,
	// 		payload: items,
	// 	});
	// };

	// Get single user profile - added to GithubActions.js
	// const getUser = async (login) => {
	// 	setLoading();

	// 	const response = await fetch(`${GITHUB_URL}/users/${login}`, {
	// 			headers: {
	// 				Authorization: `token ${GITHUB_TOKEN}`
	// 			}
	// 	});

	// 	if(response.status === 404) {
	// 		window.location = '/notfound'
	// 	} else {
	// 		const data = await response.json();

	// 		dispatch({
	// 			type: 'GET_USER',
	// 			payload: data,
	// 		});
	// 	}
	// };

	// Get User Repos - added to GithubActions.js
	// const getRepos = async (login) => {
	// 	setLoading();

	// 	const params = new URLSearchParams({
	// 		sort: 'created',
	// 		per_page: 10,
	// 	})

	// 	const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
	// 			headers: {
	// 				Authorization: `token ${GITHUB_TOKEN}`
	// 			}
	// 	});

	// 	const data = await response.json();

	// 	dispatch({
	// 		type: 'GET_REPOS',
	// 		payload: data,
	// 	});
	// };

	// Clear Users from State - not required anymore
	// const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

	// Set Loading - not required anymore
	// const setLoading = () => dispatch({type: 'SET_LOADING'});

	return (
		<GithubContext.Provider value={{
			// Removed as reducer is being used
			// users,
			// isLoading,

			// users: state.users,
			// isLoading: state.isLoading,
			// user: state.user,
			// repos: state.repos,

			...state,

			// fetchUsers,
			// searchUsers,
			// clearUsers,
			// getUser,
			// getRepos,

			dispatch,
		}}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;