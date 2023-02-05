import React, {useState, useContext} from 'react';
import { View, Text, Button } from 'react-native';

import * as SQLite from 'expo-sqlite';

function OpenDB(){
  const db = SQLite.openDatabase("fourTime");
  return db;
}

const db = OpenDB();

export default function Home() {

  const [user, setUser] =useState('');
  const [us3r, setUs3r] =useState(0);

  function Registros(){

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
  };

 return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow'}} >
        <Text> {user} </Text>
        <Text> {us3r} </Text>
        <Button
          title='APERTE'
          onPress={ () => Registros()}
        />

   </View>
  );
}