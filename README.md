# toDoTimer

Projeto de organização pessoal para gerenciamento de atividades. O To Do Timer mescla os aplicativos consagrados de organização pessoal, o to do list e o timer, para quem gosta de cronometrar as tarefas.
<br>
Cabe destacar que o layout da aplicação, cores, imagens e tipografia foi baseada em um dos desafios do [Front-end Mentors](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-).

## Construção

O To Do Timer foi criado com React e TypeScript, sendo a base do projeto criada com o Vite. A navegação entre as páginas foi possível através do uso da biblioteca React Router Dom, os formulários foram tratados com as bibliotecas React Hook Form e Zod integradas. 
<br>
Optou-se por utilizar a funcionalidade de context e useReducer do React para tratamento e manipulação das variáveis.
<br>
Os dados referentes as atividades criadas foram armazenadas no localStorage, dessa maneira o usuário pode atualizar a página e não irá perder as atividades que foram adicionadas. Por fim, a aplicação é compatível com os tamanhos de dispositivos mais comuns, ou seja, possui responsividade a partir da aplicação do conceito de mobile first. 

### Principais ferramentas utilizadas

- Construído com [Vite](https://vitejs.dev/);
- Estilização com [Styled-components](https://styled-components.com/);
- [React Router](https://reactrouter.com/en/main) para criação das rotas da aplicação;
- [React Hook Form](https://react-hook-form.com/) para lidar com formulários;
- [Zod](https://github.com/colinhacks/zod) para validação de formulários;
- [Date fns](https://date-fns.org/) para lidar com datas;
- [Immer](https://github.com/immerjs/immer) para lidar com estados.

## Deploy da aplicação

[To Do Timer](https://to-do-timer.vercel.app/)
<br>
Caso prefira abrir a aplicação no localhost basta digitar o comando `npm run dev`

## Vídeo da aplicação

## Design da aplicação

<img src=" " width="600">

## Dados complementares

- Autor: [Yasmin](https://www.linkedin.com/in/yasmin-goncalves/)