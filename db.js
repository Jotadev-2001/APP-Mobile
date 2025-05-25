// db.js
import * as SQLite from 'expo-sqlite';

// Abrir/criar o banco
const db = SQLite.openDatabase('meubanco.db');

// Criar a tabela se não existir
export const criarTabela = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS direitos (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, conteudo TEXT);'
    );
  });
};

// Inserir um direito
export const inserirDireito = (titulo, categoria, conteudo) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO direitos (titulo, categoria, conteudo) VALUES (?, ?, ?);',
      [titulo, categoria, conteudo]
    );
  });
};

// Buscar todos os direitos
export const buscarDireitos = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM direitos;',
      [],
      (_, { rows }) => {
        callback(rows._array);
      }
    );
  });
};

export default db;
