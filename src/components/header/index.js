import React, { useState } from 'react';
import useGitHub from '../../hooks/git-hooks';
import * as S from './styled';

// import { Container } from './styles';

function Header() {
  const { getUser } = useGitHub();
  const [userNameForSearch, setUserNameForSearch] = useState();

  function submitGetUser() {
    if (!userNameForSearch) return;
    return getUser(userNameForSearch);
  }

  return (
    <header>
      <S.Wrapper>
        <input
          type='text'
          placeholder='Find a user...'
          onChange={(event) => setUserNameForSearch(event.target.value)}
        ></input>
        <button type='submit' onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
}

export default Header;
