import Image from 'next/image'

function InputNumber() {
    return(
        <div className="tel-input-block">
            <img src="/imgs/tel-input.svg" alt="" />
            <span>+998</span>
            <input type="tel" name="tel" id="tel" placeholder="Телефон" maxLength="9" />
        </div>
    )
}

export default InputNumber