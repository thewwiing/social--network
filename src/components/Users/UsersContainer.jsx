import React from 'react'
import {connect} from "react-redux";
import {
    follow, getUserThunkCreator,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";



class UsersContainer extends React.Component{
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUserThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   usersData={this.props.usersData}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />

        </>
    }

}
let WithRedirectComponent = withAuthRedirect(UsersContainer)

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
        followingInProgress: state.usersPage.followingInProgress

    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => { dispatch(followAC(userId)) },
//         unfollow: (userId) => { dispatch(unfollowAC(userId)) },
//         setUsers: (users) => { dispatch(setUsersAC(users))},
//         setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)) },
//         setTotalCount: (totalCount) => { dispatch(setTotalCountAC(totalCount)) },
//         toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingAC(isFetching)) },
//     }
// }

// export default connect(mapStateToProps,
//     {   follow, unfollow, setCurrentPage,
//         toggleFollowingProgress, getUserThunkCreator
//     })
// (WithRedirectComponent)

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {   follow, unfollow, setCurrentPage,
            toggleFollowingProgress, getUserThunkCreator
        })
)(WithRedirectComponent)


