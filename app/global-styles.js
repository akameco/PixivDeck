// @flow
import {injectGlobal} from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
	* {
		-webkit-font-smoothing: antialiased;
	}

	html,
	body,
	div,
	li,
	ul,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	a,
	img {
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
	}

	html,
	body {
		overflow-y: hidden;
	}

	:active,
	:focus {
		outline: 0;
		outline-style: none;
		outline-width: 0;
	}

	body {
		font-family: Helvetica, "游ゴシック", "Yu Gothic", sans-serif;
	}

	li {
		list-style-type: none;
	}

	a {
		cursor: pointer;
	}

	a,
	body {
		color: #444;
	}

	#root {
		margin: 0;
		padding: 0;
		overflow-y: hidden;
	}

	:global .react-tabs [role=tablist] {
		margin: 0;
		border: none;
	}

	:global .react-tabs [role=tab] {
		border-radius: 0;
		padding: 10px 12px;
	}

	:global .react-tabs [role=tab][aria-selected=true] {
		border-radius: 0;
		padding: 10px 12px;
	}
`
