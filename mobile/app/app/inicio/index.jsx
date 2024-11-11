import React from 'react';
import { FlatList, View, Text, Pressable, StyleSheet, Image, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

const sonarize = () => {
  return (
    
    <View style={styles.container}>
      <View style={styles.BoxbackgroundImage}>
      <ImageBackground source={require('../img/FundoPoze.png')} style={styles.backgroundImage}></ImageBackground>
      </View>
      <View style={styles.navbar}>
        <Image style={styles.icon} source={require('../img/logo.png')} />
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
        data={TopPlaylists}
        renderItem={Caixa}
        horizontal
        contentContainerStyle={styles.playlistContainer}
        
      />
    </View>
  );
};

const Caixa = ({ item }) => (
  <View style={styles.itemTopPlaylists}>
    <Link href={{ pathname: `/app/detalhe/${item.id}`, params: { 'TopPlaylists': JSON.stringify(item) } }} asChild>
      <View style={styles.CardPlaylist}>
        <Image source={item.imagem} style={styles.imagemTopPlaylists} />
        <Text style={styles.NomeTopPlaylists}>{item.nome}</Text>
        <Text style={styles.descricaoTopPlaylists}>{item.artista}</Text>
      </View>
    </Link>
  </View>
);

const TopPlaylists = [
  { id: '1', nome: 'Braba', artista: 'Tuto, Joazinho da vt ...', imagem: require('../img/BRABA.png') },
  { id: '2', nome: 'Parada Rap', artista: 'Racionais mcs, Dexter...', imagem: require('../img/ParadaRap.png') },
  { id: '3', nome: 'Poesia Acústica', artista: 'Xamã, Mc Poze, ...', imagem: require('../img/PoesiaAcustica.png') },
  { id: '4', nome: 'Top Sertanejo', artista: 'Marilia, Jorge e Mateus ...', imagem: require('../img/TopSertanejo.png') },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6d6d4',
    padding: 0,
  
  },
  backgroundImage: {
    width: '100%'
  },
  BoxbackgroundImage: {

  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 390,
    padding: 19
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
    width: '95%',
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
  playlistContainer: {
    paddingVertical: 20,
    
  },
  
  itemTopPlaylists: {
    backgroundColor: '#e4e2dd',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    width: 170,
    height: 200, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    
  },
  imagemTopPlaylists: {
    width: 140, 
    height: 140, 
    borderRadius: 10,
  },
  NomeTopPlaylists: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 5,
  },
  descricaoTopPlaylists: {
    fontSize: 12,
    color: '#ccc',
    textAlign: 'left',
  },
});

export default sonarize;


