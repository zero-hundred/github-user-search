/* eslint-disable import/no-anonymous-default-export */
import {SEARCH_USERS, SET_ALERT, SET_LOADING,
    GET_REPOS, GET_USERS, CLEAR_USERS, REMOVE_ALERT} from '../_actions';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS: 
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case GET_USERS:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }        
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        case SET_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case REMOVE_ALERT:
            return {
                ...state,
                alert: null
            }
        default:
            return state;
    }
}