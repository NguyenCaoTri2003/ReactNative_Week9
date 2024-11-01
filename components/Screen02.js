import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

const DATA = [
  {
    id: '1',
    img:  require('../assets/bifour_-removebg-preview.png'),
    title: 'Pinarello',
    price: '1800'
  },
  {
    id: '2',
    img:  require('../assets/bione-removebg-preview.png'),
    title: 'Pina Mountai',
    price: '1700'
  },
  {
    id: '3',
    img:  require('../assets/bithree_removebg-preview.png'),
    title: 'Pina Bike',
    price: '1500'
  },
  {
    id: '4',
    img:  require('../assets/bitwo-removebg-preview.png'),
    title: 'Pinarello',
    price: '1900'
  },
  {
    id: '5',
    img:  require('../assets/bithree_removebg-preview.png'),
    title: 'Pinarello',
    price: '2700'
  },
  {
    id: '7',
    img:  require('../assets/bione-removebg-preview.png'),
    title: 'Pinarello',
    price: '1350'
  },
  {
    id: '8',
    img:  require('../assets/bithree_removebg-preview.png'),
    title: 'Pinarello',
    price: '2700'
  },
  {
    id: '9',
    img:  require('../assets/bione-removebg-preview.png'),
    title: 'Pinarello',
    price: '1350'
  },
];

const DATA2 = [
  {
    id: '1',
    img:  require('../assets/bifour_-removebg-preview.png'),
    title: 'Pinarello',
    price: '1800'
  },
  {
    id: '3',
    img:  require('../assets/bithree_removebg-preview.png'),
    title: 'Pina Bike',
    price: '1500'
  },
  {
    id: '4',
    img:  require('../assets/bitwo-removebg-preview.png'),
    title: 'Pinarello',
    price: '1900'
  },
  {
    id: '2',
    img:  require('../assets/bione-removebg-preview.png'),
    title: 'Pina Mountai',
    price: '1700'
  },
  {
    id: '3',
    img:  require('../assets/bithree_removebg-preview.png'),
    title: 'Pina Bike',
    price: '1500'
  },
  {
    id: '4',
    img:  require('../assets/bitwo-removebg-preview.png'),
    title: 'Pinarello',
    price: '1900'
  }
];

const DATA3 = [
  {
    id: '3',
    img:  require('../assets/bithree_removebg-preview.png'),
    title: 'Pina Bike',
    price: '1500'
  }
];
const SanPham = ({item, lovedItems, toggleHeart, addToCart}) => {
  return(
  <TouchableOpacity style={styles.sanPham} onPress={() => addToCart(item)}>
    <TouchableOpacity style={styles.iconFavorite} onPress={() => toggleHeart(item.id)}>
      <Icon name="heart" size={20} color={lovedItems.includes(item.id) ? '#FFD700' : '#54545426'} />
    </TouchableOpacity>
    <Image source={item.img} style={styles.imgSP}/>
    <Text style={styles.titleSP}>{item.title}</Text>
    <View style={styles.price}>
      <Icon name= 'dollar' color= '#F7BA83' size={15}/>
      <Text style={styles.textPrice}>{item.price}</Text>
    </View>
  </TouchableOpacity>
  )
}
export default function Screen02({ navigation }) {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lovedItems, setLovedItems] = useState([]); // Trạng thái để quản lý màu sắc
  const [showAll, setShowAll] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const renderItem = ({ item }) => {
    return (
      <SanPham 
      item={item} 
      lovedItems={lovedItems} 
      toggleHeart={toggleHeart}
      addToCart={addToCart}
       />
    );
  };
  const filteredData = selectedCategory === 'All' 
    ? DATA 
    : selectedCategory === 'Roadbike' 
    ? DATA2 
    : DATA3;

  const displayedData = showAll ? filteredData : filteredData.slice(0, 4); 

  const toggleHeart = (id) => {
    setLovedItems((prevLovedItems) => 
      prevLovedItems.includes(id)
        ? prevLovedItems.filter(itemId => itemId !== id) // Nếu đã yêu thích, bỏ ra khỏi danh sách
        : [...prevLovedItems, id] // Nếu chưa yêu thích, thêm vào danh sách
    );
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowAll(false); // Reset trạng thái showAll về false mỗi khi chuyển tab
  };

  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCartItems.map((cartItem) => // Tăng số lượng nếu sản phẩm đã có trong giỏ hàng
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCartItems, { ...item, quantity: 1 }]; // Thêm sản phẩm mới vào giỏ hàng
      }
    });
  };
  const goToCart = () => {
    navigation.navigate('Screen03', { cartItems });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerCart}>
          <Text style={styles.textContent}>The world’s Best Bike</Text>
          <TouchableOpacity onPress={goToCart}>
            <Icon name="shopping-cart" color="#000" size={25} />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity
            style={[styles.menuAll, selectedCategory === 'All' && styles.menuSelect]}
            onPress={() => handleCategoryChange('All')}
          >
            <Text style={[styles.textMenuAll, selectedCategory === 'All' && styles.textMenuSelect]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.menuAll, selectedCategory === 'Roadbike' && styles.menuSelect]}
            onPress={() => handleCategoryChange('Roadbike')}
          >
            <Text style={[styles.textMenuAll, selectedCategory === 'Roadbike' && styles.textMenuSelect]}>Roadbike</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.menuAll, selectedCategory === 'Mountain' && styles.menuSelect]}
            onPress={() => handleCategoryChange('Mountain')}
          >
            <Text style={[styles.textMenuAll, selectedCategory === 'Mountain' && styles.textMenuSelect]}>Mountain</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <FlatList
          data={displayedData}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
        {!showAll && filteredData.length > 4 && ( // Hiển thị nút See All nếu dữ liệu nhiều hơn 4
          <TouchableOpacity onPress={() => setShowAll(true)} style={styles.seeAllButton}>
            <Text style={styles.seeAllText}><u>See All</u></Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    
  },
  header: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    
  },
  headerCart:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content: {
    flex: 5,
    paddingHorizontal: 5,
    alignItems: 'center'
  },
  textContent:{
    fontSize: 22,
    fontWeight: 700,
    color: '#E94141',
    
  },
  menu:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, 
  menuAll:{
    width: 80,
    height: 28,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(233, 65, 65, 0.23)',
    justifyContent: 'center'
  },
  textMenuAll:{
    fontSize: 13,
    textAlign: 'center',
    color: '#BEB6B6'
  },
  menuSelect:{
    borderColor: 'rgba(233, 65, 65, 0.53)',
  },
  textMenuSelect:{
    color: '#E94141'
  },
  sanPham:{
    width: 142,
    height: 183,
    backgroundColor: '#F7BA8326',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderRadius: 10,
    position: 'relative',
    marginBottom: 15,
    marginLeft: 10
  }, 
  imgSP:{
    width: 105,
    height: 100
  },
  titleSP:{
    color: '#00000099',
    fontSize: 15
  },
  price:{
    flexDirection: 'row',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textPrice:{
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 2
  },
  iconFavorite:{
    position: 'absolute',
    top: 10,
    left: 10

  },
  seeAllText: {
    color: '#000',
    fontSize: 16,
  },
   cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#E94141',
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  cartBadgeText: {
    color: '#FFF',
    fontSize: 12,
  },
});
