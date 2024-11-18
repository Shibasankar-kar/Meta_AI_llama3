import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {CheckBadgeIcon, HomeIcon} from 'react-native-heroicons/solid';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomText from './CustomText';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.subContainer}>
          <TouchableOpacity>
            <HomeIcon size={RFValue(20)} color="white" />
          </TouchableOpacity>
          <View style={styles.midContainer}>
            <Image
              source={require('../assets/logo_s.jpeg')}
              style={styles.img}
            />
            <View>
              <CustomText fontWeight={600} size={RFValue(13)}>
                Meta AI <CheckBadgeIcon color="#27d366" size={RFValue(12)} />
              </CustomText>
              <CustomText opacity={0.7} fontWeight={500} size={RFValue(9)}>
                With Llama 3
              </CustomText>
            </View>
          </View>
          <TouchableOpacity>
            <CustomText size={RFValue(12)}> Clear</CustomText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'rgba(20,25,46,1)',
    borderBottomWidth: 0.18,
    borderBottomColor: 'rgba(62,62,63,1)',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  img: {height: 30, width: 30, resizeMode: 'contain', borderRadius: 40},
  midContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCont: {flexDirection: 'row'},
  topText: {color: 'white', fontWeight: '600'},
  bottomText: {color: 'white', fontWeight: '400'},
});
