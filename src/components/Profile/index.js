import React from 'react';
import * as S from './styled';
import useGitHub from '../../hooks/git-hooks';

// import { Container } from './styles';

function Profile() {
  const { gitHub } = useGitHub();

  return (
    <S.Wrapper>
      <S.WrapperImg src='https://avatars.githubusercontent.com/u/90292951?v=4' alt='User`s picture' />
      <S.WrapperInfoUser>
        <div>
          <h1>{gitHub.user.name}</h1>
          <S.WrapperStatusUsername>
            <h3>Username:</h3>
            <a href='https://github.com/dfilastro' target='_blank' rel='noreferrer'>
              DFilastro
            </a>
          </S.WrapperStatusUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>3</span>
          </div>
          <div>
            <h4>Starred</h4>
            <span>3</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>3</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
}

export default Profile;
