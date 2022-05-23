import { useContext } from 'react';
import GitHubContext from '../../context/github/GitHubContext';

const Alert = () => {
    const githubContext = useContext(GitHubContext);
    return (
        githubContext.alert !== null && (
            <div className={ `alert alert-${ githubContext.alert.theme }` }>
               <i className="fas fa-info-circle" /> { githubContext.alert.msg }
            </div>
        )
    );
}

export default Alert;