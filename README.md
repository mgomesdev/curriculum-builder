## 📄 Projeto: **Curriculum Builder** - WIP

---

### 🧠 Visão Geral

Uma aplicação web que permite editar o currículo diretamente na tela, sem depender de editores de PDF, com funcionalidades de atualização em tempo real, ordenação, salvamento de versões e exportação em PDF, trazendo praticidade e autonomia para manter o currículo atualizado com poucos cliques.

### 🔍 Problema

Manter o currículo sempre atualizado no formato PDF é uma tarefa manual e suscetível ao esquecimento, especialmente para quem tem uma rotina corrida. Editar PDFs pode ser trabalhoso, exige ferramentas específicas e muitas vezes dificulta pequenos ajustes rápidos.

---

### ✅ Solução

Uma ferramenta web que permite:

- Visualizar e editar o currículo diretamente na tela.
- Clicar sobre os campos para alterar informações inline.
- Reordenar seções do currículo de maneira simples (drag-and-drop).
- Salvar versões do currículo editado.
- Fazer download do currículo atualizado em formato PDF.
- Basear-se em modelos personalizáveis (inicialmente apenas 1).

---

### 🧩 Funcionalidades

| Funcionalidade | Descrição |
| --- | --- |
| **Edição inline** | O usuário poderá clicar sobre qualquer texto no currículo para editá-lo diretamente. |
| **Reordenação de blocos** | O usuário poderá arrastar e soltar seções do currículo (experiência, formação, etc.) para reorganizar conforme desejar. |
| **Salvar versão** | Após cada edição, o usuário pode clicar em “Salvar versão” para manter um histórico (template JSON). |
| **Exportar PDF** | Possibilidade de baixar o currículo atualizado como um arquivo `.pdf`. |
| **Modelo inicial** | A aplicação será baseada em um modelo de currículo pré-definido. |
| **Sem login/autenticação** | A versão inicial será focada em uso rápido, sem necessidade de conta ou sessão. |

---

### 📦 Tecnologias

| Requisito | Tecnologia |
| --- | --- |
| Frontend | React + TypeScript |
| Edição inline | ContentEditable |
| Reordenação | `dnd-kit` |
| Geração de PDF | `react-pdf` |
| Armazenamento local | `json templates` |
| Estilização | `tailwindCSS`  |

---

### 🛣️ Roadmap de Desenvolvimento (MVP)

1. **Renderizar modelo base do currículo**
2. **Implementar edição inline dos campos**
3. **Adicionar recurso de reordenação das seções**
4. **Botão "Salvar versão" que armazena o template do curriculo em formato json**
5. **Botão "Baixar PDF"**
6. **Responsividade básica para desktop e mobile**

---

### 📌 Considerações Futuras

- Suporte a múltiplos modelos de currículo.
- Login com GitHub/Google para salvar versões na nuvem.
- Modo de visualização pública (compartilhável com link).
- Análise de palavras-chave e sugestões de melhoria com IA.
- Exportação para outros formatos (Word, JSON, Markdown).

---

### ✅ Contribuição

- Sinta-se a vontade para contribuir com PRs!
---

### 📄 Licença

- MIT
