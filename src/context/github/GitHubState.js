import axios from 'axios';
import React, { useReducer } from 'react';
import GitHubContext from './GitHubContext';
import GitHubReducer from './GitHubReducer';
import {SEARCH_USERS, SET_ALERT, SET_LOADING,
GET_REPOS, GET_USERS, CLEAR_USERS, REMOVE_ALERT} from '../_actions';

const GitHubState = props => {
    const initState = {
        users: [],
        user: {},
        repos: [],
        alert: null,
        loading: false
    }

    const [ state, dispatch ] = useReducer(GitHubReducer, initState);

    // Search
    const searchUsers = async text => {
        setLoading();
        
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        
        dispatch({ 
            type: SEARCH_USERS,
            payload: res.data.items
        })
      }
    // Clear
    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS
        })
    }

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })
    
    // Get User
    const getUser = async username => {
        setLoading()
        
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    }

    const getRepos = async username => {
        setLoading(true)
        
        const res = await axios.get(`https://api.github.com/users/${username}
        /repos?per_page=5&sort=created:asc&client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }
    const clearAlertMsg = () => {
        dispatch({
            type: REMOVE_ALERT
        })
    }

    const setAlertMsg = (msg, theme) => {
        dispatch({
            type: SET_ALERT,
            payload: {msg: msg, theme: theme}
        })
        setTimeout(() => clearAlertMsg(), 5000);
    }

    return <GitHubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
        setAlertMsg
    }}>
        { props.children }
    </GitHubContext.Provider>
}

export default GitHubState;