// @flow
import React from 'react';
import styled from 'styled-components';
import A from 'components/A';

type Props = {
  name: string,
  onClick: () => void,
};

const Name = styled(A)`
	color: #74787c;
	line-height: 1;
	margin-left: 0.5rem;
	font-size: 0.9rem;
	margin-right: 5px;
`;

const Line = styled.p`
	margin: 0;
`;

const ProfileWrapper = styled.div`
	display: inline-flex;
	margin-top: 2px;
	white-space: nowrap;
	word-wrap: break-word;
	overflow: hidden;
	margin-bottom: 10px;
	cursor: pointer;
`;

const Profile = ({name, onClick}: Props) => (
  <ProfileWrapper>
    <Line>
      <Name onClick={onClick}>
        {name}
      </Name>
    </Line>
  </ProfileWrapper>
);

export default Profile;
