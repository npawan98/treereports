
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Table_Lotus_pond_kargadhakunte_evergreen from "../../../Components/Common/MUI-table/Lotus_pond_kargadhakunte/Table_Lotus_pond_kargadhakunte_evergreen"

function Lotus_pond_kargadhakunte_evergreen() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Lotus_pond_kargadhakunte Park - evergreen" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Lotus_pond_kargadhakunte__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Table_Lotus_pond_kargadhakunte_evergreen/>
            </div>
        </div>
    )
}

export default Lotus_pond_kargadhakunte_evergreen
