// @flow
import React from 'react';

export const SettingsIcon = () => (
	<svg viewBox="0 0 24 24">
		<g><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65c-.03-.24-.24-.42-.49-.42h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-7.43 2.52c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
	</svg>
);

export const MangaIcon = () => (
	<svg viewBox="0 0 24 24">
		<g><path d="M10 18h5v-6h-5v6zm-6 0h5v-13h-5v13zm12 0h5v-6h-5v6zm-6-13v6h11v-6h-11z"></path></g>
	</svg>
);

export const SearchIcon = () => (
	<svg viewBox="0 0 24 24">
		<g><path d="M15.5 14h-.79l-.28-.27c.98-1.14 1.57-2.62 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"></path></g>
	</svg>
);

export const CloseIcon = () => (
	<svg viewBox="0 0 24 24" style={{fill: 'white'}}>
		<g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path></g>
	</svg>
);

export const AddIcon = () => (
	<svg viewBox="0 0 24 24">
		<g><path d="M19 13h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2z"></path></g>
	</svg>
);

export const LoadingIcon = () => (
	<svg viewBox="0 0 24 30">
		<rect x="0" y="0" width="4" height="20" fill="#333">
			<animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0s" dur="0.6s" repeatCount="indefinite"/>
		</rect>
		<rect x="7" y="0" width="4" height="20" fill="#333">
			<animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite"/>
		</rect>
		<rect x="14" y="0" width="4" height="20" fill="#333">
			<animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite"/>
		</rect>
	</svg>
);
