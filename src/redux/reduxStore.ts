import {combineReducers, createStore} from "redux";
import {AddPostType, profileReducer, ProfileReducerType, UpdateNewPostTextType} from "./profileReducer";
import {dialogsReducer, SendMessageAC, UpdateNewMessageBodyAC} from "./dialogsReducer";
import {sidebarReducer, SidebarType} from "./sidebarReducer";
import {usersReducer, UsersReducerType} from "./usersReducer";
import {authReducer, AuthReducerType} from "./authReducer";


export type ActionsTypes = AddPostType
    | UpdateNewPostTextType
    | UpdateNewMessageBodyAC
    | SendMessageAC
    | ProfileReducerType
    | AuthReducerType
|UsersReducerType


export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export let store = createStore(rootReducer)

// @ts-ignore
window.store = store