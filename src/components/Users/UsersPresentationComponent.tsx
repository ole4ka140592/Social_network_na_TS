import classes from './Users.module.css'
import userPhoto from "../../assets/images/user.png"
import React from "react";
import {UsersPageStateType, UserType} from "../../redux/usersReducer";


type UsersPresentationComponentPropsType = {
    onPageChanged: (pageNumber: number)=> void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    unfollow: (userID: number) => void
    follow: (userID: number) => void
    users: Array<UserType>
}

export const UsersPresentationComponent = (props: UsersPresentationComponentPropsType) => {

        let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <span>{pages.map(m => <span className={props.currentPage === m ? classes.selectedPage : ""}
                onClick={(e)=> {props.onPageChanged(m)}}>{m}</span>)}
                </span>
                {
                    props.users.map(m =>
                        <div key={m.id}>
                        <span>
                            <div>
                                <img src={m.photos.small !== null ? m.photos.small : userPhoto} alt=""
                                     className={classes.photo}/>
                            </div>
                            <div>
                                {m.followed
                                    ? <button onClick={() => {
                                        props.unfollow(m.id)
                                    }}>Follow</button>
                                    : <button onClick={() => {
                                        props.follow(m.id)
                                    }}>Unfollow</button>
                                }
                            </div>
                        </span>
                            <span>
                            <span>
                                <div>{m.name}</div>
                                <div>{m.status}</div>
                            </span>
                            <span>
                                <div>{"m.location.country"}</div>
                                <div>{"m.location.city"}</div>
                            </span>
                        </span>


                        </div>)
                }
            </div>
        )
    }