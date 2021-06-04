import Image from 'next/image'
import styled from 'styled-components'

const CheckInfoBlock = styled.div`
    border-bottom: 1px solid #bebebe;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const CheckInfoP = styled.p`
    color: #323232;
    margin-right: 15px;
`

const CheckInfoSpan  = styled.span`
    display: flex;
  flex-direction: row;
  align-items: center;
`

const PlaceHolder = styled.p`
    font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  /* identical to box height */
  color: #bebebe;
`

const CheckFiles = ({data, name, placeholder}) => {
    return(
        (data.map(item => <CheckInfoBlock className="check-info-blocks-container">
            <PlaceHolder>{item.placeholder}</PlaceHolder>
            <CheckInfoSpan><CheckInfoP>{item.name} </CheckInfoP><Image  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMzQ4Ljg4MiAzNDguODgyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDguODgyIDM0OC44ODI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSJmb3Jlc3RncmVlbiI+CjxnPgoJPHBhdGggZD0iTTMzMy45ODgsMTEuNzU4bC0wLjQyLTAuMzgzQzMyNS41MzgsNC4wNCwzMTUuMTI5LDAsMzA0LjI1OCwwYy0xMi4xODcsMC0yMy44ODgsNS4xNTktMzIuMTA0LDE0LjE1M0wxMTYuODAzLDE4NC4yMzEKCQljLTEuNDE2LDEuNTUtMi40OSwzLjM3OS0zLjE1NCw1LjM3bC0xOC4yNjcsNTQuNzYyYy0yLjExMiw2LjMzMS0xLjA1MiwxMy4zMzMsMi44MzUsMTguNzI5YzMuOTE4LDUuNDM4LDEwLjIzLDguNjg1LDE2Ljg4Niw4LjY4NQoJCWMwLDAsMC4wMDEsMCwwLjAwMSwwYzIuODc5LDAsNS42OTMtMC41OTIsOC4zNjItMS43Nmw1Mi44OS0yMy4xMzhjMS45MjMtMC44NDEsMy42NDgtMi4wNzYsNS4wNjMtMy42MjZMMzM2Ljc3MSw3My4xNzYKCQlDMzUyLjkzNyw1NS40NzksMzUxLjY5LDI3LjkyOSwzMzMuOTg4LDExLjc1OHogTTEzMC4zODEsMjM0LjI0N2wxMC43MTktMzIuMTM0bDAuOTA0LTAuOTlsMjAuMzE2LDE4LjU1NmwtMC45MDQsMC45OQoJCUwxMzAuMzgxLDIzNC4yNDd6IE0zMTQuNjIxLDUyLjk0M0wxODIuNTUzLDE5Ny41M2wtMjAuMzE2LTE4LjU1NkwyOTQuMzA1LDM0LjM4NmMyLjU4My0yLjgyOCw2LjExOC00LjM4Niw5Ljk1NC00LjM4NgoJCWMzLjM2NSwwLDYuNTg4LDEuMjUyLDkuMDgyLDMuNTNsMC40MTksMC4zODNDMzE5LjI0NCwzOC45MjIsMzE5LjYzLDQ3LjQ1OSwzMTQuNjIxLDUyLjk0M3oiLz4KCTxwYXRoIGQ9Ik0zMDMuODUsMTM4LjM4OGMtOC4yODQsMC0xNSw2LjcxNi0xNSwxNXYxMjcuMzQ3YzAsMjEuMDM0LTE3LjExMywzOC4xNDctMzguMTQ3LDM4LjE0N0g2OC45MDQKCQljLTIxLjAzNSwwLTM4LjE0Ny0xNy4xMTMtMzguMTQ3LTM4LjE0N1YxMDAuNDEzYzAtMjEuMDM0LDE3LjExMy0zOC4xNDcsMzguMTQ3LTM4LjE0N2gxMzEuNTg3YzguMjg0LDAsMTUtNi43MTYsMTUtMTUKCQlzLTYuNzE2LTE1LTE1LTE1SDY4LjkwNGMtMzcuNTc3LDAtNjguMTQ3LDMwLjU3MS02OC4xNDcsNjguMTQ3djE4MC4zMjFjMCwzNy41NzYsMzAuNTcxLDY4LjE0Nyw2OC4xNDcsNjguMTQ3aDE4MS43OTgKCQljMzcuNTc2LDAsNjguMTQ3LTMwLjU3MSw2OC4xNDctNjguMTQ3VjE1My4zODhDMzE4Ljg1LDE0NS4xMDQsMzEyLjEzNCwxMzguMzg4LDMwMy44NSwxMzguMzg4eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" height="15" width="15" /></CheckInfoSpan>
        </CheckInfoBlock>))
    )
}

export default CheckFiles