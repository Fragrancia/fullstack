import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Image,} from "react-native";
import {Link} from 'expo-router'

const style = StyleSheet.create({
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
    titulo: {
        fontSize: 28,
        fontWeight: '600',
        color: '#333',
        marginBottom: 20,
    },
    
    input: {
        height: 50,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333',
        marginBottom: 15,
        backgroundColor: '#d6d6d4',
    },
    botao: {
        backgroundColor: '#6141ac',
        borderRadius: 10,
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 15,
    },
    botaotexto: {
        color: 'e4e2dd',
        fontSize: 16,
        fontWeight: '600',
    },
    img:{
        width: 175,
        height: 210,
      borderRadius: 50,
      marginBottom: 20,
      alignSelf: 'center', 
      width: 270, 
      height: 270,
      borderRadius: 12,
      marginRight: 8,
    },
    ViewLink: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },
    ViewTexto: {
        fontSize: 16,
        marginRight: 8,
    },
    TextoLink: {
        fontSize: 16,
        color: 'blue',
    },

});

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const registrarUsuario = async function () {
        if (!email || !senha) {
            console.log('os parametros email e senha devem ser fornecidos');
            return;
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        });

        if (!resposta) {
            console.log('erro');
        } else if (resposta.status === 200) {
            console.log('Login foi bem sucedido');
        } else {
            console.log('ocorreu um erro');
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <View style={style.card}>
                
                <Image style={style.img} source={require('./img/Fraga.png')}/>

                <TextInput
                    style={style.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email:"
                />
                <TextInput
                    style={style.input}
                    onChangeText={setSenha}
                    value={senha}
                    placeholder="Senha:"
                    secureTextEntry={true}
                />

                <Pressable style={style.botao} onPress={registrarUsuario}>
                    <Text style={style.botaotexto}>Entrar</Text>
                </Pressable>
                <View style={style.ViewLink}>
                    <Text style={style.ViewTexto} >Não tem uma conta?</Text>
                    <Link href='/app/cadastro'> 
                     <Text style={style.TextoLink} >Crie uma</Text>
                    </Link> 
                </View>

            </View>
        </SafeAreaView>
    );
}
