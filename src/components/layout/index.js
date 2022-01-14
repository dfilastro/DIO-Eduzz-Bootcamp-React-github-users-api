import React from 'react';
import * as S from './styled';
import Header from '../header';
import useGitHub from '../../hooks/git-hooks';

function Layout({ children }) {
  const { gitHub } = useGitHub();

  return (
    <S.WrapperLayout>
      <header>
        <Header />
        {gitHub.loading ? <p>Loading...</p> : <>{children}</>}
      </header>
    </S.WrapperLayout>
  );
}

export default Layout;
