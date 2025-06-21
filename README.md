#  MauiTecmicProject

Este repositório contém o projeto **MauiTecmicProject**, uma simples aplicação em forma de um formulario simples desenvolvida com .NET MAUI . O projeto inclui também uma estrutura preparada para testes automatizados com Appium , pronto para uma futura integração com pipelines de CI/CD usando Azure DevOps.

---

## 🧪 Testes Automatizados

- Os testes são escritos com **Appium** para Android.
- O objetivo é validar o comportamento da app em dispositivos móveis ou emuladores.
- Os testes encontram-se no ficheiro `/Tests` .
- O projeto ainda **não está integrado num serviço de testes na cloud**, por isso os testes são executados localmente com emuladores Android ou dispositivos reais.

---

## 🔧 Tecnologias Utilizadas

- [.NET 8](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [MAUI](https://learn.microsoft.com/en-us/dotnet/maui/)
- [Appium](https://appium.io/)
- Android SDK e emuladores (local)
- GitHub (repositório principal)

---

## 📂 Estrutura do Projeto

```
MauiTecmicProject/
├── MauiTecmicProject/        # Projeto principal MAUI           
│   └── MainPage.xaml         # Interface principal da aplicação (UI) 
│   ├── MainPage.xaml.cs      # Lógica associada à MainPage (code-behind)                   
│   ├── Tests.js              # Testes de exemplo
│   └── ...
├── README.md                 # Este ficheiro
└── .gitignore                # Ficheiros e pastas ignoradas
```

---

## 🛠 Como Correr o Projeto Localmente

1. Instala o [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
2. Garante que tens o [Android SDK e emuladores configurados](https://learn.microsoft.com/en-us/dotnet/maui/android/emulator) no Visual Studio
3. Clona o repositório:
   ```bash
   git clone https://github.com/teu-utilizador/MauiTecmicProject.git
   ```
4. Abre o projeto no Visual Studio Comunity (com suporte para MAUI)
5. Inicializar o appium.
5. Seleciona um emulador e executa a aplicação

---

## ✅ Estado do DevOps (CI/CD)

> ⚠️ O pipeline de CI/CD com Azure DevOps **ainda não está configurado**.


