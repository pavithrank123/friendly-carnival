import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {isNull, isEmpty, get} from 'lodash';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BackIcon} from '@assets/';
import {AppColors} from '@branding/';

const ActionBarView = props => {
  const {actionBarTitle, hideBackIcon,textColorTheme,backIconImage = BackIcon} = props;
  const onBackButtonClick = () => {
    const {handleBackPress} = props;
    handleBackPress();
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.headerText,{color:textColorTheme}]}>{actionBarTitle}</Text>
      {!hideBackIcon && <View style={styles.endLayout} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    resizeMode: 'stretch',
    height: 25,
    width: 25,
    justifyContent: 'flex-start',
    marginStart: 10,
  },
  headerText: {
    fontSize: 18,
    marginLeft: 10,
    flexGrow: 1,
    alignSelf:'center',
    color: AppColors.black,
    fontFamily: 'Helvetica',
  },
  endLayout: {
    marginRight: 20,
  },
});

export default ActionBarView;
