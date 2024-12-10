import { ActivityIndicator } from 'react-native'
import { colors } from '../../styles/theme'
import { s } from './styles'

const Loading = () => {
  return <ActivityIndicator color={colors.green.base} style={s.container} />
}
export default Loading
