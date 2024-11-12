import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Image,} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {Link} from 'expo-router';

export default function UserProfile() {
  const [image, setImage] = useState(null);
  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.card}>
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      <Image 
        source={image ? { uri: image } : require('../img/usuario.png')}
        style={styles.image} 
      />
       <Pressable style={styles.botao} onPress={pickImage}>
            <Text style={styles.botaotexto}>Trocar de Imagem</Text>
        </Pressable>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Nome: </Text>
        <Text style={styles.infoText}>Email:</Text>
      </View>
      <Pressable style={styles.botao} onPress={pickImage}>
            <Text style={styles.botaotexto}>Salvar</Text>
        </Pressable>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6d6d4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#e4e2dd',
    padding: 25,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
},
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    backgroundColor: '#ccc',
  },
  botao:{
    backgroundColor: '#6141ac',
    borderRadius: 10,
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  botaotexto: {
    fontSize: 16,
  },
  infoContainer: {
   
  },
  infoText: {
   
  },
});
