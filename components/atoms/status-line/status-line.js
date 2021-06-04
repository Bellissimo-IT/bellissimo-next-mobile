import { useState } from "react"
import styled, { keyframes } from "styled-components"

const StatusLineContainer = styled.div`
    width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 19%);
  grid-column-gap: 1%;
  height: 3px;
  margin: 15px 0;
`

const Status = styled.div`
    height: 100%;
    border-radius: 100px;
    background: #cfcfcf;
`


function StatusLine() {
    return(
        <StatusLineContainer>
            <Status></Status>
            <Status></Status>
            <Status></Status>
            <Status></Status>
            <Status></Status>
        </StatusLineContainer>
    )
}

export default StatusLine