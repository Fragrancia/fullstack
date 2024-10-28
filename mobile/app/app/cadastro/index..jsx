import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d6d6d4',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
      
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
     botao:{
        backgroundColor: '#6141ac',
        borderRadius: 10,
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 15,
     },
      botaotexto:{
        color: 'e4e2dd',
        fontSize: 16,
        fontWeight: '600',
    },
    titulo:{
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
        fontFamily: 'Open Sans',
        fontWeight:'800',
    },
    inputView:{
        alignItems: 'center',
        justifyContent: 'center',
        
    },
   box:{
    shadowOpacity: 0.25,  
    shadowRadius: 8.84, 
    padding: 50
   }
})

export default SinUp = () => {
    //const email = ''

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')



    const registrarUsuario = async function () {
        if (!nome || !email || !senha) {
            console.log('os parametros nome, email e senha devem ser fornecidos')
            return
        }
        const resposta = await fetch('http://localhost:8000/registro',{
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
            body: JSON.stringify({ name: nome, email: email, senha: senha, sobrenome:sobrenome, dataNascimento:dataNascimento })
        })
        
    if (!resposta) {
        console.log('erro')
    } else if (resposta.status == 200) {
        console.log('user criado com sucesso')
    } else {
        console.log('ocorreu um erro')
    }
}


return (
    <SafeAreaView style={style.container}>
        <View style={style.box}>
        <View >
            <Text style={style.titulo}>Registre-se</Text>
        </View>
        <View style={style.inputView}>
            <TextInput
                style={style.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
                placeholder="Nome:"
            /><TextInput
                style={style.input}
                onChangeText={(text) => setSenha(text)}
                value={sobrenome}
                placeholder="Sobrenome:"
                secureTextEntry={true}
            />
              <TextInput
                style={style.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email:"
            />
             <TextInput
                style={style.input}
                onChangeText={(text) => setSenha(text)}
                value={dataNascimento}
                placeholder="Data de nascimento:"
                secureTextEntry={true}
            />
            <TextInput
                style={style.input}
                onChangeText={(text) => setSenha(text)}
                value={senha}
                placeholder="Senha:"
                secureTextEntry={true}
            />
           

            <View style={style.botao} >
                <Pressable onPress={registrarUsuario}>
                    <Text style={style.botaotexto}>Cadastrar</Text>
                </Pressable>
            </View>
</View>
        </View>
    </SafeAreaView>

)
}