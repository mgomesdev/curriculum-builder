/* eslint-disable no-undef */
import fs from 'fs';

const commitMsgFile = process.argv[2];
const commitMsg = fs.readFileSync(commitMsgFile, 'utf8').trim();
const typePattern = /^(feat|fix|docs|style|refactor|perf|test|chore|ci|build|revert)(\(.+\))?: .+/;
const maxLength = 120;

const errors = [];

if (!typePattern.test(commitMsg)) {
  errors.push(`
❌ ERRO: Formato de commit inválido!

📝 Formato esperado: type(scope): description

🏷️  Tipos válidos:
   feat:     ✨ Nova funcionalidade
   fix:      🐛 Correção de bug  
   docs:     📚 Documentação
   style:    💎 Formatação
   refactor: 📦 Refatoração
   perf:     🚀 Performance
   test:     🚨 Testes
   chore:    ⚙️  Configurações

📋 Exemplos válidos:
   feat: adicionar login do usuário
   fix(auth): corrigir validação de senha
   docs: atualizar README
`);
}

if (commitMsg.length > maxLength) {
  errors.push(`
❌ ERRO: Mensagem muito longa! (${commitMsg.length}/${maxLength} caracteres)

💡 Mantenha a mensagem concisa e objetiva.
`);
}

if (commitMsg.split(':')[1] && commitMsg.split(':')[1].trim().length === 0) {
  errors.push(`
❌ ERRO: Descrição não pode estar vazia!

💡 Adicione uma descrição após os dois pontos.
`);
}

if (errors.length > 0) {
  console.error('\n🚫 COMMIT REJEITADO\n');
  errors.forEach(error => console.error(error));
  console.error('🔄 Corrija a mensagem e tente novamente.\n');
  process.exit(1);
}

console.log('✅ Mensagem de commit válida!');
