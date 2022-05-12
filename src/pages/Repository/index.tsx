/* eslint-disable react/function-component-definition */
import React from 'react';
import { useParams } from 'react-router-dom';

const Repository: React.FC = () => {
  const { user, repositoryName } = useParams();
  const repository = `${String(user)}/${String(repositoryName)}`;

  return <h1>Repository:{repository} </h1>;
};
export default Repository;
