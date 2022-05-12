/* eslint-disable react/function-component-definition */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const ApplicationRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/repository/:user/:repositoryName" element={<Repository />} />
  </Routes>
);

export default ApplicationRoutes;
