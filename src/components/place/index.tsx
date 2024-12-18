import { colors } from '@/src/styles/theme'
import { IconTicket } from '@tabler/icons-react-native'
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'
import s from './styles'

export type PlaceProps = {
  id: string
  name: string
  description: string
  coupons: number
  cover: string
  address: string
}

type Props = TouchableOpacityProps & {
  data: PlaceProps
}

export const Place = ({ data, ...rest }: Props) => {
  return (
    <TouchableOpacity style={s.container} {...rest}>
      <Image style={s.image} source={{ uri: data.cover }} />
      <View style={s.content}>
        <Text style={s.name}>{data.name}</Text>
        <Text style={s.description}>
          {data.description.length > 30
            ? `${data.description.substring(0, 50).trim()}...`
            : data.description}
        </Text>
        <View style={s.footer}>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={s.tickets}>{data.coupons}cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
