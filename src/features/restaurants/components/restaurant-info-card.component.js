import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = ['https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-be3500.jpg'],
    address = '100 Some Random Street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.name}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: 'white' },
  cover: { padding: 20, backgroundColor: 'white' },
  name: { padding: 20 },
});
