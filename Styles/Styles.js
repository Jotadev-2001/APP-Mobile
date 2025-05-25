import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  erro: {
    color: 'red',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  tituloCard: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoria: {
    fontStyle: 'italic',
    color: '#666',
  },
  conteudo: {
    marginVertical: 15,
    fontSize: 16,
  },
  botaoFiltro: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  botaoFiltroAtivo: {
    backgroundColor: '#007bff',
  },
  textoFiltro: {
    color: '#000',
  },
});
