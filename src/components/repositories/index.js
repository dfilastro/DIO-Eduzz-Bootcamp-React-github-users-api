import React from 'react';
import * as S from './styled';
import RepositoryItem from '../repository item/index';

function Repositories() {
  return (
    <S.WrapperTabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem
          name='dice-game'
          linkToRepo='https://github.com/dfilastro/dice-game'
          fullName='dfilastro/dice-game'
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          name='exercicio-variaveis-e-tipos-JavaScript'
          linkToRepo='https://github.com/dfilastro/exercicio-variaveis-e-tipos-JavaScript'
          fullName='dfilastro/exercicio-variaveis-e-tipos-JavaScript'
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
}

export default Repositories;
