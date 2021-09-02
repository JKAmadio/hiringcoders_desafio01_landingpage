import { useState } from 'react';
import * as S from './styled'

function Form(){
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [leads, setLeads] = useState([]);
	const [visibility, setVisibility] = useState(0);

	const handleClick = (event) => {
		event.preventDefault();
		if(nome && email) {
			setVisibility(1)
			const usuario = {nome, email}
			setLeads(usuario => {
				return [...leads, usuario]
			})	
			let dadosUsuario = JSON.stringify(usuario)
			localStorage.setItem('lead', dadosUsuario)
		}
		else {
			alert('Por favor, preencha todos os campos')
		}
	}

	return(
		<S.Container>
			<S.FormTitle>Cadastre-se!</S.FormTitle>
			<S.Form autoComplete='off'>
				<S.FormLabel htmlFor="name">Nome</S.FormLabel>
				<S.FormInput 
					type="text" 
					name="name"
					placeholder="Nome Completo"
					onChange={(e) => setNome(e.target.value)}/>
				<S.FormLabel htmlFor="email">Email</S.FormLabel>
				<S.FormInput 
					type="email" 
					name="email"
					placeholder="seu_email@dominio.com.br"
					onChange={(e) => setEmail(e.target.value)}/>
				<S.FormFooter>
					<S.FormButton	mButton onClick={handleClick}>Enviar</S.FormButton>
					<S.FormMessage 
						visibility={visibility}>
							Cadastro concluído!
					</S.FormMessage>
				</S.FormFooter>
			</S.Form>
		</S.Container>
	)
}

export default Form;