import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// ⛔ Removemos o import e colocamos os dados aqui mesmo
const direitos = [
  {
    id: '1',
    titulo: 'Direito à Saúde',
    categoria: 'Saúde',
    conteudo: 'Todo cidadão tem direito ao acesso universal e igualitário à saúde.'
  },
  {
    id: '2',
    titulo: 'Direito à Educação',
    categoria: 'Educação',
    conteudo: 'A educação é direito de todos e dever do Estado e da família.'
  },
  {
    id: '3',
    titulo: 'Direito ao Trabalho',
    categoria: 'Trabalho',
    conteudo: 'Todos têm direito ao trabalho digno e remuneração justa.'
  },
  {
    id: '4',
    titulo: 'Direito ao Voto',
    categoria: 'Cidadania',
    conteudo: 'O voto é um direito e dever do cidadão para participação política.'
  }
];

export default function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [tela, setTela] = useState('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [selecionado, setSelecionado] = useState(null);
  const [filtroCategoria, setFiltroCategoria] = useState(null);

  const categorias = [...new Set(direitos.map(d => d.categoria))];
  const direitosFiltrados = filtroCategoria
    ? direitos.filter(d => d.categoria === filtroCategoria)
    : direitos;

  function login() {
    if (email.trim() === '' || senha.trim() === '') {
      setErro('Por favor, preencha email e senha');
      return;
    }
    setUsuarioLogado(email);
    setTela('lista');
    setErro('');
  }

  if (!usuarioLogado) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
          secureTextEntry
        />
        {erro ? <Text style={styles.erro}>{erro}</Text> : null}
        <Button title="Entrar" onPress={login} />
      </View>
    );
  }

  if (selecionado) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{selecionado.titulo}</Text>
        <Text style={styles.categoria}>{selecionado.categoria}</Text>
        <Text style={styles.conteudo}>{selecionado.conteudo}</Text>

        <Button title="Voltar" onPress={() => setSelecionado(null)} />
        <Button
          title="Sair"
          color="red"
          onPress={() => {
            setUsuarioLogado(null);
            setEmail('');
            setSenha('');
            setSelecionado(null);
            setFiltroCategoria(null);
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Guia de Direitos do Cidadão</Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 15 }}>
        <TouchableOpacity
          onPress={() => setFiltroCategoria(null)}
          style={[styles.botaoFiltro, filtroCategoria === null && styles.botaoFiltroAtivo]}
        >
          <Text style={styles.textoFiltro}>Todos</Text>
        </TouchableOpacity>

        {categorias.map(categoria => (
          <TouchableOpacity
            key={categoria}
            onPress={() => setFiltroCategoria(categoria)}
            style={[styles.botaoFiltro, filtroCategoria === categoria && styles.botaoFiltroAtivo]}
          >
            <Text style={styles.textoFiltro}>{categoria}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={direitosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelecionado(item)} style={styles.card}>
            <Text style={styles.tituloCard}>{item.titulo}</Text>
            <Text style={styles.categoria}>{item.categoria}</Text>
          </TouchableOpacity>
        )}
      />

      <Button
        title="Sair"
        color="red"
        onPress={() => {
          setUsuarioLogado(null);
          setEmail('');
          setSenha('');
          setFiltroCategoria(null);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    marginBottom: 15,
    borderRadius: 6,
  },
  erro: {
    color: 'red',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f3f3f3',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  tituloCard: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoria: {
    color: '#555',
    marginTop: 4,
  },
  conteudo: {
    fontSize: 16,
    marginBottom: 20,
  },
  botaoFiltro: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#ddd',
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 5,
  },
  botaoFiltroAtivo: {
    backgroundColor: '#3b82f6',
  },
  textoFiltro: {
    color: '#000',
  }
});
