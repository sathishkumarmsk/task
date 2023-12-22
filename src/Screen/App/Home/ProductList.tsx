import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import ProductCard from '../../../components/ProductCard';
import ProductData from '../../../Data/products.json';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

const menuItems = [
  {id: 1, title: 'Home'},
  {id: 2, title: 'Profile'},
  {id: 3, title: 'Settings'},
];

const ProductList = () => {
  const route = useRoute();
  const userDetail = route.params;
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>(
    'left',
  );
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('Home');

  const changeDrawerPosition = () => {
    setDrawerPosition(position => (position === 'left' ? 'right' : 'left'));
  };

  const handleMenuItemPress = item => {
    setSelectedMenuItem(item.title);
    drawer.current?.closeDrawer();
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>{userDetail.username}</Text>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleMenuItemPress(item)}>
            <View
              style={[
                styles.menuItem,
                {
                  backgroundColor:
                    selectedMenuItem === item.title ? '#ccc' : '#fff',
                },
              ]}>
              <Text
                style={[
                  styles.menuItemText,
                  {color: selectedMenuItem === item.title ? '#000' : '#333'},
                ]}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  const renderContent = () => {
    if (selectedMenuItem === 'Home') {
      return (
        <FlatList
          data={ProductData as Product[]}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ProductCard {...item} />}
        />
      );
    } else if (selectedMenuItem === 'Profile') {
      return (
        <View style={styles.profileContent}>
          <Text style={styles.profileText}>Profile Content Goes Here</Text>
        </View>
      );
    } else if (selectedMenuItem === 'Settings') {
      return (
        <View style={styles.settingsContent}>
          <Text style={styles.settingsText}>Settings Content Goes Here</Text>
        </View>
      );
    }
    // Add more conditions for other menu items if needed
  };

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => drawer.current?.openDrawer()}>
          <View style={styles.profile}>
            <Text style={styles.text}>☰</Text>
          </View>
        </TouchableOpacity>
        {renderContent()}
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
  },
  profile: {
    // backgroundColor: '#fff',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  profileContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 18,
    color: '#FFF',
  },
  settingsContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsText: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default ProductList;
