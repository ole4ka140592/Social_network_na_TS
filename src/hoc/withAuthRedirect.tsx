import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";


type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
        isAuth: state.auth.isAuth
})

type OwnType = ComponentType & MapStateToPropsType

export function withAuthRedirect<T>(Component: any) {

    class RedirectComponent extends React.Component<OwnType> {
    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return <Component {...this.props}/>
    }

    }
debugger
    let ConnectedRedirectComponent = connect(mapStateToProps, null)(RedirectComponent)
    return ConnectedRedirectComponent
}
