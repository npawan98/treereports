import './BannerImage.scss'
function BannerImage({imgURL}) {
    return (
        <div className="Banner__image">
            <img src={imgURL}/>
        </div>
    )
}

export default BannerImage
