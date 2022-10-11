import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, Switch, TouchableOpacity } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexoSelecionado, setSexoSelecionado] = useState(0)
  const [sexos, setSexos] = useState([
    {
      key: 1,
      nome: "Masculino",
    },
    {
      key: 2,
      nome: "Feminino",
    }
  ])

  const [valor, setValor] = useState(50)
  const [status, setStatus] = useState(false)



  let sexosItem = sexos.map((valor, key) => {
    return <Picker.Item key={key} value={key} label={valor.nome} />

  })



  function CriarConta() {

    if(nome === '' || sobrenome === '' || idade === '') {
      alert('Preencha todos dados corretamente!')
      return
    } 
    else
      alert(
        'Conta aberta com sucesso!! \n\n' + 
        'Nome: '+ nome + ' ' +  sobrenome + '\n' + 
        'Idade: ' + idade + ' anos' + '\n' +
        'Sexo: '+ sexos[sexoSelecionado].nome + ' \n' +
        'Limite da  Conta: ' + valor.toFixed(0) + ',00' + '\n' +
        'Conta Estudante: ' + (status ? 'Sim' : 'Não')
        )
  }

  return (

    <ScrollView>

      <View style={styles.container}>

        <Image
          source={require('./src/LogoBancoKiss.png')}
          style={styles.logo}
        />
        {/*
          > mostra os dados em alert ou mostrana tela mesmo.
          */
        }
        <Text style={styles.titulo}>Preencha Formulário</Text>

        <TextInput
          style={styles.containerInput}
          placeholder='Digite seu primeiro nome'
          onChangeText={(texto) => setNome(texto)}
        />
        <TextInput
          style={styles.containerInput}
          placeholder='Digite seu sobrenome'
          onChangeText={(texto) => setSobrenome(texto)}
        />
        <TextInput
          style={styles.containerInput}
          placeholder='Digite sua idade'
          onChangeText={(texto) => setIdade(texto)}
          keyboardType='numeric'// Deixando teclado apenas numerico
        />

        <View>
          <Text style={styles.subtitulo}> Selecione seu sexo:</Text>
          <Picker
            style={styles.containerPicker}
            selectedValue={sexoSelecionado}
            onValueChange={(itemValue, itemIndex) => setSexoSelecionado(itemValue)}
          >
            {sexosItem}
          </Picker>
        </View>

        <View style={{marginBottom:20}}>

          <Text style={styles.subtitulo}>
            Escolha o seu limite: R$ {valor.toFixed(0)},00
          </Text>

          <Slider
            minimumValue={0}
            maximumValue={1000}
            value={valor}
            onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
            minimumTrackTintColor="#F7FE2E"
            maximumTrackTintColor='#FFF'
            thumbTintColor='#121212'
          />
        </View>

        <View>

          <Text style={styles.subtitulo}>Você é estudante?</Text>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>

            <Text>Não </Text>
            <Switch
              value={status}
              onValueChange={(valorSelecionado) => setStatus(valorSelecionado)}
              trackColor={{ false: '#121212', true: '#F7FE2E' }}
              thumbColor={status ? '#121212' : '#f4f4f4'}
            />
            <Text> Sim</Text>

          </View>

        </View>

        <View>

        <TouchableOpacity style={styles.btnEnviar} onPress={ CriarConta } >
            <Text style={styles.botaoTexto}>Criar Conta</Text>
        </TouchableOpacity>

        </View>


      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6E6E6E',
    alignItems: 'center'
  },
  logo: {
    width: 300,
    height: 190,
  },
  containerInput: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  containerPicker: {
    height: 40,
    width: 170,
    margin: 12,
    padding: 10
  },
  titulo: {
    color: '#000000',
    fontSize: 20,
    textTransform: 'uppercase',
    marginBottom: 10
  },
  subtitulo: {
    color: '#000000',
    fontSize: 17,
    textAlign: 'center',
    justifyContent: 'center'
  },
  btnEnviar: {
    margin: 40,
    backgroundColor: '#1C1C1C',
    width: 200,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'

  },
  botaoTexto:{
    color: '#FFFF00',
    fontSize: 20
  }

})