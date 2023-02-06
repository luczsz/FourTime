import React, {useState, useEffect} from 'react';
import { View, Text, ActivityIndicator, SectionList } from 'react-native';

import { Container, Title, Header, Content, Input, Submit, SubmitText, Cadst } from '../SingIn/style';

import { useNavigation, useNavigationBuilder } from '@react-navigation/native';

import * as SQLite from 'expo-sqlite';

function OpenDB(){
  const db = SQLite.openDatabase("fourTime");
  console.log(db);
  return db;
}

const db = OpenDB();

import { Feather } from '@expo/vector-icons';

export default function SingUp() {

  // verificação de ID
  useEffect( () => {
    var hasUser = false;
    db.transaction((tx) => {
        tx.executeSql(
            "SELECT * FROM usuarios",
            [],
            (tx, results) => {
                var len = results.rows.length;
                if(len > 0){
                    hasUser = true;
                    //console.log('existem:' + results.rows.length + 'registros');
                    setId( results.rows.length );
                    console.log(results);
                    
                }
                else{
                    console.log('sem registros14');
                    console.log(results);
                }
            }
        );
    })
}, [])

  // Criação e verificação de existencia de base
  db.transaction( (tx) => {
    tx.executeSql(
      "create table if not exists usuarios (id interger primary key, username TEXT, senha TEXT);"
    );
  })
  
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [loadingAuth, setLoadingAuth] = useState(false);

    const [id, setId] = useState(0);

    function Cadastrar(){

      if(username === ''){
        alert('Complete os dados');
        setLoadingAuth(false);
      }
      setId(id + 1);
      db.transaction( (tx) => {
        tx.executeSql(
          "INSERT INTO usuarios (id, username, senha) values (?, ?, ?);", [id, username, senha]
          )
      },
      (Error) => {
          alert('Houve algum erro');
      },
      (successCallback) => {
          setLoadingAuth(true);
          navigation.navigate('Inicio');
          
      })
      


    }
 
  return (
    <Container>
      <Header>
        <Feather name="arrow-left-circle" size={40} color="#DDD" />
      </Header>

      <Content>
            <Text> {id} </Text>
        <Input
          placeholder="Insira aqui um nome de usuario"
          autoCapitalize='none'
          autoCorrect={false}
          value={username}
          onChangeText={ (text) => setUsername(text)}
        />
        <Input
         placeholder='Insira aqui uma senha númerica'
         keyboardType={'numeric'}
         secureTextEntry={true}
         autoCapitalize='none'
         autoCorrect={false}
         onChangeText={ (text) => setSenha(text)}
        />

        <Submit
          onPress={ () => Cadastrar()}
          activeOpacity={0.7}
        >
            {
              loadingAuth ? (
                <ActivityIndicator
                  size={20}
                  color="#FFF"
                />
              ) : (
            
                <SubmitText>
                  C A D A S T R A R
                </SubmitText>

              )
            }

        </Submit>

        <Cadst
          onPress={ () => navigation.navigate('Inicio')}
        >
            <SubmitText>
              E N T R A R
            </SubmitText>
        </Cadst>

      </Content>


    </Container>
  );
}