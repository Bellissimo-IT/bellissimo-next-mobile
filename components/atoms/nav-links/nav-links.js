// import pizzaImg from '../../../public/imgs/pizza,svg'

function NavItemsCon(props) {
    return (
        <a href={props.href}>
            <div className="nav-blocks log-in">
                <img src={props.img} alt="" />
                <p id="log-in" value="login">{props.name}</p>
            </div>
        </a>
    )
}

function NavItems() {
    return (
        <div>
            <NavItemsCon name="Войти" img="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMi41SDE1LjgzMzNDMTYuMjc1NCAyLjUgMTYuNjk5MyAyLjY3NTU5IDE3LjAxMTggMi45ODgxNkMxNy4zMjQ0IDMuMzAwNzIgMTcuNSAzLjcyNDY0IDE3LjUgNC4xNjY2N1YxNS44MzMzQzE3LjUgMTYuMjc1NCAxNy4zMjQ0IDE2LjY5OTMgMTcuMDExOCAxNy4wMTE4QzE2LjY5OTMgMTcuMzI0NCAxNi4yNzU0IDE3LjUgMTUuODMzMyAxNy41SDEyLjUiIHN0cm9rZT0iIzgyODI4MiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC4zMzMzNyAxNC4xNjY3TDEyLjUgOS45OTk5OUw4LjMzMzM3IDUuODMzMzMiIHN0cm9rZT0iIzgyODI4MiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIuNSAxMEgyLjUiIHN0cm9rZT0iIzgyODI4MiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" href="log-in" />
            <NavItemsCon name="Меню" img="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMi41SDE1LjgzMzNDMTYuMjc1NCAyLjUgMTYuNjk5MyAyLjY3NTU5IDE3LjAxMTggMi45ODgxNkMxNy4zMjQ0IDMuMzAwNzIgMTcuNSAzLjcyNDY0IDE3LjUgNC4xNjY2N1YxNS44MzMzQzE3LjUgMTYuMjc1NCAxNy4zMjQ0IDE2LjY5OTMgMTcuMDExOCAxNy4wMTE4QzE2LjY5OTMgMTcuMzI0NCAxNi4yNzU0IDE3LjUgMTUuODMzMyAxNy41SDEyLjUiIHN0cm9rZT0iIzgyODI4MiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC4zMzMzNyAxNC4xNjY3TDEyLjUgOS45OTk5OUw4LjMzMzM3IDUuODMzMzMiIHN0cm9rZT0iIzgyODI4MiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIuNSAxMEgyLjUiIHN0cm9rZT0iIzgyODI4MiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" href="/" />
            <NavItemsCon name="Конструктор половинок" img="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMi41SDE1LjgzMzNDMTYuMjc1NCAyLjUgMTYuNjk5MyAyLjY3NTU5IDE3LjAxMTggMi45ODgxNkMxNy4zMjQ0IDMuMzAwNzIgMTcuNSAzLjcyNDY0IDE3LjUgNC4xNjY2N1YxNS44MzMzQzE3LjUgMTYuMjc1NCAxNy4zMjQ0IDE2LjY5OTMgMTcuMDExOCAxNy4wMTE4QzE2LjY5OTMgMTcuMzI0NCAxNi4yNzU0IDE3LjUgMTUuODMzMyAxNy41SDEyLjUiIHN0cm9rZT0iIzgyODI4MiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC4zMzMzNyAxNC4xNjY3TDEyLjUgOS45OTk5OUw4LjMzMzM3IDUuODMzMzMiIHN0cm9rZT0iIzgyODI4MiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIuNSAxMEgyLjUiIHN0cm9rZT0iIzgyODI4MiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" href="constructor" />
            <NavItemsCon name="Рестораны" img="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMi41SDE1LjgzMzNDMTYuMjc1NCAyLjUgMTYuNjk5MyAyLjY3NTU5IDE3LjAxMTggMi45ODgxNkMxNy4zMjQ0IDMuMzAwNzIgMTcuNSAzLjcyNDY0IDE3LjUgNC4xNjY2N1YxNS44MzMzQzE3LjUgMTYuMjc1NCAxNy4zMjQ0IDE2LjY5OTMgMTcuMDExOCAxNy4wMTE4QzE2LjY5OTMgMTcuMzI0NCAxNi4yNzU0IDE3LjUgMTUuODMzMyAxNy41SDEyLjUiIHN0cm9rZT0iIzgyODI4MiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC4zMzMzNyAxNC4xNjY3TDEyLjUgOS45OTk5OUw4LjMzMzM3IDUuODMzMzMiIHN0cm9rZT0iIzgyODI4MiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIuNSAxMEgyLjUiIHN0cm9rZT0iIzgyODI4MiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" href="restaurant" />
            <NavItemsCon name="Статус заказа" img="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjMzMzMgOS4yMzMzM1YxMEMxOC4zMzIzIDExLjc5NyAxNy43NTA0IDEzLjU0NTYgMTYuNjc0NCAxNC45ODQ5QzE1LjU5ODQgMTYuNDI0MSAxNC4wODYgMTcuNDc3MSAxMi4zNjI4IDE3Ljk4NjZDMTAuNjM5NSAxOC40OTYxIDguNzk3NjggMTguNDM0OSA3LjExMjAyIDE3LjgxMjJDNS40MjYzNiAxNy4xODk0IDMuOTg3MTcgMTYuMDM4NCAzLjAwOTA5IDE0LjUzMDlDMi4wMzEwMSAxMy4wMjM0IDEuNTY2NDUgMTEuMjQwMSAxLjY4NDY5IDkuNDQ2OTNDMS44MDI5MyA3LjY1MzggMi40OTc2MyA1Ljk0Njk0IDMuNjY1MTkgNC41ODA4OUM0LjgzMjc1IDMuMjE0ODUgNi40MTA2MSAyLjI2MjgyIDguMTYzNDUgMS44NjY3OUM5LjkxNjI5IDEuNDcwNzYgMTEuNzUwMiAxLjY1MTk1IDEzLjM5MTYgMi4zODMzMyIgc3Ryb2tlPSIjODI4MjgyIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOC4zMzMzIDMuMzMzMzRMMTAgMTEuNjc1TDcuNSA5LjE3NSIgc3Ryb2tlPSIjODI4MjgyIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" href="status" />
            <NavItemsCon name="Мои заказы" img="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjE2NjYgMy4zMzMzNFY4LjMzMzM0SDE0LjE2NjYiIHN0cm9rZT0iIzgyODI4MiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTcuMDc0OSAxMi41QzE2LjUzMzIgMTQuMDMzMyAxNS41MDc5IDE1LjM0ODkgMTQuMTUzNCAxNi4yNDg3QzEyLjc5ODkgMTcuMTQ4NiAxMS4xODg3IDE3LjU4MzggOS41NjUyOSAxNy40ODg4QzcuOTQxOTMgMTcuMzkzOCA2LjM5MzQgMTYuNzczOCA1LjE1MzA3IDE1LjcyMjJDMy45MTI3NCAxNC42NzA2IDMuMDQ3NzkgMTMuMjQ0MyAyLjY4ODU4IDExLjY1ODRDMi4zMjkzNiAxMC4wNzI0IDIuNDk1MzQgOC40MTI2NSAzLjE2MTQ5IDYuOTI5MjJDMy44Mjc2NSA1LjQ0NTc5IDQuOTU3ODkgNC4yMTkwNSA2LjM4MTkgMy40MzM4NkM3LjgwNTkyIDIuNjQ4NjcgOS40NDY1NSAyLjM0NzU4IDExLjA1NjYgMi41NzU5NUMxMi42NjY2IDIuODA0MzIgMTQuMTU4OCAzLjU0OTc4IDE1LjMwODMgNC42OTk5OUwxOS4xNjY2IDguMzMzMzMiIHN0cm9rZT0iIzgyODI4MiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" href="order-history" />
            <NavItemsCon name="Профиль" img="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjY2NjcgMTcuNVYxNS44MzMzQzE2LjY2NjcgMTQuOTQ5MyAxNi4zMTU1IDE0LjEwMTQgMTUuNjkwNCAxMy40NzYzQzE1LjA2NTMgMTIuODUxMiAxNC4yMTc0IDEyLjUgMTMuMzMzNCAxMi41SDYuNjY2NzFDNS43ODI2NSAxMi41IDQuOTM0ODEgMTIuODUxMiA0LjMwOTY4IDEzLjQ3NjNDMy42ODQ1NiAxNC4xMDE0IDMuMzMzMzcgMTQuOTQ5MyAzLjMzMzM3IDE1LjgzMzNWMTcuNSIgc3Ryb2tlPSIjODI4MjgyIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05Ljk5OTk2IDkuMTY2NjdDMTEuODQwOSA5LjE2NjY3IDEzLjMzMzMgNy42NzQyOCAxMy4zMzMzIDUuODMzMzNDMTMuMzMzMyAzLjk5MjM4IDExLjg0MDkgMi41IDkuOTk5OTYgMi41QzguMTU5MDEgMi41IDYuNjY2NjMgMy45OTIzOCA2LjY2NjYzIDUuODMzMzNDNi42NjY2MyA3LjY3NDI4IDguMTU5MDEgOS4xNjY2NyA5Ljk5OTk2IDkuMTY2NjdaIiBzdHJva2U9IiM4MjgyODIiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" href="profil" />
        </div>
    );
}

export default NavItems