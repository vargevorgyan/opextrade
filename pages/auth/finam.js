import React, { useState } from 'react'
import styled from 'styled-components'
import HeaderLayout from '../../components/layout/HeaderLayout'
import { ButtonStyled } from '../../styled/Buttons'
import { AuthenticationTitle } from '../../styled/Texts'
import { AuthInput } from '../../styled/inputs'
import Checkbox from '../../components/checkbox/Checkbox'

const Main = styled.main`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AuthForm = styled.form`
  width: 85%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`
const CheckboxesWrapper = styled.div`
  width: 85%;
  max-width: 600px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`

function FinamAuth() {
  const [checkedBox, setCheckedBox] = useState({ HFT: false, Terminal: false })
  const handleOnChange = (boxName) => {
    if (boxName === 'HFT')
      return setCheckedBox({ HFT: !checkedBox.HFT, Terminal: false })

    setCheckedBox({ HFT: false, Terminal: !checkedBox.Terminal })
  }
  return (
    <>
      <HeaderLayout />
      <Main>
        <AuthenticationTitle>Finam</AuthenticationTitle>
        <AuthForm>
          <AuthInput placeholder="Login" />
          <AuthInput placeholder="Passowrd" />
        </AuthForm>
        <CheckboxesWrapper>
          <Checkbox handleOnChange={handleOnChange} checkedBox={checkedBox}>
            HFT
          </Checkbox>
          <Checkbox handleOnChange={handleOnChange} checkedBox={checkedBox}>
            Terminal
          </Checkbox>
        </CheckboxesWrapper>
        <ButtonStyled>Submit</ButtonStyled>
      </Main>
    </>
  )
}

export default FinamAuth
