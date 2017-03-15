// @flow
import React from 'react';
import styled from 'styled-components';

const Notice = styled.div`
	display: block;
	background-color: #b13232;
	margin: 20px 5px;
	padding: 5px;
	color: #fff;
	border-radius: 2px;
	text-align: center;
	vertical-align: bottom;
`;

const ErrorNotify = () => (
  <Notice>
    <p>
      ログインに失敗しました。
      <br />
      ユーザ名とパスワードを確認してください。
    </p>
  </Notice>
);

export default ErrorNotify;
