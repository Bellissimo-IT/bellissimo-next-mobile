import Button from "../components/atoms/button/button";
import InputNumber from "../components/atoms/input-number/input-number";
import Header from "../components/header";
import LogInForm from "../components/molecules/log-in-form/log-in-form";

function LogIn() {
    return<>
        <Header headerTitle="Войти" />
        <div className="log-in-form form-block">
            <LogInForm />
        </div>
    </>
}

export default LogIn