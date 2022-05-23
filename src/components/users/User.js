import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link, useParams } from 'react-router-dom';
import Repos from '../repos/Repos';
import GitHubContext from '../../context/github/GitHubContext';

const User = () => {
    const githubContext = useContext(GitHubContext);
    const { login } = useParams();

    useEffect(() => {
        githubContext.getUser(login);
        githubContext.getRepos(login)
        // eslint-disable-next-line
    }, [])

    // User Items from API
    const { 
        name, avatar_url, location, blog,
        bio, html_url, followers, following,
        public_repos, public_gists, hireable, company
    } = githubContext.user;
         
        if(githubContext.loading) return <Spinner />
        return (
        <Fragment>
            <Link to='/' className='btn btn-light'>Search</Link>
            Hireable: {' '}
            {hireable ? 
                (<i className='fas fa-check text-success'/>) 
                :
                (<i className='fas fa-times-circle text-error' />)
            }

            <div className="card grid-2">
                <div className="all-center">
                    <img 
                        src={ avatar_url } className='round' alt={`${login}'s Pfp`} 
                        style={ {width: '100px'}}
                    />
                    <h1>{ name }</h1>
                    <p>Location: { location }</p>
                </div>
                <div>
                    {bio && 
                        (<Fragment>
                            <h3>Bio</h3>
                            <p>{ bio }</p>
                        </Fragment>)
                    }
                    <a href={html_url} className='btn btn-dark my-1'>
                        Github Profile
                    </a>

                    <ul>
                        <li>
                            {login && 
                                <Fragment>
                                    <span style={{ fontWeight: '700' }}>Username:</span> {login}
                                </Fragment>
                            }
                        </li>

                        <li>
                            {blog && 
                                <Fragment>
                                    <span style={ { fontWeight: '700' } }>Website:</span> {blog}
                                </Fragment>
                            }
                        </li>

                        <li>
                            {company && 
                                <Fragment>
                                    <span style={ { fontWeight: '700' } }>Company:</span> {company}
                                </Fragment>
                            }
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-primary">Following: {following}</div>
                <div className="badge badge-primary">Public Repos: {public_repos}</div>
                <div className="badge badge-primary">Public Gists: {public_gists}</div>
            </div>

            <Repos />
        </Fragment>
    )
}
export default User;
