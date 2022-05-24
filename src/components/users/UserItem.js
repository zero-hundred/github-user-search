import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ( {user: {login, avatar_url}} ) => {
    return (
        <div className='card text-center'>
            <img src={avatar_url} 
            alt='userImage' className='round avatar_img'
            />

            <h3>{ login }</h3>

            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm mar_y-1">
                    More
                </Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserItem;