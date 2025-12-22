import React from 'react'

const Card = (props) => {
    let user = props.user;

    return (
        <div>
            <div className="card1" style={{ backgroundImage: `url(${user.image})` }}>
                <div className="glass"></div>
                <div className="content">
                    <h3>{user.name} <i className="ri-verified-badge-fill"></i></h3>
                    <p>{user.profession}</p>
                    <div className="elements">
                        <div className='network'>
                            <h4><i className="ri-user-line"></i>{user.connections}</h4>
                            <h4><i className="ri-group-line"></i>{user.followers}</h4>
                        </div>
                        <button>Follow <i className="ri-add-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card