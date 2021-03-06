import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";


type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
});

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<mapStateToPropsForRedirectType> = (props) => {
        let {isAuth, ...restProps} = props;
        debugger
        if (!isAuth) return <Redirect to='/login'/>

        return <WrappedComponent {...props as WCP & mapStateToPropsForRedirectType}/>

    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}