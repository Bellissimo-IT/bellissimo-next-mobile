import Image from 'next/image'
// import approved from '../../../public/imgs/approved.svg'

const CurrentStatusBlock = ({name, description, img}) => {
    return<>
        <div className="current-status-text">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
        <Image src={img} alt="" width="60" height="60" />
    </>
}

export default CurrentStatusBlock