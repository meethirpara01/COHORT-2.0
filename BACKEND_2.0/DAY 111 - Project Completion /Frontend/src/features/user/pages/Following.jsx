import "../style/following.scss"

const Following = ({followee}) => {
    return (
        <div className="users">
            <div className="content">
                <img src={followee.profileImage} alt="" srcset="" />
                <p>{followee.username}</p>
            </div>
            <button className="follow-button">Unfollow</button>
        </div>
    )
}

export default Following