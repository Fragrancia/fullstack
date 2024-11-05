import React from 'react';
import { FlatList, View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';



<FlatList
        data={musicas}
        renderItem={Caixa}
      />

const Caixa = ({ item }) => (
    <View style={styles.item}>
      <Link href={{ pathname: `/app/detalhe/${item.id}`, params: { 'musicas': JSON.stringify(item) } }} asChild>
        <View>
          <Text style={styles.NomeMusica}>{item.nome}</Text>
          <Image source={item.imagem} style={styles.imagem} />
        </View>
      </Link>
    </View>
  );
  
  const musicas = [
    { id: '1', nome: 'Funk', imagem: require('../img/boxmusica.png') },
    { id: '2', nome: 'Rock', imagem: require('../img/boxmusica.png') },
    { id: '3', nome: 'Sertanejo', imagem: require('../img/boxmusica.png') },
    { id: '4', nome: 'Hiphop', imagem: require('../img/boxmusica.png') },
    { id: '5', nome: 'Pop', imagem: require('../img/boxmusica.png') },
  ];

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#fff',
      padding: 5,
      borderRadius: 5,
      marginBottom: 20,
    },
    imagem: {
      width: '100%',
      height: 100,
      borderRadius: 10,
      marginBottom: 10,
    },
    NomeMusica: {
      fontSize: 20,
    },
  });
  