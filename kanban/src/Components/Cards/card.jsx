import './card.scss'
const Card = (props) => {

    const {
        title,
    } = props

    return(
        <div className="card">
            <div className="card-inner">

                <div className="card-title">
                    {title}                     
                </div>

                <div className="card-tasks">

                </div>

                <div className="card-button">
                    <button onClick={handlerClickTaskTitle}>+ Add card</button>
                </div>
            </div>
        </div>
    )
}

export default Card