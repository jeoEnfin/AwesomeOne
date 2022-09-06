import React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native';
import { getAvatar,ringColor} from '../../Utils';

const Avatar = ({ uri = "", style = {}, level = 0, ...props }) => {
  const url = validUrl(uri)
    ? { uri }
    : getAvatar(uri);
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image
        {...props}
        resizeMode="cover"
        style={[
          {
            width: 45,
            height: 45,
            borderRadius: 45 / 2,
            borderWidth: 2,
            borderColor: ringColor(level),
          },
          style,
        ]}
        source={url}
      />
    </View>
  );
};

function validUrl(url = "") {
  const expression = new RegExp(/^https?:\/\//g);
  return !!url?.match(expression) || false
}

export default Avatar;
