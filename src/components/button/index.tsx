import { colors } from '@/src/styles/theme'
import { IconProps as TablerIconProps } from '@tabler/icons-react-native'
import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import s from './styles'

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

const Button = ({
  children,
  style,
  isLoading = false,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[s.container, style]}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}
const Title = ({ children }: TextProps) => {
  return <Text style={s.title}>{children}</Text>
}

type IconProps = {
  icon: React.ComponentType<TablerIconProps>
}

const Icon = ({ icon: Icon }: IconProps) => {
  return <Icon size={24} color={colors.gray[100]} />
}

Button.Title = Title
Button.Icon = Icon

export default Button
