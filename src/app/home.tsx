import Places from '@/src/components/places'
import { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { Categories, CategoriesProps } from '../components/categories'
import { PlaceProps } from '../components/place'
import { api } from '../services/api'

type MarketProps = PlaceProps & {}

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
      console.log(data)
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
      <Places data={markets} />
    </View>
  )
}

export default Home
