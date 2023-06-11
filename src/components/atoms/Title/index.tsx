import React from 'react'
import * as S from './styles'

interface TitleProps{
    title : string
}
const Title = ({title}:TitleProps) => {
  return (
    <S.Title>{title}</S.Title>
  )
}

export default Title