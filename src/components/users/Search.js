import { useContext, useState } from 'react';
import GitHubContext from '../../context/github/GitHubContext';

const Search = () => {
    const githubContext = useContext(GitHubContext);

    const [text, setText] = useState('');

    const onChange = (e) => setText(e.target.value);

    const showClear = githubContext.users.length > 0 && true;

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            githubContext.setAlertMsg('Please enter a username...', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    return (
        <div>
            <form  className='form' onSubmit={ onSubmit }>
                <input type="text" name='text' 
                value={ text } 
                onChange={ onChange }
                placeholder='Search GitHub Users...' />

                <input type="submit" value="Search" className='btn btn-dark btn-block' />
            </form>
            
            {showClear  && 
                <button className="btn btn-light btn-block" onClick={ githubContext.clearUsers }>
                    Clear
                </button>
            }

        </div>
    )
}
export default Search
