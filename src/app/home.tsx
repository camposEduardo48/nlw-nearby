import { useEffect, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { Categories, CategoriesProps } from '../components/categories'
import { api } from '../services/api'

const Home = () => {
  const [categories, setCategories] = useState<CategoriesProps>([])
  const fetchCategories = async () => {
    try {
      const { data } = await api.get('/categories')
      setCategories(data)
      console.log(data)
    } catch (err) {
      console.log(err)
      Alert.alert('Categorias', 'Não foi possivel carregar as categorias.')
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <View style={{ flex: 1, padding: 30 }}>
      <Text>Home </Text>
      <Categories data={categories} />
    </View>
  )
}

export default Home
