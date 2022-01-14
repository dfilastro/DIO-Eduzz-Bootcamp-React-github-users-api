import React from 'react';
import * as S from './styled';
import useGitHub from '../../hooks/git-hooks';

// import { Container } from './styles';

function Profile() {
  const { gitHub } = useGitHub();

  return (
    <S.Wrapper>
      <S.WrapperImg src={gitHub.user.avatar_url} alt='User`s picture' />
      <S.WrapperInfoUser>
        <div>
          <h1>{gitHub.user.name}</h1>
          <S.WrapperStatusGeneral>
            <h3>Username:</h3>
            <a href={gitHub.user.html_url} target='_blank' rel='noreferrer'>
              {gitHub.user.login}
            </a>
          </S.WrapperStatusGeneral>
          <S.WrapperStatusGeneral>
            <h3>Company:</h3>
            <>{gitHub.user.company}</>
          </S.WrapperStatusGeneral>
          <S.WrapperStatusGeneral>
            <h3>Location:</h3>
            <>{gitHub.user.location}</>
          </S.WrapperStatusGeneral>
          <S.WrapperStatusGeneral>
            <h3>User Bio:</h3>
            <>{gitHub.user.bio}</>
          </S.WrapperStatusGeneral>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{gitHub.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>{gitHub.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{gitHub.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{gitHub.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
}

export default Profile;
