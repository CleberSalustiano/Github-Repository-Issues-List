/* eslint-disable react/function-component-definition */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logoApp.svg';

const Repository: React.FC = () => {
  const { user, repositoryName } = useParams();
  const repository = `${String(user)}/${String(repositoryName)}`;

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Exporer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/84328609?v=4"
            alt="img"
          />
          <div>
            <strong>cleber/teste</strong>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="s">
          <div>
            <strong>asdasd</strong>
            <p>asdasd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};
export default Repository;
