import "../style/pendingreq.scss"

const PendingReq = ({follower}) => {
    return (
        <div className="users">
            <div className="content">
                <img src={follower.profileImage} alt="" srcset="" />
                <p>{follower.username}</p>
            </div>
            <div className="btns">
                <button className="follow-button">Accept</button>
                <button className="follow-button">Reject</button>
            </div>
        </div>
    )
}

export default PendingReq