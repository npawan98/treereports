import './SubBanner.scss'
function SubBanner({imgURL,Title}) {
    return (
        <div className="SubBanner__image">
            <div>
                <img src={imgURL}/>
            </div>
            <div className="SubBanner--text">
                    <h4>{Title}</h4>
                    <h1>By Zone</h1>
            </div>
        </div>
    )
}

export default SubBanner
