import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: [],
    isFollowingInProgress: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if(u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                }),
            }

        case UNFOLLOW:

            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if(u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                }),
            }
        case SET_USERS:
            return { ...state, usersData: action.users }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount}

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFetching,
                followingInProgress: action.isFetching
                    ? [ ...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state
    }

}
export let followSuccess = (userId) => ( {type: FOLLOW, userId} )
export let unfollowSuccess = (userId) => ( {type: UNFOLLOW, userId} )
export let setUsers = (users) => ( {type: SET_USERS, users} )
export let setCurrentPage = (currentPage) => ( {type: SET_CURRENT_PAGE, currentPage} )
export let setTotalCount = (totalCount) => ( {type: SET_TOTAL_USERS_COUNT , totalCount} )
export let toggleIsFetching = (isFetching) => ( {type: TOGGLE_IS_FETCHING , isFetching} )
export let toggleFollowingProgress = (isFetching, userId) => ( {type: TOGGLE_IS_FOLLOWING_PROGRESS , isFetching, userId} )

export const getUserThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch( toggleFollowingProgress(true, userId) )
        usersAPI.follow(userId)
            .then(data => {
                if(data.resultCode === 0){
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch( toggleFollowingProgress(true, userId) )
        usersAPI.unfollow(userId)
            .then(data => {
                if(data.resultCode === 0){
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export default usersReducer
