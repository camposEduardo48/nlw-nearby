import { categoriesIcons } from '@/src/utils/categories-icons'
import { Pressable, PressableProps, Text } from 'react-native'
import { colors } from '../../styles/theme'
import s from './styles'

type Props = PressableProps & {
  name: string
  iconId: string
  isSelected?: boolean
}

const Category = ({ name, iconId, isSelected = false, ...rest }: Props) => {
  const Icon = categoriesIcons[iconId]
  return (
    <Pressable style={[s.container, isSelected && s.containerSelected]}>
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
    </Pressable>
  )
}

export default Category
