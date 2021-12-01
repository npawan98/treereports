import './BannerImage.scss'
function BannerImage({imgURL,Title}) {
    return (
        <div className="Banner__image">
            <div>
                <img src={imgURL}/>
            </div>
            <div className="Banner--text">
                <h1>{Title}</h1>
            </div>
        </div>

    )
}

export default BannerImage
