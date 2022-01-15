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
  border-radius: 8px;
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

  // &:hover {
  //   border-color: blue;
  //   color: blue;
  // }

  &.is-selected {
    border-bottom: 1px solid rgb(48, 54, 61);
    background-color: rgb(8, 22, 35);
    color: white;
    // border-top-left-radius: 8px;
    // border-top-right-radius: 8px;
    // border-bottom-left-radius: 0;
    // border-bottom-right-radius: 0;
  }
`;

export const WrapperTabPanel = styled(TabPanel)`
  boder: 1px solid black;
  //   box-shadow: 0 0 0rem rgba(0, 0, 0, 0.5);
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: flex;
    // background-color: rgb(1, 4, 9);
    // color: white;
    border-radius: 8px;
    // width: 50%;
  }
`;

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
`;
