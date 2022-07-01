import { useContext } from 'react';
// import { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

import GithubContext from '../../context/github/GithubContext';

function UserResults() {
	// Removed after adding Context
	// const [users, setUsers] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);
	
	// Removing fetchusers as it is only used for dev work
	// const {users, isLoading, fetchUsers} = useContext(GithubContext);
	const {users, isLoading} = useContext(GithubContext);

	// Only used for dev work
	// useEffect(() => {fetchUsers()}, []);

	
	// Removed after adding Context
	// const fetchUsers = async () => {
	// 	const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
	// 			headers: {
	// 				Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
	// 			}
	// 	});

	// 	const data = await response.json();

	// 	setUsers(data);
	// 	setIsLoading(false);
	// };

	
	if(!isLoading) {
		return (
			<div className='grid grid-cols-1 gap-8 mb-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
				{users.map(user => (
					// <h3 key={user.id}>{user.id}. {user.login}</h3>
					<UserItem key={user.id} user={user} />
				))}
			</div>
		)
	} else {
		return (
			<Spinner />
		)
	}


}

export default UserResults;