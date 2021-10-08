import React from 'react'
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Rating, AirbnbRating } from 'react-native-ratings';

const { height, width } = Dimensions.get('window');

// const products = Array(20).fill('').map((e, i) => ({
//   id: i,
//   name: `Tshirt ahihihi ahiahi hiih hihi hih hih hih ${i + 1}`,
//   price: 12.99,
//   discountPrice: 10.39,
//   saleDetail: 'Up to 60% Off Almost Everything!',
//   rate: 3
// }))

const products = [
  {
    id: 1,
    name: `Tshirt ahihihi ahiahi hiih hihi hih hih hih`,
    price: 12.99,
    discountPrice: 10.39,
    saleDetail: 'Up to 60% Off Almost Everything!',
    rate: 3,
    photo: 'https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg'
  },
  {
    id: 2,
    name: `Hat ahahahahahah`,
    price: 10,
    discountPrice: 10.39,
    saleDetail: 'Up to 60% Off Almost Everything!',
    rate: 3,
    photo: 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'
  },
  {
    id: 3,
    name: `Tshirt abccasascca `,
    price: 12.99,
    discountPrice: 10.39,
    saleDetail: 'Up to 60% Off Almost Everything!',
    rate: 3,
    photo: 'https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg'
  },
  {
    id: 4,
    name: `Tshirt abccasascca `,
    price: 12.99,
    discountPrice: 10.39,
    saleDetail: 'Up to 60% Off Almost Everything!',
    rate: 3,
    photo: 'https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg'
  },
]

export default function ProductList() {
  const ratingCompleted = () => { }

  const renderItem = ({ item }) => (
    <View style={{ width: width / 2 - 10 }}>
      <View>
        <TouchableOpacity style={{
          position: 'absolute', right: 10, top: 10, zIndex: 1,
          backgroundColor: 'white', padding: 5, borderRadius: 20
        }}>
          <Ionicons name="heart-outline" size={25} color="black" />
        </TouchableOpacity>
        <Image
          style={{ height: 300, width: '100%', resizeMode: 'cover' }}
          source={{ uri: item?.photo }}
        />
      </View>
      <View style={{ padding: 10 }}>
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
      </View>
    </View>
  );

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
        keyExtractor={item => item.id}
        numColumns={2}
        horizontal={false}
        style={{ marginBottom: 100 }}
        columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
      />
    </View>
  )
}
