import { StyleSheet } from "react-native";
import { colors, spacing, fonts } from "../../theme/index";

export default StyleSheet.create({
  defaultTextInput: {
    borderRadius: 10,
    width: 300,
    height: 60,
    borderWidth: 0.5, 
    borderColor: colors.textPrimary,
    textAlign: 'left',
    textAlignVertical: 'center', 
    fontWeight: 'bold',
    fontSize: fonts.sizes.medium,
    color: colors.primary,
    paddingHorizontal: spacing.medium,
  },
  defaultTextInputText: {
    color: colors.primary,
    fontSize: fonts.sizes.large,
  },
});

