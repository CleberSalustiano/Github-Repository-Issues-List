/* eslint-disable react/function-component-definition */
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logoApp.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explore" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/84328609?v=4"
          alt="Cleber Salustiano"
        />
        <div>
          <strong>github/clebersalustiano</strong>
          <p>Esse aqui é o meu repositório</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/84328609?v=4"
          alt="Cleber Salustiano"
        />
        <div>
          <strong>github/clebersalustiano</strong>
          <p>Esse aqui é o meu repositório</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/84328609?v=4"
          alt="Cleber Salustiano"
        />
        <div>
          <strong>github/clebersalustiano</strong>
          <p>Esse aqui é o meu repositório</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
