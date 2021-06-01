import Header from "../components/header";
import OrderHistoryContainer from "../components/order-history-block/order-history-block";

function OrderHistory() {
    return <>
        <Header headerTitle="Мои заказы" />
        <div className="main-wrapper">
            <OrderHistoryContainer />
            <OrderHistoryContainer />
            <OrderHistoryContainer />
        </div>
    </>
}

export default OrderHistory