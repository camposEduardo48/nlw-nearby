import { colors, fontFamily } from '@/src/styles/theme'
import { StyleSheet } from 'react-native'

const s = StyleSheet.create({
  container: {
    height: 36,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    gap: 10,
  },
  name: {
    fontSize: 14,
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
  },
  containerSelected: {
    backgroundColor: colors.green.base,
    borderWidth: 0,
  },
  nameSelected: {
    color: colors.gray[100],
  },
})

export default s
