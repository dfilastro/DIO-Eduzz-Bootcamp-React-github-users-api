import React, { useState } from 'react';
import useGitHub from '../../hooks/git-hooks';
import * as S from './styled';

// import { Container } from './styles';

function Header() {
  const { getUser } = useGitHub();
  const [userNameForSearch, setUserNameForSearch] = useState();

  function submitGetUser(e) {
    e.preventDefault();
    if (!userNameForSearch) return;
    return getUser(userNameForSearch);
  }

  return (
    <header>
      <form onSubmit={submitGetUser}>
        <S.Wrapper>
          <input
            type='text'
            placeholder='Find a user...'
            onChange={(event) => setUserNameForSearch(event.target.value)}
          ></input>
          <button type='submit'>
            <span>Buscar</span>
          </button>
        </S.Wrapper>
      </form>
    </header>
  );
}

export default Header;
