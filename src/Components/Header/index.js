import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const HeaderSection = styled.section`
  padding: 20px;
  justify-content: center;
  cursor: grab;
`

export default function Header() {
  const nav = useNavigate()
  return (
    <HeaderSection>
      <h1 className="title" onClick={() => nav('/')}>
        Memtherscan
      </h1>
    </HeaderSection>
  )
}
