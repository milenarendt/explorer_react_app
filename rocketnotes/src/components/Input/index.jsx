import { Container } from './styles'

export function Input({ icon: Icon, ...rest }) {  // passamos o icon para Icon para poder utiliza-lo abaixo como componente (precisa começar com letra maíscula)
  return (
    <Container>
      {Icon && <Icon size="20" />} 
      <input {...rest} />

    </Container>
  )
}




//    {Icon && <Icon/>} -> só vai mostrar o ícone se ele realmente existir, pois alguns inputs não possuem ícones