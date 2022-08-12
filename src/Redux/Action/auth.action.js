import * as ActionType from '../ActionType'

export const SignUpUser = (data) => (dispatch) => {
    dispatch({type : ActionType.SIGNUP_USER, payload : data})
}

export const LoginUser = (data) => (dispatch) => {
    dispatch({type : ActionType.LOGIN_USER, payload : data})
}

export const LogginUser = (data) => (dispatch) => {
    dispatch({type : ActionType.LOGGIN_USER, payload : data})
}

export const LogoutUser = () => (dispatch) => {
    dispatch({type : ActionType.LOGOUT_USER})
}


export const LoggoutUser = () => (dispatch) => {
    dispatch({type : ActionType.LOGGOUT_USER})
}

export const EmailVerify = (user) => (dispatch) => {
    dispatch({type : ActionType.EMAIL_VERIFY, payload : user})
}