import React, {useState, useContext, useEffect} from 'react';
import { View, Text, Button } from 'react-native';

import * as SQLite from 'expo-sqlite';

function OpenDB(){
  const db = SQLite.openDatabase("fourTime");
  return db;
}

const db = OpenDB();

export default function Home() {

  const [user, setUser] =useState([]);
  const [us3r, setUs3r] =useState(0);

  /* function Registros(){

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM usuarios where id = ?',
        [0],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUser(results.rows.item(0));
          } else {
            alert('No user found');
            alert(results);
          }
        }
      );
    });
  }; */

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
                    console.log('existem:' + results.rows.length + 'registros');
                    setUs3r( results.rows.length );
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

  function Registros(){
    db.transaction((tx) => {
     tx.executeSql(
         "SELECT * FROM usuarios",
         [],
         (_, {rows}) => {
             setUser([]);

             rows._array.forEach( (childItem) =>{
                 let list ={
                     id: childItem.id,
                     compras: childItem.titulo,
                 }
                 setUser(oldArray => [...oldArray, list])
             })
         }
     ) 
    })
 };

 function Delet(){
  db.transaction( (tx) => {
    tx.executeSql(
      "DELETE FROM usuarios"
    )
  },
  (Error) => {
      console.log(Error.message);
  },
  (successCallback) => {
      alert('Você deletou o item');
  })
 }


 return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow'}} >
        <Text> {user} </Text>
        <Text> {us3r} </Text>
        <Button
          title='APERTE'
          onPress={ () => Delet()}
        />

   </View>
  );
}