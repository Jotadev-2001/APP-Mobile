# 📖 Guia de Direitos do Cidadão

Este é um aplicativo mobile desenvolvido com **React Native** e **Expo**, com backend no **Firebase**, que tem como objetivo **informar cidadãos sobre seus direitos de forma clara, acessível e confiável**.

O app fornece explicações organizadas por categorias (como direitos trabalhistas, previdenciários, civis, etc.), com linguagem simples e acessível a todos.

---

## 🚀 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Firebase](https://firebase.google.com/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

## 📱 Funcionalidades

- ✅ Listagem de direitos por categorias
- ✅ Visualização de conteúdo explicativo
- ✅ Busca por palavras-chave
- ✅ Design responsivo e acessível
- 🔒 (Em breve) Login com Firebase Auth
- ☁️ (Em breve) Gerenciamento de conteúdo via Firestore

---

## 📁 Estrutura do projeto
/guia-direitos-cidadao
│
├── App.js # Arquivo principal
├── assets/ # Ícones, imagens e fontes
├── components/ # Componentes reutilizáveis da interface
├── screens/ # Telas (home, categorias, detalhes, etc.)
├── services/ # Conexão com Firebase
├── firebaseConfig.js # Configurações do Firebase
└── package.json # Dependências e scripts


---

## ▶️ Como rodar o projeto localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/guia-direitos-cidadao.git
cd guia-direitos-cidadao

Instale as dependências:

bash
Copiar
Editar
npm install
Configure o Firebase:

Crie um projeto no Firebase Console

No arquivo firebaseConfig.js, cole as credenciais do seu projeto Firebase:

js
Copiar
Editar
// firebaseConfig.js
export const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  projectId: "SEU_ID",
  storageBucket: "SEU_BUCKET",
  messagingSenderId: "SEU_ID_MENSAGENS",
  appId: "SEU_APP_ID"
};
Inicie o projeto com o Expo:

bash
Copiar
Editar
expo start
Abra no celular:

Instale o app Expo Go.

Escaneie o QR Code gerado no terminal.

💡 Próximas melhorias
 Cadastro/login de usuários

 Área personalizada com favoritos

 Notificações com lembretes de direitos importantes

 Integração com API oficial de legislação

📌 Licença
Este projeto está sob a licença MIT.




