import { StyleSheet, Dimensions } from 'react-native';
import { colors, spacing, fonts } from '../../theme/index';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
  defaultTextInput: {
    borderRadius: 15,
    width: SCREEN_WIDTH * 0.8,  
    maxWidth: 400,             
    height: 55,
    borderWidth: 0.3,
    borderColor: colors.textPrimary,
    textAlign: 'left',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: fonts.sizes.medium,
    color: colors.textPrimary,
    paddingHorizontal: spacing.medium,
    margin: 5,
  },
  defaultTextInputText: {
    color: colors.primary,
    fontSize: fonts.sizes.large,
  },
});
