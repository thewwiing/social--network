import React from 'react'
import styles from "./Users.module.css";
import userPhoto from '../assets/images/user.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    // debugger
    return (
        <div>
            <div>
                {
                    pages.map(p => (

                        <span className={ props.currentPage === p && styles.selectedPage }
                              onClick={(e) => { props.onPageChanged(p) } }

                        >{p} </span>
                    ))
                }
            </div>
            {
                props.usersData.map(u => (
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={ "/profile/" + u.id }>
                                    <img src={u.photos.small ? u.photos.small: userPhoto}
                                         className={styles.userPhoto} alt=""
                                    />
                                </NavLink>
                            </div>
                            <div>

                                {   u.followed
                                    ? <button disabled={props.followingInProgress
                                        .some(id => id === u.id)}
                                              onClick={() => {props.unfollow(u.id)}}
                                    >Unfollow</button>

                                    : <button disabled={props.followingInProgress
                                        .some(id => id === u.id)}
                                              onClick={() => {props.follow(u.id)}}
                                    >Follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                            </span>
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default Users
