import React, { useEffect, useLayoutEffect, useState } from 'react';
import * as S from './styled';
import RepositoryItem from '../repository item/index';
import useGitHub from '../../hooks/git-hooks';

function Repositories() {
  const { gitHub, getUserRepos, getUserStarred } = useGitHub();
  const [userSearchRepos, setUserSearchRepos] = useState(false);

  useEffect(() => {
    if (!!gitHub.user.login) {
      getUserRepos(gitHub.user.login);
      getUserStarred(gitHub.user.login);
    }

    setUserSearchRepos(!!gitHub.repositories);
    // eslint-disable-next-line
  }, [gitHub.user.login]);

  return (
    <>
      {userSearchRepos ? (
        <S.WrapperTabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>

          <S.WrapperTabPanel>
            <S.WrapperList>
              {gitHub.repositories.map((item) => (
                <RepositoryItem key={item.id} name={item.name} linkToRepo={item.html_url} fullName={item.full_name} />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>

          <S.WrapperTabPanel>
            <S.WrapperList>
              {gitHub.starred.map((item) => (
                <RepositoryItem key={item.id} name={item.name} linkToRepo={item.html_url} fullName={item.full_name} />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
}

export default Repositories;
