import React, { useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ScreenContainer from "../Common/ScreenContainer";
import {Text} from 'react-native';
import UserInfoScreen from './UserInfoScreen';
import UserActions from '../../Redux/Actions/UserActions';
import {get} from 'lodash';

const UserInfoContainer =  (props) => {

    const dispatch = useDispatch();
    const responseData = useSelector(state =>get(state, 'userDetails.data'));
    const apiLoading = useSelector(state => get(state, 'userDetails.isLoading'));

    useEffect(()=> {
        dispatch(UserActions.handleOnLoanDetailsRequest());
    },[]);
    return (
    <ScreenContainer>
        <UserInfoScreen userInformation={responseData} apiLoading={apiLoading}/>
    </ScreenContainer>
    )
}

export default UserInfoContainer;  