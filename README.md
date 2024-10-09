# Teste Técnico - Sistema de Gerenciamento de Hotel

## Objetivo

O objetivo deste teste é avaliar sua capacidade de d**esenvolver soluções com foco em organização, boas práticas de
código, e validação de dados.** Você implementará funcionalidades de um sistema de gerenciamento de hotel que envolve
três
componentes principais:

1. Fila de Espera do Hotel
2. Banco de Dados de Hóspedes
3. Sistema de Reservas

Cada componente deve ser implementado de forma modular e com foco na correta manipulação de dados. O código deve ser
claro, organizado e seguir boas práticas, incluindo boas práticas de **versionamento de código.**

## Instruções

- Você **não precisa** implementar um sistema completo. A ideia é implementar as classes e métodos que foram deixados incompletos com **TODOs.**
- Siga a estrutura do projeto fornecido e preencha as partes indicadas.
- Utilize a linguagem **JavaScript** com **Node.js.**
- **Valide entradas de dados** quando necessário, tratando erros de forma apropriada.
- A documentação fornecida na forma de comentários e a estrutura dos arquivos deve ser seguida de perto
- É **importante seguir as boas práticas de versionamento de código**, conforme indicado na seção de "Submissão".

## Estrutura do Projeto

O projeto está dividido em três áreas principais:

1. **Reserva**:
   - Classe responsável pela gestão das reservas de quartos do hotel.
   - Parâmetros: número do quarto e data da reserva (formato `'YYYY-MM-DD'`).
2. **FilaDeEspera**:
   - Classe responsável pela fila de espera dos hóspedes que ainda não foram alocados em quartos.
   - Métodos para adicionar hóspedes à fila, verificar o próximo hóspede e atender (remover) o primeiro da fila.
3. **BancoDeDadosHospedes**:
   - Classe que interage com um banco de dados SQLite em memória para armazenar, buscar e atualizar informações dos hóspedes.

## O que você precisa implementar

- **Classe Reserva:**
  - Implementar o construtor e métodos para inicializar uma reserva, retornar o número do quarto e a data.
  - **Validações importantes:**
    - O número do quarto deve ser um número válido.
    - A data deve estar no formato `YYYY-MM-DD`.
- **Classe FilaDeEspera:**
    - Implementar a lógica para adicionar hóspedes, verificar o próximo hóspede e atender o primeiro hóspede da fila.
    - **Validações importantes:**
        - Verificar se a fila está vazia antes de tentar atender ou acessar o próximo hóspede.
        - Lidar com entradas inválidas ao adicionar um hóspede à fila.
- **Classe BancoDeDadosHospedes:**
    - Implementar a lógica para adicionar hóspedes, verificar o próximo hóspede e atender o primeiro hóspede da fila.
    - **Validações importantes:**
        - Verificar se a fila está vazia antes de tentar atender ou acessar o próximo hóspede.
        - Lidar com entradas inválidas ao adicionar um hóspede à fila.

## Detalhamento dos Problemas

1. **Fila de Espera do Hotel**

Você deverá implementar a lógica que gerencia a fila de espera do hotel. A fila aceita hóspedes, remove o primeiro quando ele é atendido, e permite que o próximo hóspede na fila seja visualizado.

- Métodos a serem implementados
  - `adicionar(hospede)`
  - `atender()`
  - `proximo()`
  - `estaVazia()`

2. **Banco de Dados de Hóspedes**

Você deverá implementar uma classe que interage com um banco de dados SQLite em memória, que permite armazenar, buscar e atualizar hóspedes.

- Métodos a serem implementados
    - `inserirHospede(nome, quarto)`
    - `buscarHospede(id)`
    - `atualizarQuarto(id, novoQuarto)`

3. **Sistema de Reservas**

A classe `Reserva` será responsável pela criação e gestão de reservas de quartos do hotel. Ela deverá validar o formato da data e o número do quarto antes de criar uma reserva.

- Métodos a serem implementados
    - `getQuarto()`
    - `getData()`

## Critérios de Avaliação

Seu código será avaliado com base nos seguintes critérios:

1. **Correção:**
   - O código deve realizar corretamente as operações solicitadas para cada um dos componentes.
2. **Boas Práticas:**
   - O código deve ser legível e organizado, utilizando nomes claros para variáveis, métodos e classes.
   - Seguir o **princípio da responsabilidade única**: cada método ou classe deve ter uma responsabilidade clara e bem definida.
   - Utilização correta de validações para entradas inválidas.
3. **Tratamento de Erros:**
    - O código deve prever e lidar com erros adequadamente, retornando mensagens claras em vez de quebrar ou lançar exceções não tratada
4. **Validações:**
    - O código deve validar os parâmetros de entrada, garantindo que os dados são consistentes antes de processá-los.
5. **Modularidade:**
    - O código deve estar organizado em módulos/classes conforme fornecido no template.
6. **Versionamento de Código:**
    - O uso adequado do Git é parte fundamental do processo. Certifique-se de seguir boas práticas, como trabalhar em uma branch específica (detalhes abaixo).

## Submissão e Boas Práticas de Versionamento

1. **Faça um fork do projeto:**
   - Ao iniciar o teste, faça um fork deste repositório para o seu GitHub pessoal.
2. **Crie uma branch específica:**
    - Crie uma branch nomeada de acordo com o formato: `teste/seu-nome`
      - Exemplo: `teste/joao-silva`.
    - Todos os seus commits devem ser feitos nesta branch, para que possamos acompanhar o seu progresso de forma clara.
3. **Commits claros e descritivos:**
    - Faça commits frequentes e com mensagens claras, que expliquem a mudança realizada.
    - Exemplo de commit: `Implementa a função de adicionar hóspedes à fila de espera`.
4. **Suba o código no seu repositório:**
    - Após concluir o teste, faça o push do código para o seu repositório.




