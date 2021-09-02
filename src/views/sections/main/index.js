import * as S from './styled'
import semente from '../../../assets/Destaques/semente.png'
import embalagem from '../../../assets/Destaques/embalagem_inicial.png'
import cafezinho from '../../../assets/Destaques/xicara_cafe.png'
import coado from '../../../assets/Opcoes/coado.png'
import expresso from '../../../assets/Opcoes/expresso.png'
import grao_torrado from '../../../assets/Opcoes/grao_torrado.png'
import prensa_francesa from '../../../assets/Opcoes/prensa_francesa.png'
import Form from '../../components/form'
import Map from '../../components/map'

function Main(){
	return(
		<S.Main>
			<S.MainBanner>
				<S.Container>
					<div>
						<S.MainTitle>Coffe Shop</S.MainTitle>
						<S.HorizontalLine/>
						<S.MainSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum sit amet tortor eu consectetur. Praesent ultrices porttitor metus.</S.MainSubtitle>
					</div>
					<S.MainHighlights>
						<S.MainHighlightsList>
							<S.HighlightsItem>
								<S.HighlightsImage src={semente} alt=""/>
								<S.HighlightsText>Plantadas com carinho</S.HighlightsText>
							</S.HighlightsItem>
							<S.HighlightsItem>
								<S.HighlightsImage src={embalagem} alt=""/>
								<S.HighlightsText>Sementes selecionadas</S.HighlightsText>
							</S.HighlightsItem>
							<S.HighlightsItem>
								<S.HighlightsImage src={cafezinho} alt=""/>
								<S.HighlightsText>Cafezinho delicioso</S.HighlightsText>
							</S.HighlightsItem>
						</S.MainHighlightsList>
					</S.MainHighlights>
				</S.Container>
			</S.MainBanner>
			<S.MainOptions>
				<S.OptionsTitle>Opções de sementes</S.OptionsTitle>
				<S.OptionsList>
					<S.OptionsItem>
						<S.OptionTitle>Grão Torrado</S.OptionTitle>
						<S.OptionImage src={grao_torrado} alt=""/>
					</S.OptionsItem>
					<S.OptionsItem>
						<S.OptionTitle>Moagem Grossa</S.OptionTitle>
						<S.OptionImage src={prensa_francesa} alt=""/>
					</S.OptionsItem>
					<S.OptionsItem>
						<S.OptionTitle>Moagem Média</S.OptionTitle>
						<S.OptionImage src={coado} alt=""/>
					</S.OptionsItem>
					<S.OptionsItem>
						<S.OptionTitle>Moagem Fina</S.OptionTitle>
						<S.OptionImage src={expresso} alt=""/>
					</S.OptionsItem>
				</S.OptionsList>
			</S.MainOptions>
			<S.MainContact>
				<Form/>
				<Map/>
			</S.MainContact>
		</S.Main>
	)
}

export default Main;