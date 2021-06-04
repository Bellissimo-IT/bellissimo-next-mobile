import styled from "styled-components"

const FixedMenuContainer = styled.div`
    background: white;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  bottom: 0;
  overflow-y: scroll;
  box-shadow: 0px -11px 13px 0px #00000007;
  z-index: 100;
`

const Link = styled.div`
      padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  transition: color 0.3s ease;
`

function BottomNav() {
    return(
        <FixedMenuContainer className="fixed-menu-list-block">
            <a href="#pizza">
                <Link className="pizza-menu-link link">
                    <img src="" alt="" />
                    <p>Пицца</p>
                </Link>
            </a>
            <a href="#garnir">
                <Link className="garnir-menu-link link">
                    <img src="" alt="" />
                    <p>Закуски</p>
                </Link>
            </a>
            <a href="#salad">
                <Link className="salad-menu-link link">
                    <img src="" alt="" />
                    <p>Салаты</p>
                </Link>
            </a>
            <a href="#drinks">
                <Link className="drinks-menu-link link">
                    <img src="" alt="" />
                    <p>Напитки</p>
                </Link>
            </a>
            <a href="#desert">
                <Link className="deserts-menu-link link">
                    <img src="" alt="" />
                    <p>Дессерты</p>
                </Link>
            </a>
            <a href="#souce">
                <Link className="souce-menu-link link">
                    <img src="" alt="" />
                    <p>Соусы</p>
                </Link>
            </a>
        </FixedMenuContainer>
    )
}

export default BottomNav