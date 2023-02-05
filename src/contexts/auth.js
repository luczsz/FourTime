import React, { useEffect, useState, createContext}  from 'react';

import * as SQLite from 'expo-sqlite';
import { View } from 'react-native';

function OpenDB(){
    const db = SQLite.openDatabase("fourTime");
    return db;
}

const db = OpenDB();

export const AuthContext = createContext({});


export default function AuthProvider({children}){

    const [ user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    const [id, setId] = useState(0);

    db.transaction( (tx) => {
        tx.executeSql(
            "create table if not exists usuarios (id integer primary key, username TEXT, senha TEXT)"
        );
    })

    // Logando o usuario com SQLite
    function singIN(username, senha){
        setId(id + 1);

        db.transaction( (tx) => {
            tx.executeSql(
                "SELECT COUNT(*) FROM usuarios WHERE username= ? AND senha= ?", [username, senha]
            )
        }, (error) => {
            console.log(error.message);
        });
    }

    //Cadastrando o usuario com SQLite
    function singUp( username, senha ){
        setId(id + 1);
        setLoadingAuth(true);
        setLoading(false);
        setUser(username);

        db.transaction( (tx) => {
            tx.executeSql(
                "INSERT INTO usuarios (id, username, senha) values (?, ?, ?);", [id, username, senha],
                (tx, results) => {
                    console.log(results);
                }
            )
            


        }, (error) => {
            console.log(error.message);
        })
    };

    return(
        <AuthContext.Provider
            value={{ singned: !!user, user, loading, loadingAuth, singIN, singUp }}
        >
            {children}
        </AuthContext.Provider>
    )
}