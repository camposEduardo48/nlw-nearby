import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  useFonts,
} from '@expo-google-fonts/rubik'
import { Stack } from 'expo-router'
import Loading from '../components/loading/index'
import { colors } from '../styles/theme' // verificar o alias

const Layout = () => {
  const [fontsLoaded] = useFonts({
    // dessa forma só renderiza o app quando a fonte for carregada
    // useFont => é o metodo que garante e é usado para carregar as fontes
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  })
  if (!fontsLoaded) {
    return <Loading />
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] },
      }}
    />
  )
}
export default Layout
