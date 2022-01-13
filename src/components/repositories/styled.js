import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
`;

// WrapperTabList.tabsRole = 'TabList';

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid black;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  margin-right: 8px;
  width: 210px;
  text-align: center;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-bottom: 1px solid black;
    background-color: black;
    color: white;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const WrapperTabPanel = styled(TabPanel)`
  padding: 8px;
  boder: 1px solid black;
  //   box-shadow: 0 0 0rem rgba(0, 0, 0, 0.5);
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
    background-color: black;
    color: white;
  }
`;
