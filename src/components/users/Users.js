import { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/spinner/Spinner';
import GitHubContext from '../../context/github/GitHubContext'


const Users = () => {
    const githubContext = useContext(GitHubContext);
    const { loading, users } = githubContext;

    // While results are fetched shows spinner
    if(loading) {
        return <Spinner />
    } else {
        // Displays results
        return (
            <div className='grid-3'>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }

}
export default Users;