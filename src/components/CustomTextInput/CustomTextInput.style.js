import { StyleSheet } from "react-native";
import { colors, spacing, fonts } from "../../theme/index";

export default StyleSheet.create({
  defaultTextInput: {
    borderRadius: 15,
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: colors.primary, 
    textAlign: 'center',
    textAlignVertical: 'center', 
    fontWeight: 'bold',
    fontSize: fonts.sizes.large,
    color: colors.primary,
    paddingHorizontal: spacing.medium, 
  },
  defaultTextInputText: {
    color: colors.primary,
    fontSize: fonts.sizes.large,
  },
});
