import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native'
import { Text, View } from 'react-native'
import Step from '../step/index'
import s from './styles'

const Steps = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona: {'\n'}</Text>
      <Step
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
      />
      <Step
        icon={IconQrcode}
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
      />
      <Step
        icon={IconTicket}
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento "
      />
    </View>
  )
}

export default Steps
