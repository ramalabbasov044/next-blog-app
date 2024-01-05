import { useState } from "react"
import styled from "styled-components"

const SortInput = ({
    type,
    placeholder,
    callBackvalue
}) => {
  return (
    <>
      <Input 
          type={type}
          onChange={(e) => callBackvalue(e.target.value)}
          placeholder={placeholder}
      />
    </>
  )
}

export default SortInput

const Input = styled.input`
    color: #9F9F9F;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    background: #FFF;
    line-height: normal;
    padding: 12px 18px;
`
