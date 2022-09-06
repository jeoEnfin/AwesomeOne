import React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native';

const Avatar = ({ url = "" ,style}) => {
  
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image
        resizeMode="cover"
        style={[
          {
            width: 45,
            height: 45,
            borderRadius: 45 / 2,
            borderWidth: 2,
           ...style
          },
         
        ]}
        source={url}
      />
    </View>
  );
};

export default Avatar;
