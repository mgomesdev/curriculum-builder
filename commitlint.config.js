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
};
