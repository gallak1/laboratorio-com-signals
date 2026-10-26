# Lab Signals

Projeto de estudos desenvolvido com **Angular 18** para aprender e praticar o uso de **Signals** em aplicações reativas. A aplicação usa exemplos com elementos químicos para demonstrar como gerenciar estado, reagir a mudanças e compartilhar dados entre componentes.

> **Tecnologias:** Angular 18, TypeScript, RxJS e Angular CLI. Este projeto não usa React nem Vite.

## O que você vai encontrar

- Uma lista de elementos químicos e seleção de um elemento.
- Cálculo e exibição de informações derivadas dos elementos.
- Alteração da temperatura para acompanhar o estado físico do elemento selecionado.
- Gerenciamento de elementos favoritos.
- Exemplos de estado compartilhado entre componentes por meio de um serviço.

## O que é praticado

- **Signals e estado reativo:** entender signals como valores acompanhados pelo Angular. Quando um signal muda, os consumidores que dependem dele podem ser atualizados automaticamente.
- **Writable signals:** criar sinais graváveis para armazenar estados — como elemento selecionado, temperatura e favoritos — e atualizá-los com métodos como `set()` e `update()`.
- **Computed signals:** derivar valores de outros sinais, como as informações do elemento selecionado e a soma das massas. O Angular recalcula esses valores quando suas dependências mudam.
- **Exibição no HTML:** ler signals e valores computados nos templates para manter a interface sincronizada com o estado da aplicação.
- **Effects:** executar ações em resposta a mudanças de signals. No exemplo de temperatura, um effect observa o elemento selecionado e a temperatura e atualiza o estado físico exibido.
- **Escrita em effects:** conhecer a opção `{ allowSignalWrites: true }`, usada neste exemplo para permitir que o effect atualize um signal. Effects são indicados para efeitos colaterais; para valores derivados, `computed` costuma ser a opção adequada.
- **Estado centralizado em serviços:** concentrar signals e operações relacionadas aos elementos em um serviço compartilhado. Isso evita duplicar lógica nos componentes e facilita a evolução da aplicação.
- **Reatividade entre componentes:** compartilhar o serviço permite que diferentes componentes leiam e atualizem o mesmo estado, refletindo as mudanças na interface sem sincronização manual.
- **Desempenho com `OnPush`:** combinar a estratégia de detecção de mudanças `OnPush` com signals para que componentes reajam às dependências usadas e evitem verificações desnecessárias.
- **Funções e dependências de signals:** organizar atualizações e cálculos em funções específicas e observar somente os sinais realmente necessários.
- **`untracked`:** ler valores dentro de um cálculo sem adicioná-los como dependências rastreadas, evitando recálculos causados por mudanças que não devem disparar aquele cálculo.

Em conjunto, esses recursos ajudam a simplificar a lógica dos componentes e a construir interfaces dinâmicas, reativas e mais fáceis de escalar.

## Pré-requisitos

- Node.js e npm instalados.

## Executar localmente

Clone o repositório, entre na pasta do projeto e instale as dependências:

```bash
git clone https://github.com/gallak1/laboratorio-com-signals.git
cd laboratorio-com-signals
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Abra o endereço indicado pelo Angular CLI (normalmente `http://localhost:4200/`). O servidor recompila a aplicação quando os arquivos são alterados.

## Gerar build de produção

```bash
npm run build
```

O Angular CLI gera os arquivos estáticos em `dist/lab-signals/`. Para publicar, envie o conteúdo dessa pasta para um serviço de hospedagem de sites estáticos. Se a aplicação for hospedada em um caminho diferente da raiz do domínio, configure o `base href` de acordo com esse caminho ao gerar o build, por exemplo:

```bash
npm run build -- --base-href /caminho-do-projeto/
```

Configure também a hospedagem para redirecionar rotas da aplicação para `index.html`, permitindo que a navegação do Angular funcione ao acessar ou atualizar diretamente uma rota.
