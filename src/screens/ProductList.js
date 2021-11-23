import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from '../service/Api'
import { getImage } from '../utils'
import { getProductList } from '../reducers/cartReducer'

const { height, width } = Dimensions.get('window');

export default function ProductList({ navigation }) {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.cartReducer.products);
  const [productList, setProductList] = useState([])

  // useEffect(() => {
  //   const getProductList = async () => {
  //     try {
  //       const response = await getProduct()
  //       setProductList(response?.data?.data)
  //       console.tron.log('data', response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   getProductList()

  // }, [])

  // cach 2 dung thunk
  useEffect(() => {
    dispatch(getProductList())
  }, [])

  const ratingCompleted = () => { }

  const moveToDetail = (item) => () => navigation.navigate('ProductDetail', { data: item })

  const renderItem = ({ item }) => {
    return (
      <View style={{ width: width / 2 - 10 }} >
        <View>
          <TouchableOpacity style={{
            position: 'absolute', right: 10, top: 10, zIndex: 1,
            backgroundColor: 'white', padding: 5, borderRadius: 20
          }}>
            <Ionicons name="heart-outline" size={25} color="black" />
          </TouchableOpacity>
          <Image
            style={{ height: 300, width: '100%', resizeMode: 'cover' }}
            source={{ uri: getImage(item?.images?.[0]) }}
          />
        </View>
        <TouchableOpacity style={{ padding: 10 }} onPress={moveToDetail(item)}>
          <View style={{
            height: 25, width: 25,
            backgroundColor: 'white', borderRadius: 25 / 2,
            borderWidth: 1, borderColor: '#4094e3',
            justifyContent: 'center', alignItems: 'center'
          }}>
            <View style={{ height: 20, width: 20, backgroundColor: '#4094e3', borderRadius: 10, }}></View>
          </View>
          <Text style={{ fontWeight: '600' }}>{item?.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <Text style={{ fontWeight: '600', marginRight: 10, fontSize: 18, color: '#8c3454' }}>${item?.price}</Text>
            <Text style={{ fontWeight: '600', fontSize: 16, textDecorationLine: 'line-through' }}>${item?.discountPrice}</Text>
          </View>
          <Text style={{ fontSize: 12, color: '#8c3454', lineHeight: 18 }}>{item?.saleDetail}</Text>
          <Rating
            onFinishRating={() => { }}
            imageSize={20}
            style={{ paddingVertical: 10, justifyContent: 'flex-start', alignItems: 'flex-start', }}
          />
        </TouchableOpacity>
      </View>
    )
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderColor: 'grey' }}>
          <Text>Sort By:</Text>
          <Text style={{ fontWeight: 'bold' }}>Relevance</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons name="filter-outline" size={20} color="black" />
          <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>Filter</Text>
        </View>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item._id?.toString()}
        numColumns={2}
        horizontal={false}
        // style={{ marginBottom: 100 }}
        columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
      />
    </View>
  )
}
