import styled from "styled-components";
import Background from '../../../assets/Banner/background.jpg'

export const Main = styled.div`
`
export const MainBanner = styled.div`
	background: url(${Background});
	background-size: cover;
`

export const Container = styled.div`
	height: 70vh;
	width: 70%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-around;
`

export const MainTitle = styled.h1`
	font-family: Suez One;
	font-size: 5rem;
	color: white;
	`

export const HorizontalLine = styled.hr`
	width: 80%;
	height:5px;
	border-width:0;
	color:#ffffff;
	background-color:#ffffff;
	margin-left: 0;
`

export const MainSubtitle = styled.p`
	font-family: 'Crimson Text';
	font-size: 24px;
	color: white;
	width: 55%;
`

export const MainHighlights = styled.div`
	width: 30vw;
	margin-top: 150px;
	background-color: #D9A25F;
	padding: 20px;
	border-radius: 0 30px 0 30px;
`

export const MainHighlightsList = styled.ul`
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	list-style: none;
`

export const HighlightsItem = styled.li`
	display: flex;
	align-items: center;
	height: 175px;
`

export const HighlightsImage = styled.img`
	height: 80px;
	margin-right: 40px;
`

export const HighlightsText = styled.p`
	font-family: 'Crimson Text';
	font-weight:600;
	font-size: 18px;
	width: 100px;
`

export const MainOptions = styled.div`
	width: 70vw;
	margin: 0 auto;
	padding: 70px;
`

export const OptionsTitle = styled.h2`
	font-family: Suez One;
	font-size: 2.5rem;
	color: #8C2C16;
`

export const OptionsList = styled.ul`
	display: flex;
	align-items:center;
	justify-content: space-between;
	list-style: none;
`

export const OptionsItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background-color: #F2CEA2;
	padding: 30px 0;
	width: 250px;
	height: 250px;
`

export const OptionTitle = styled.h3`
	font-size: 1.6rem;
	margin: 0;
`

export const OptionImage = styled.img`
	height: 125px;
`

export const MainContact = styled.div`
	height: 40vh;
	min-height: 350px;
	width: 70%;
	margin: 0 auto;
	background-color: #8C2C16;
	border-radius: 30px 0 30px 0;
	margin-bottom: 80px;
	display:flex;
	align-items: center;
	justify-content: space-between;
`