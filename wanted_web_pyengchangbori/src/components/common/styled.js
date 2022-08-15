import styled from 'styled-components';

export const PaddingHeader = styled.div`
	height: 50px;
`;

export const InputContainer = styled.input`
	width: 100%;
	height: 50px;
	padding-right: 15px;
	padding-left: 15px;
	margin-top: 11px;
	border-radius: 5px;
	border: 1px solid #e1e2e3;
	background-color: #fff;
	font-size: 15px;
	color: #333;
	box-shadow: none;
	box-sizing: border-box;
	outline: none;

	border-color: ${(props) => props.invalidCheck && '#fe415c'};
	border-color: ${(props) => props.errortype === 'object' && '#fe415c'};
	:focus {
		border-color: #36f;
	}
`;
