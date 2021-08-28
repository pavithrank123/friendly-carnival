import React, { useEffect } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { get,isEmpty } from 'lodash';
import { AppColors } from '@branding/';


const RepaymentItem = (props) => {

    const {repaymentEntity} = props;

    return (
    <View style={styles.card}>
        <View style={styles.content}>
            <Text style={styles.header} >{get(repaymentEntity,"Date")}</Text>
            <Text style={styles.contextText}>₹ {get(repaymentEntity,"Amount")}</Text>
        </View>
        <View style={styles.divider}/>
    </View>)

}

const styles = StyleSheet.create({
    card : {
      flex: 1,
      borderRadius: 5,
      elevation: 10,
      marginTop: 10 ,
      marginRight: 10,
      marginVertical: 5,
      backgroundColor: AppColors.white
    },
    header: {
        fontSize: 14,
        flexGrow: 1,
    },
    content: {
        flexDirection:'row',
        color: AppColors.materialBlueColor,
    },
    contextText:{
        color: AppColors.materialBlueColor,
        fontSize: 16,
    },
    divider:{
        backgroundColor:AppColors.mediumGreyVariant5,
        width:1,
        marginTop: 10,
    },
});


export default RepaymentItem;