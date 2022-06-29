import { createContext, useReducer } from "react";
// Removed as reducer is being used
// import { useState } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
	// Removed as reducer is being used
	// const [users, setUsers] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);

	const initialState = {
		users: [],
		isLoading: false,
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


	const searchUsers = async (text) => {
		setLoading();

		const params = new URLSearchParams({
			q: text
		})
	
		const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
				headers: {
					Authorization: `token ${GITHUB_TOKEN}`
				}
		});

		// const data = await response.json();
		const { items } = await response.json();

		// Removed as reducer is being used
		// setUsers(data);
		// setIsLoading(false);

		dispatch({
			type: 'GET_USERS',
			// payload: data,
			payload: items,
		});
	};

	// Clear Users from State
	const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

	// Set Loading
	const setLoading = () => dispatch({type: 'SET_LOADING'});

	return (
		<GithubContext.Provider value={{
			// Removed as reducer is being used
			// users,
			// isLoading,
			
			users: state.users,
			isLoading: state.isLoading,
			// fetchUsers,
			searchUsers,
			clearUsers,
		}}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;