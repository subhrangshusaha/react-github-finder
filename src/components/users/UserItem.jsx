import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function UserItem({ user: {login, avatar_url}}) {
	return (
		<Link to={`/user/${login}`} className='link-hover'>
			<div className='card shadow-md compact side'>
				<div className="flex-row items-center space-x-4 card-body">
					<div className="avatar">
						<div className="rounded-full shadow w-14 h-14">
							<img src={avatar_url} alt="Profile" />
						</div>
					</div>
					<div>
						<h2 className="card-title">{login}</h2>
					</div>
				</div>
			</div>
		</Link>
	)
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired
}

export default UserItem;