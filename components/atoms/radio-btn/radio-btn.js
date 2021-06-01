import check from '../../../public/imgs/button.svg'
import unchecked from '../../../public/imgs/rec.svg'
import Image from 'next/image'

const Radio = ({data, description, selected, setSelected}) => {
    return<>
        <div className="take-yourself-addresses-container" id="main" >
        {data.map(item => <div className={`radio-choose ${item.id===selected?'active':''}`}  onClick={function(){setSelected(item.id)}}>
            <Image className={`radio-btn-img`} src={item.id===selected?check:unchecked} width="16" height="16" />
                <div className="input-text address-text">
                <h2>{item.name}</h2> <p>{item.description}</p>
                </div>
            </div>
            )}
        </div>
        
    </>
}

export default Radio
