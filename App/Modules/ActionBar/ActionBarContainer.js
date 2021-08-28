import React from 'react';
import {StyleSheet, View} from 'react-native';
import ActionBarView from './ActionBarView';
import {AppColors} from '@branding/';

const ActionBarContainer = props => {
  const {
    titleName,
    hideBackIcon,
    handleBackButtonPress,
    background = AppColors.white,
    textColorTheme = AppColors.black,
    backIcon,
  } = props;

  const handleBackPress = () => {
    handleBackButtonPress();
  };

  return (
    <View
      style={{ backgroundColor: background}}>
      <ActionBarView
        actionBarTitle={titleName}
        handleBackPress={handleBackPress}
        hideBackIcon={hideBackIcon}
        textColorTheme={textColorTheme}
        backIconImage={backIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ActionBarContainer;
