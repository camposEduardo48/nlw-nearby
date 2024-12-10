import { Pressable, PressableProps, Text } from 'react-native'
import s from './styles'

type Props = PressableProps & {
  iconId?: string
  isSelected?: boolean
  name: string
}

const Category = ({ name, iconId, isSelected = false, ...rest }: Props) => {
  return (
    <Pressable style={[s.container]}>
      <Text style={[s.name]}>{name}</Text>
    </Pressable>
  )
}

export default Category
