import * as S from './styled'
import facebook from '../../../assets/SocialNetworks/facebook.png'
import instagram from '../../../assets/SocialNetworks/instagram.png'
import twitter from '../../../assets/SocialNetworks/twitter.png'

function Footer(){
	return(
		<S.Footer>
			<S.FooterDiv>
				<S.FooterTitle>Coffee Shop</S.FooterTitle>
				<S.FooterSocialNetwork>
					<S.SocialNetworkLink href="#"><S.SocialNetworkIcon src={facebook}/></S.SocialNetworkLink>
					<S.SocialNetworkLink href="#"><S.SocialNetworkIcon src={instagram}/></S.SocialNetworkLink>
					<S.SocialNetworkLink href="#"><S.SocialNetworkIcon src={twitter}/></S.SocialNetworkLink>
				</S.FooterSocialNetwork>
			</S.FooterDiv>
		</S.Footer>	
	)
}

export default Footer;