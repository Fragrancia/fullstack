import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const styles = StyleSheet.create({
    imagem: {
      width: '100%',
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
    },
    card: {
        padding: 10,
        alignItems: 'center',
    },
    nome: {
        fontSize: 24,
        fontWeight: 'bold', 
        color: '#333', 
        textAlign: 'center', 
        marginVertical: 10, 
    },
    descricao:{
        fontSize: 16, 
        color: '#666',
        textAlign: 'justify',
        lineHeight: 24, 
        marginHorizontal: 20, // margem nas laterais
    }

  });

export default DetalheTela= () => {
    const { musicas } = useLocalSearchParams();
    const musicasObject = JSON.parse(musicas);

    console.log(musicasObject)

    return(
        <ScrollView>
            <View style={styles.card}>
                <Text style={styles.nome}>{musicasObject.nome}</Text>
                <Image source={{ uri: musicasObject.imagem}} style={styles.imagem} />
            </View>
        </ScrollView>
    );
}

