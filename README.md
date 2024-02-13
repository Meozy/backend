![Meozy](https://meozy.github.io/.github/profile/assets/meozy.png)
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <h3 align="center">Meozy Player</h3>
  <p align="center">
    Uma aplicação de streaming de áudio!
    <br />
    <a href="">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details open="true">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#sobre">Sobre</a></li>
    <li><a href="#arquitetura">Arquitetura</a></li>
    <li><a href="#licença">Licença</a></li>
  </ol>
</details>

<!-- ABOUT -->
## Sobre
Backend pro projeto Meozy. 

<!-- ARCHITECTURE -->
## Arquitetura
### Estrutura de pastas:
- **src:** Código-fonte do projeto.
    - **config:** Contém arquivos de configuração para o projeto.
    - **modules:** Contém diferentes módulos do projeto.
        - **module(Ex: User):** Módulo específico da aplicação.
            - **domain:** Contém a lógica principal e as regras de negócio para o módulo de usuário.
                - **models:** Define modelos de dados para usuários.
                - **repositories:** Lida com o acesso a dados e a persistência de dados do usuário.
            - **infra:** Lida com as preocupações da infraestrutura, como serviços web e bancos de dados para o módulo atual.
               	- **http:** Relacionado à comunicação HTTP, potencialmente incluindo:
                    - **controllers:** Implementa a lógica do controlador para lidar com solicitações HTTP.
                    - **routes:** Define regras de roteamento para mapear URLs para controladores.
                - **orm:** Pode usar um framework de Object-Relational Mapping (ORM) para interagir com um banco de dados.
                    - **entities:** Representa entidades de banco de dados para armazenar dados do usuário.
                    - **repositories:** Fornece abstrações para acessar e manipular dados do usuário no banco de dados.
            - **providers:** Provavelmente contém classes responsáveis por fornecer dependências no módulo de usuário.
            - **services:** Abriga vários serviços relacionados à funcionalidade do usuário.
            - **views:** Pode conter modelos usados para renderizar interfaces relacionadas ao usuário.
    - **shred:** Contém componentes comuns e reutilizáveis em todo o projeto.
        - **errors:** Define classes de erro personalizadas para o projeto.
        - **infra:** Contém preocupações de infraestrutura compartilhada.
            - **http:** Componentes compartilhados para comunicação HTTP, potencialmente incluindo:
                - **middlewares:** Funções de middleware para interceptar e processar solicitações/respostas HTTP.
                - **routes:** Lógica de roteamento principal compartilhada em diferentes módulos.
            - **orm:** Fornece funcionalidades comuns relacionadas ao ORM.
                - **migrations:** Lida com migrações de esquema de banco de dados.

<!-- LICENSE -->
## Licença

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>