export default {
   extends: ["@commitlint/config-conventional"],
   rules: {
      "type-enum": [
         2,
         "always",
         [
            "feat", // Nova funcionalidade
            "fix", // Correção de bug
            "docs", // Documentação
            "style", // Formatação (não afeta o código)
            "refactor", // Refatoração
            "perf", // Melhoria de performance
            "test", // Adição/correção de testes
            "chore", // Tarefas de build, configurações, etc.
            "ci", // Configurações de CI/CD
            "build", // Mudanças no sistema de build
            "revert", // Reverter commit anterior
         ],
      ],
      "type-case": [2, "always", "lower-case"],
      "type-empty": [2, "never"],
      "scope-case": [2, "always", "lower-case"],
      "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
      "subject-empty": [2, "never"],
      "subject-full-stop": [2, "never", "."],
      "header-max-length": [2, "always", 72],
   },
   // Mensagens de erro personalizadas
   helpUrl: "https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
   prompt: {
      messages: {
         skip: "(pressione enter para pular)",
         max: "máximo %d caracteres",
         min: "mínimo %d caracteres",
         emptyWarning: "não pode estar vazio",
         upperLimitWarning: "acima do limite",
         lowerLimitWarning: "abaixo do limite",
      },
      questions: {
         type: {
            description: "Selecione o tipo de mudança que você está commitando:",
            enum: {
               feat: {
                  description: "✨ Uma nova funcionalidade",
                  title: "Features",
                  emoji: "✨",
               },
               fix: {
                  description: "🐛 Uma correção de bug",
                  title: "Bug Fixes",
                  emoji: "🐛",
               },
               docs: {
                  description: "📚 Mudanças apenas na documentação",
                  title: "Documentation",
                  emoji: "📚",
               },
               style: {
                  description: "💎 Mudanças que não afetam o significado do código",
                  title: "Styles",
                  emoji: "💎",
               },
               refactor: {
                  description: "📦 Uma mudança de código que não corrige um bug nem adiciona uma funcionalidade",
                  title: "Code Refactoring",
                  emoji: "📦",
               },
               perf: {
                  description: "🚀 Uma mudança de código que melhora a performance",
                  title: "Performance Improvements",
                  emoji: "🚀",
               },
               test: {
                  description: "🚨 Adicionando testes ausentes ou corrigindo testes existentes",
                  title: "Tests",
                  emoji: "🚨",
               },
               chore: {
                  description: "⚙️ Mudanças no processo de build ou ferramentas auxiliares",
                  title: "Chores",
                  emoji: "⚙️",
               },
            },
         },
         scope: {
            description: "Qual é o escopo desta mudança (ex: componente ou nome do arquivo):",
         },
         subject: {
            description: "Escreva uma descrição curta e imperativa da mudança:",
         },
         body: {
            description: "Forneça uma descrição mais longa da mudança:",
         },
         isBreaking: {
            description: "Existem mudanças que quebram a compatibilidade?",
         },
         breakingBody: {
            description:
               "Um commit BREAKING CHANGE requer um corpo. Por favor, digite uma descrição mais longa da mudança:",
         },
         breaking: {
            description: "Descreva as mudanças que quebram a compatibilidade:",
         },
         isIssueAffected: {
            description: "Esta mudança afeta alguma issue aberta?",
         },
         issuesBody: {
            description:
               "Se as issues são fechadas, o commit requer um corpo. Por favor, digite uma descrição mais longa da mudança:",
         },
         issues: {
            description: 'Adicione as referências das issues (ex: "fix #123", "re #123"):',
         },
      },
   },
};
