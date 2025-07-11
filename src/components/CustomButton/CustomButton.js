import { Pressable, Text, Image } from 'react-native';
import React from 'react';
import styles from './CustomButton.style';

const CustomButton = ({
  onPress,
  buttonText = 'default',
  buttonStyle = {},
  buttonTextStyle = {},
  imageStyle = {},
  source,
  isTextOnly = false, // 👈 Ekledik
}) => {
  // Eğer sadece Text gösterilmek isteniyorsa
  if (isTextOnly) {
    return (
      <Text onPress={onPress} style={buttonTextStyle}>
        {buttonText}
      </Text>
    );
  }

  // Normal buton yapısı
  return (
    <Pressable onPress={onPress} style={[styles.defaultButton, buttonStyle]}>
      {source && (
        <Image
          style={[styles.defaultButtonImageStyle, imageStyle]}
          source={source}
        />
      )}
      <Text style={[styles.defaultButtonText, buttonTextStyle]}>
        {buttonText}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
