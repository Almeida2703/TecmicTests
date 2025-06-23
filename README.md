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


