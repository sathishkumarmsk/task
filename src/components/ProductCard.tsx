import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface props {
  name: string;
  price: string;
  description: string;
}

const ProductCard = ({name, price, description}: props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>{price}</Text>
      <Text style={styles.productDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default ProductCard;
