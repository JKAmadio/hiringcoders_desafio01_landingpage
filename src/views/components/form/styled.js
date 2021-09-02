import styled from "styled-components";

export const Container = styled.div`
	width: 40%;
	margin-left: 80px;
`

export const FormTitle = styled.h2`
	font-family: Suez One;
	font-size: 36px;
	color: #ffffff;
	margin: 0;
	margin-bottom: 15px;
	width: 100%;
	letter-spacing: 2px;

`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

export const FormLabel = styled.label`
	width: 80%;
	color: #ffffff;
	margin-bottom: 10px;
	`

export const FormInput = styled.input`
	width: 80%;
	height: 20px;
	padding: 6px 10px;
	margin-bottom: 20px;
	border-radius: 5px;
	border: 0;
	background-color: #f4f4f4;

	&:focus{
		outline: none;
		box-shadow: 0px 0px 3px 2px #f4f4f470;
	}
	`

export const FormFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 85%;
`

export const FormButton = styled.button`
	height: 40px;
	padding: 6px 30px;
	border-radius: 5px;
	border: 0;
	color: #8C2C16;

	&:hover{
		background-color: #e9e9e9;
		cursor: pointer;
	}
`

export const FormMessage = styled.p`
	font-family: 'Crimson Text';
	font-weight:600;
	font-size: 18px;
	color: #ffffff;
	letter-spacing: 1px;
	visibility:hidden;

	&[visibility='1'] {
		visibility:visible;
	}

`