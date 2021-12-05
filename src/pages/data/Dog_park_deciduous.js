import SubBanner from "../../Components/Common/BannerImage/SubBanner/SubBanner"
import DogTable from "../../Components/Common/MUI-table/table"
import Table_dog_deciduous from "../../Components/Common/MUI-table/Table_dog_deciduous"

function Dog_park_deciduous() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Dog Park - Deciduous" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Dog__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Table_dog_deciduous/>
            </div>
        </div>
    )
}

export default Dog_park_deciduous
