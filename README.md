# Clinical Torres — demonstração estática

Versão atualizada para apresentar o design ao cliente. O agendamento é uma
simulação visual: não salva reservas nem bloqueia horários reais.
A área administrativa e o banco de dados não fazem parte desta demonstração.

## GitHub
Extraia o ZIP e envie o conteúdo da pasta clinical-torres-demo ao repositório,
preservando src, lib e public. package.json deve ficar na raiz.

## Render — Static Site
Build Command: npm install && npm run build
Publish Directory: dist
Adicione Rewrite: /* -> /index.html

## Computador
Node.js 22.13 ou superior.
npm install
npm run dev

## Publicar sem compilação
A pasta site-pronto contém a versão compilada. Hospede TODO o seu conteúdo
em uma hospedagem de arquivos estáticos. Configure fallback para index.html
nas páginas internas. No Render sem build: publique site-pronto.

As imagens, profissionais e depoimentos ilustrativos são para apresentação.
"# democlinica" 
"# democlinica" 
