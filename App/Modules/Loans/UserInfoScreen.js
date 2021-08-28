import React, {useEffect} from 'react';
import {Text, View, ActivityIndicator, TouchableOpacity, StyleSheet, Image, LogBox} from 'react-native';
import { CustomerIcon , UserIcon} from '@assets/';
import {AppColors} from '@branding/';
import { get } from 'lodash';
import ActionBarContainer from '../ActionBar/ActionBarContainer';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import RepaymentItem from './RepaymentCard';

const UserInfoScreen = props => {

  const {userName = 'Hello', apiLoading = false, userInformation = ""} = props;

  let body;

  let title = get(userInformation, "loan1.title");

  if(apiLoading){
      body = (
        <View style={styles.containerStyle}>
          <ActivityIndicator
            style={styles.loader}
            animating={apiLoading}
            size="large"
            color={AppColors.ninjaGreen}
          />
      </View>
    )
  } else {

    let imageUrl = get(userInformation, "loan1.image.url")
    let imageDescription = get(userInformation,"loan1.image.label")

    let userDetails = get(userInformation,"loan1.Applicant Details")

    let loanDetails = get(userInformation,"loan1.Loan Terms")

    let repaymentDetails = get(userInformation, "loan1.Repayment Schedule")
    console.log(repaymentDetails);
    body  = (
      <View style={styles.container}>
      
      <View style={styles.userInformationCard}>
        <Image source={{uri:imageUrl}} style={styles.userIcon} />
        <Text style={styles.imageDescription}>{imageDescription} </Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          
          <View style={[styles.cardStyle,{backgroundColor: AppColors.white}]}>
            <View style={styles.helloTextHeader}>
              <Text style={styles.title}>Applicant Details </Text>
            </View>
            <View style={[styles.cardTitleName,{flexDirection:'row',marginTop: 10}]}>
              <View style={[{flexGrow: 1}]}>
                <Text style={{fontSize:12}}>Name</Text>
                <Text style={styles.cardValue}>{get(userDetails,"Name")}</Text>

                <Text style={{fontSize:12, marginTop: 10}}>Date of birth</Text>
                <Text style={styles.cardValue}>{get(userDetails,"Date of Birth")}</Text>

                <Text style={{fontSize:12, marginTop: 10}}>No of Dependents</Text>
                <Text style={styles.cardValue}>{get(userDetails,"No of Dependents")}</Text>

              </View>
              <View style={[{flexGrow: 1}]}>
                <Text style={{fontSize:12}}>Phone Number</Text>
                <Text style={styles.cardValue}>{get(userDetails,"Phone Number")}</Text>

                <Text style={{fontSize:12, marginTop: 10}}>Marital Status</Text>
                <Text style={styles.cardValue}>{get(userDetails,"Marital Status")}</Text>
              </View>
            </View>
          </View>

          <View style={[ styles.cardStyle]}>
            <View style={styles.helloTextHeader}>
              <Text style={styles.title}>Loan Terms </Text>
            </View>
            <View style={[styles.cardTitleName,{flexDirection:'row',marginTop: 10}]}>
              <View style={[{flexGrow: 1}]}>
                <Text style={{fontSize:12}}>Duration</Text>
                <Text style={styles.cardValue}>{get(loanDetails,"Duration")}</Text>

                <Text style={{fontSize:12, marginTop: 10}}>Interest Rate</Text>
                <Text style={styles.cardValue}>{get(loanDetails,"Interest Rate")}</Text>
              </View>
              <View style={[{flexGrow: 1}]}>
                <Text style={{fontSize:12}}>Loan Amount</Text>
                <Text style={styles.cardValue}>{get(loanDetails,"Loan Amount")}</Text>

                <Text style={{fontSize:12, marginTop: 10}}>Loan Product</Text>
                <Text style={styles.cardValue}>{get(loanDetails,"Loan Product")}</Text>
              </View>
            </View>
          </View>


          <View style={[ styles.cardStyle]}>
            <View style={styles.helloTextHeader}>
              <Text style={styles.title}>Repayment Schedule</Text>
            </View>
              <FlatList
                nestedScrollEnabled
                data={repaymentDetails}
                
                renderItem={({item}) => renderList(item)}
                />
          </View>

        </View>
      </View>
    </View>
    )
  }

  const renderList = item => {
    return <RepaymentItem repaymentEntity={item} />;
  };

  return (

    <View style={{backgroundColor: AppColors.mediumGreyVariant1, marginBottom: '10%'}}>
      <ActionBarContainer
        titleName={title}
        hideBackIcon={true}
        background={AppColors.greenVariant1}
        textColorTheme={AppColors.white}
      />
      <ScrollView
        alwaysBounceVertical={false}>
        {body}
      </ScrollView>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#f3f300',
    width: '150',
    height: '35',
  },
  innerContainer: {
    backgroundColor:AppColors.mediumGreyVariant1
  },
  loader:{},
  headingContainer: {},
  menuIcon: {
    width: 30,
    height: 30,
  },
  userInformationCard: {
    elevation: 5,
    margin: 5
  },
  userInfoCardContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  userIcon: {
    width: '100%',
    height: 180,
    alignSelf: 'center',
    backgroundColor: AppColors.mediumGreyVariant1,
    borderRadius: 10,

  },
  userNameText: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  designation: {
    marginLeft: 20,
  },
  helloTextHeader: {
    marginTop: 5,
    flexDirection: 'row',
  },
  imageDescription: {
    flex:1,
    fontSize: 14,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 2,
    color: AppColors.white,
    fontWeight: "bold",
  },title: {
    flex:1,
    fontSize: 18,
    fontWeight: 'bold'
  },
  titleName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'column',
  },
  cardStyle: {
    borderRadius: 2,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 5,
    backgroundColor: AppColors.white
  },
  cardIconStyle: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
  cardTitle: {
    marginTop: 10,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Helvetica',
  },
  cardValue: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Helvetica',
  },
  containerStyle: {
    marginTop: 120,
    alignContent: 'center',
    justifyContent: 'center',
  },
  cardTitleName: {
    justifyContent: 'flex-end',
  },
});

export default UserInfoScreen;
