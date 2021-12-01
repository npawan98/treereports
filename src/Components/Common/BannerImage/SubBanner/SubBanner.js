import './SubBanner.scss'
function SubBanner({imgURL,Title,subTitle}) {
    return (
        <div className="SubBanner__image">
            <div>
                <img src={imgURL}/>
            </div>
            <div className="SubBanner--text">
                    <h4>{Title}</h4>
                    <h1>{subTitle}</h1>
            </div>
        </div>
    )
}

export default SubBanner
