import React from 'react';
import { FlatList, View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

const sonarize = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.icon}>source={require('../img/logo.png')}</View>
        <Pressable style={styles.navBotao}>
          <Text style={styles.navTextoBotao}>Música</Text>
        </Pressable>
        <Pressable style={styles.navBotao}>
          <Text style={styles.navTextoBotao}>Podcast</Text>
        </Pressable>
        <View style={styles.fotoperfil}></View>
      </View>

      <View style={styles.artistas}>
        <Text style={styles.artistaTitulo}>Melhores artistas</Text>
        <View style={styles.boxartista}>
          <View style={styles.circulo}>
            <Image style={styles.imgArtista} source={require('../img/filipeRet.png')} />
          </View>
          <View style={styles.circulo}>
            <Image style={styles.imgArtista} source={require('../img/joaoGomes.png')} />
          </View>
          <View style={styles.circulo}>
            <Image style={styles.imgArtista} source={require('../img/luisaSonza.png')} />
          </View>
        </View>
      </View>
      
      <FlatList
        data={musicas}
        renderItem={Caixa}
      />
    </View>
  );
};

const Caixa = ({ item }) => (
  <View style={styles.item}>
    <Link href={{ pathname: `/app/detalhe/${item.id}`, params: { 'musicas': JSON.stringify(item) } }}>
      <Text style={styles.NomeMusica}>{item.nome}</Text>
      <Image source={item.imagem} style={styles.imagem} />
    </Link>
  </View>
);

const musicas = [
  { id: '1', nome: 'Funk', imagem: require('../img/boxmusica.png') },
  { id: '2', nome: 'Rock', imagem: require('../img/boxmusica.png') },
  { id: '2', nome: 'Sertanejo', imagem: require('../img/boxmusica.png') },
  { id: '3', nome: 'Hiphop', imagem: require('../img/boxmusica.png') },
  { id: '4', nome: 'Pop', imagem: require('../img/boxmusica.png') },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6d6d4',
    padding: 20,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: '#6c4cd8',
    borderRadius: 10,
  },
  navBotao: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#6c4cd8',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  navTextoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  fotoperfil: {
    width: 40,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 20,
  },
  artistas: {
    alignSelf: 'center',
    width: '104%',
    backgroundColor: '#e4e2dd',
    marginBottom: 50,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  artistaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  boxartista: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  circulo: {
    width: 110,
    height: 110,
    borderRadius: 60,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgArtista: {
    width: '100%',
    height: '100%',
  },
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

export default sonarize;
