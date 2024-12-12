import Places from '@/src/components/places'
import { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import MapView from 'react-native-maps'
import { Categories, CategoriesProps } from '../components/categories'
import { PlaceProps } from '../components/place'
import { api } from '../services/api'

type MarketProps = PlaceProps & {}

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
}

const Home = () => {
  const [categories, setCategories] = useState<CategoriesProps>([])
  const [category, setCategory] = useState('')
  const [markets, setMarkets] = useState<MarketProps[]>([])

  const fetchCategories = async () => {
    try {
      const { data } = await api.get('/categories')
      setCategories(data)
      setCategory(data[0].id)
      console.log(data)
    } catch (err) {
      console.log(err)
      Alert.alert('Categorias', 'Não foi possivel carregar as categorias.')
    }
  }

  const fetchMarkets = async () => {
    try {
      if (!category) {
        return // mata a função caso não tenha nada em "category"
      }

      const { data } = await api.get(`/markets/category/${category}`)
      setMarkets(data)
    } catch (err) {
      console.log(err)
      Alert.alert('Locais')
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  // fetchMarkets() => será executado dependendo do estado do "category"
  useEffect(() => {
    fetchMarkets()
  }, [category])

  return (
    <View style={{ flex: 1 }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01, //zoom inicial do mapa
          longitudeDelta: 0.01, //zoom inicial do mapa
        }}
      />
      <Places data={markets} />
    </View>
  )
}

export default Home
