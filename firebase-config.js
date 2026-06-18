// ================================================================
//  CONFIGURAÇÃO DE SEGURANÇA — ALMEIDA JJ PDV
// ================================================================
//
//  MODO LOCAL (padrão, sem Firebase):
//  • Mantenha FIREBASE_HABILITADO = false
//  • Altere as senhas em CREDENCIAIS_LOCAIS abaixo
//  • As credenciais ficam neste arquivo, fora do código principal
//
//  MODO FIREBASE (recomendado para produção):
//  • Acesse https://console.firebase.google.com/ e crie um projeto
//  • Adicione um "App Web" e copie as configurações para firebaseConfig
//  • Ative: Authentication > Método de login > E-mail/senha
//  • Ative: Firestore Database (modo produção)
//  • Crie os usuários no Firebase Authentication com os e-mails
//    definidos em USUARIOS_CONFIG (ex: admin@almeidajj.loja)
//  • Aplique a regra de segurança no Firestore:
//      rules_version = '2';
//      service cloud.firestore {
//        match /databases/{database}/documents {
//          match /dados/{document=**} {
//            allow read, write: if request.auth != null;
//          }
//        }
//      }
//  • Mude FIREBASE_HABILITADO para true
//
// ================================================================

// --- MODO DE OPERAÇÃO ---
const FIREBASE_HABILITADO = false; // ← Mude para true ao usar Firebase

// --- CREDENCIAIS LOCAIS (usadas quando FIREBASE_HABILITADO = false) ---
// IMPORTANTE: Altere as senhas padrão antes de usar em produção!
window.CREDENCIAIS_LOCAIS = {
    admin: { usuario: 'almeidajj', senha: 'ALTERE_ESTA_SENHA_ADMIN' },
    loja:  { usuario: 'loja',      senha: 'ALTERE_ESTA_SENHA_LOJA'  }
};

// --- MAPEAMENTO DE USUÁRIO PARA E-MAIL FIREBASE ---
// Usado quando FIREBASE_HABILITADO = true
// O "usuario" digitado na tela é mapeado para o e-mail cadastrado
// no Firebase Authentication, e o "role" define o nível de acesso.
window.USUARIOS_CONFIG = {
    'almeidajj': { email: 'ramos@almeidajj.loja', role: 'admin' },
    'loja':      { email: 'loja@almeidajj.loja',  role: 'loja'  }
};

// --- CONFIGURAÇÃO DO PROJETO FIREBASE ---
// Preencha com os dados do seu projeto (aba "Configurações do projeto")
const firebaseConfig = {
    apiKey:            "AIzaSyD06IVdr_fzxDqVtC2e0unfwaPjlS1tFJY",
    authDomain:        "almeidajj-pdv.firebaseapp.com",
    projectId:         "almeidajj-pdv",
    storageBucket:     "almeidajj-pdv.firebasestorage.app",
    messagingSenderId: "208828986631",
    appId:             "1:208828986631:web:7796bb249fb3bf334a41a2"
};

// --- INICIALIZAÇÃO ---
window.FIREBASE_HABILITADO = FIREBASE_HABILITADO;

if (FIREBASE_HABILITADO) {
    firebase.initializeApp(firebaseConfig);
    window.db   = firebase.firestore();
    window.auth = firebase.auth();
} else {
    window.db   = null;
    window.auth = null;
}
