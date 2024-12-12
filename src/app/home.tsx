import Places from '@/src/components/places'
import { colors, fontFamily } from '@/src/styles/theme'
import * as Location from 'expo-location'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import { Categories, CategoriesProps } from '../components/categories'
import { PlaceProps } from '../components/place'
import { api } from '../services/api'

type MarketProps = PlaceProps & {
  latitude: number
  longitude: number
}

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

  const getCurrentLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync() //verificar permissao para usar a localização do usuário
      // if (granted) {
      //   await Location.getCurrentPositionAsync()
      // }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCurrentLocation()
    fetchCategories()
  }, [])

  // fetchMarkets() => será executado dependendo do estado do "category"
  useEffect(() => {
    fetchMarkets()
  }, [category])

  return (
    <View style={{ flex: 1, backgroundColor: '#cecece' }}>
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
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={require('@/assets/images/location.png')}
        />
        {markets.map((item) => (
          <Marker
            key={item.id}
            identifier={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            image={require('@/assets/images/pin.png')}
          >
            <Callout onPress={() => router.navigate(`/market/${item.id}`)}>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.gray[600],
                    fontFamily: fontFamily.medium,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.gray[600],
                    fontFamily: fontFamily.regular,
                  }}
                >
                  {item.address}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Places data={markets} />
    </View>
  )
}

export default Home
