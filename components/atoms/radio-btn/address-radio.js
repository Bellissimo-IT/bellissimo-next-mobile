import check from '../../../public/imgs/button.svg'
import unchecked from '../../../public/imgs/rec.svg'
import Image from 'next/image'

const AddressRadio = ({data, description, selected1, setSelected1}) => {
    return<>
        <div className="take-yourself-addresses-container" id="main" >
        {data.map(item => <div className={`radio-choose ${item.id===selected1?'active':''}`}  onClick={function(){setSelected1(item.id)}}>
            <Image className={`radio-btn-img`} src={item.id===selected1?check:unchecked} width="16" height="16" />
                <div className="input-text address-text">
                <h2>{item.name}</h2> <p>{item.description}</p>
                </div>
            </div>
            )}
        </div>
        
    </>
}

export default AddressRadio
