import { StyleSheet } from "react-native";
import { colors, spacing, fonts } from "../../theme/index";

export default StyleSheet.create({
  defaultTextInput: {
    borderRadius: 15,
    width: 300,
    height: 55,
    borderWidth: 0.3, 
    borderColor: colors.textPrimary,
    textAlign: 'left',
    textAlignVertical: 'center', 
    fontWeight: 'bold',
    fontSize: fonts.sizes.medium,
    color: colors.primary,
    paddingHorizontal: spacing.medium,
    margin:5,
  },
  defaultTextInputText: {
    color: colors.primary,
    fontSize: fonts.sizes.large,
  },
});

