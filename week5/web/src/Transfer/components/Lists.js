import React from "react"

const Lists = (props) => {
    const {fav} = props
    return(
        <div>
        <h4>LISTS</h4>
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

export default Lists