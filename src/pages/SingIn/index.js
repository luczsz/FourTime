import React, {useState} from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { Container, Title, Header, Content, Input, Submit, SubmitText, Cadst } from './style';

import { useNavigation } from '@react-navigation/native';

import * as SQLite from 'expo-sqlite';

function OpenDB(){
  const db = SQLite.openDatabase("fourTimer");
  return db;
}
const db = OpenDB();

export default function SingIn() {
  
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [loadingAuth, setLoadingAuth] = useState(false);

  const [id, setId] = useState(0);

  // Criação e verificação de existencia de base
  db.transaction( (tx) => {
    tx.executeSql(
      "create table if not exists usuarios (id interger primary key, username TEXT, senha TEXT);"
    )
  })


  function Logar(){

    if(username === ''){
      alert('Seu username está vazio');
      //setLoadingAuth(false);
      return;
    }
    
    db.transaction( (tx) => {
      tx.executeSql(
        "SELECT COUNT(*) FROM usuarios WHERE username=? AND senha=?;", [username, senha],

//        `SELECT COUNT(*) FROM usuarios `
      )
    },
      (Error) => {
          alert('Houve algum erro');
          console.log(Error.message);
          setLoadingAuth(false);
        },
        (successCallback) => {
          alert('deu certo');
      })
  }
  
  return (
   <Container>
        <Header>

           <Title>4T I M E R</Title>
           
        </Header>

        <Content>
            <Input
              placeholder="Insira aqui"
              autoCorrect={false}
              autoCapitalize='none'
              value={username}
              onChangeText={ (text) => setUsername(text)}
            />
            <Input
              placeholder="Insira aqui"
              keyboardType={'numeric'}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize='none'
              value={senha}
              onChangeText={ (text) => setSenha(text)}
            />

            <Submit
              activeOpacity={0.7}
              onPress={ () => Logar()}
            >
              {
                loadingAuth ? (
                  <ActivityIndicator
                    size={20}
                    color="#FFF"
                  />
                ) : (
                  
                  <SubmitText>
                    E N T R A R
                  </SubmitText>
                )
              }
            </Submit>

            <Cadst
              onPress={ () => navigation.navigate('Cadastro')}
            >
              <SubmitText>
                C A D A S T R A R
              </SubmitText>
            </Cadst>

        </Content>
   </Container>
  );
}