//penggunaan string literals

const View = (props) =>{
    const isLogin = true
    const {
        firstName,
        lastName,
        nomor
    } = props
    return(
        <div>
            {isLogin ? (
                <>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{nomor}</p>
                </>
            ):(
                <p>anda belom login.</p>
            )}
        </div>
    )
}

export default View