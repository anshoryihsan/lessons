import React from "react"

const Users = (props) => {
    const {fav} = props
    return(
        <div>
        <h4>Users</h4>
            {fav.map((item, index) => {
                return(
                    <div>
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Users