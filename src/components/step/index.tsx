import { IconProps } from '@tabler/icons-react-native'
import { Text, View } from 'react-native'
import { colors } from '../../styles/theme'
import s from './styles'

interface TypeStep {
  title: string
  description: string
  icon: React.ComponentType<IconProps>
}

const Step = ({ title, description, icon: Icon }: TypeStep) => {
  return (
    <View style={s.container}>
      {Icon && <Icon size={32} color={colors.red.base}></Icon>}
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  )
}

export default Step
