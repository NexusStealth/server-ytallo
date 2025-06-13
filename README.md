# Server-Ytallo 🚀  
*Sistema completo com upload, IA (Groq), deploy de sites HTML e painel com suporte ao Termux e Firebase*

![Status](https://img.shields.io/badge/status-100%25%20pronto-brightgreen) 
![Supports](https://img.shields.io/badge/supports-Termux%20%7C%20PC%20%7C%20Node-orange)

## 🚀 Como rodar

### 1. Configurar variáveis de ambiente
```bash
cp .env.example .env
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Iniciar servidor
```bash
npm start
```

### 4. Ativar Cloudflare Tunnel
```bash
cloudflared tunnel --config cloudflared.yml run
```

## 🧠 Configuração da IA Groq
Configure sua chave API no arquivo `.env`:
```env
GROQ_API_KEY=sua_chave_aqui
```

## ☁️ Configuração do Firebase
1. Gere o JSON da conta de serviço no Firebase Console
2. Salve como `firebase-admin.json` na pasta:
```bash
config/firebase-admin.json
```

## ✔️ Compatibilidade
- ✅ Termux (Android)
- ✅ Windows
- ✅ Linux
- ✅ macOS
- ✅ Servidores Node.js

## 👨‍💻 Autor  
**Ytallo**  
[![GitHub](https://img.shields.io/badge/GitHub-NexusStealth-181717?style=flat&logo=github)](https://github.com/NexusStealth)
[Instagram](https://instagram.com/levi_oliveira86)


> Projeto 100% pronto para Termux, PC ou servidor Node  
> Feito por Ytallo Gabirel Oliveira da Silva 👊
