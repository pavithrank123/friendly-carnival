import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {AppColors} from '@branding/';

const ScreenContainer = props => {
  const {children} = props;
  const {safeAreaBackground = AppColors.white} = props;

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={{flex: 0, backgroundColor: safeAreaBackground}} />
      <SafeAreaView style={{flex:1, backgroundColor: AppColors.white}}>
        <View style={styles.containerStyle}>{children}</View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: AppColors.mediumGreyVariant1,
  },
  mainContainer:{
    flex:1,
  }
});

export default ScreenContainer;
