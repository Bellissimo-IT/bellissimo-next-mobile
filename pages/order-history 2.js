import OrderHistoryBlock from "../components/order-history-block/order-history-block";
import Header from "../components/header";

function OrderHistory() {
    return <>
        <Header headerTitle="Мои заказы" />
        <div className="main-wrapper">
            <OrderHistoryBlock />
            <OrderHistoryBlock />
            <OrderHistoryBlock />
        </div>
    </>
}

export default OrderHistory