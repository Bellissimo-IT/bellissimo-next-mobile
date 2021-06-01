import Button from "../../atoms/button/button";
import InputNumber from "../../atoms/input-number/input-number";

function LogInForm() {
    return<>
        <div className="form">
            <h2>Войти</h2>
            <InputNumber/>
            <Button children="Отправить код" type="submit" className="submit-btn" />
        </div>
    </>
}

export default LogInForm