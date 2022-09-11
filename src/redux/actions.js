 import * as types  from './actiontypes'
import {auth} from '../Utils/firebase'

 export const addtobasket = (item) =>({
type:types.ADD_TO_BASKET,
payload: item,
 });
const  registerStart= () => ({  
type: types.REGISTER_START

})
const registerSuccess = (user) => ({
    type:types.REGISTER_SUCCESS, 
    payload:user
})
const registerError = (error) => ({
    type: types.REGISTER_FAIL, 
    payload: error
})
const  LoginStart= () => ({
    type: types.LOGIN_START
    })
    const LoginSuccess = (user) => ({
        type:types.LOGIN_SUCCESS, 
        payload:user
    })
    const LoginError = (error) => ({
        type: types.LOGIN_FAIL, 
        payload: error
    })

    const  LogoutStart= () => ({
        type: types.LOGOUT_START
        })
        const LogoutSuccess = () => ({
            type:types.LOGOUT_SUCCESS, 
           
        })
        const LogoutError = (error) => ({
            type: types.LOGOUT_FAIL, 
            payload: error
        })
    export const setuser= (user) =>({
        type: types.SET_USER,
        payload: user
    })
export const registerInitiate= (email, password) => {
    return function (dispatch) {
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email,password).then(({user})=> {
            dispatch(registerSuccess(user));
        })
        .catch((error) => dispatch(registerError(error.message)))
    };
}
 
export const LoginInitiate= (email, password) => {
    return function (dispatch) {
        dispatch(LoginStart());
        auth.signInWithEmailAndPassword(email,password).then(({user})=> {
            dispatch(LoginSuccess(user));
        })
        .catch((error) => dispatch(LoginError(error.message)))
    };
}


export const logOutInitiate = () => {
    return function (dispatch) {
        dispatch(LogoutStart())
        auth.signOut().then((resp) => dispatch(LogoutSuccess())).catch((error) => dispatch(LogoutError(error.message)))
            
        }
      
    }

 