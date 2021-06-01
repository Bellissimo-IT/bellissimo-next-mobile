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
    background: #E0E0E0;
    border-radius: 100px;
`

const ActiveStatus = styled.div`
    height: 100%;
    background: rgb(0, 171, 73);
    border-radius: 100px;
`

// const AnimateStatus = styled.div`
//     background: #00AB49;
//     animation: infinite 3.5s ease-in;
// `

function StatusLine() {
    return(
        <StatusLineContainer className="status-line">
            <ActiveStatus className={`status`}></ActiveStatus>
            <Status className="status"></Status>
            <Status className="status"></Status>
            <Status className="status"></Status>
            <Status className="status"></Status>
        </StatusLineContainer>
    )
}

export default StatusLine