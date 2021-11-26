import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from '../service/Api'

export default function Wishlist() {
  const [isMap, setIsMap] = useState(false)
  const [list, setList] = useState([])
  // const giftList = useSelector((store) => store.giftReducer.gifts);

  useEffect(() => {
    const getList = async () => {
      const result = await getProduct()
      setList(result?.data?.menu)
    }
    getList()
  }, [])

  const onChangeDisplayView = () => setIsMap(!isMap)


  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Tim kiem</Text>
        <TouchableOpacity onPress={onChangeDisplayView}>
          <Text>Ban do</Text>
        </TouchableOpacity>
      </View>
      {isMap ? (
        <View>
          <Text>This is Map</Text>
        </View>
      ) :
        (<View style={{ borderWidth: 1, borderColor: "green" }}>
          {list?.map(group => {
            return (
              <View key={group.id}>
                <Text style={{ color: 'red' }}>{group?.name}</Text>
                {group?.products?.map(item => {
                  return (
                    <TouchableOpacity key={item?.id} style={{ flexDirection: 'row' }}>
                      <Image
                        style={{ height: 100, width: 100 }}
                        source={{ uri: item?.thumbnail, }}
                      />
                      <View>
                        <Text>{item?.name}</Text>
                        <Text>{item?.price}</Text>
                      </View>

                    </TouchableOpacity>
                  )
                })}
              </View>
            )
          })}
        </View>)}
    </ScrollView>
  )
}
