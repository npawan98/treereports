
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Table_Park_opp_wine_board_indigenous from "../../../Components/Common/MUI-table/Park_opp_wine_board/Table_Park_opp_wine_board_indigenous"

function Park_opp_wine_board_indigenous() {
    return (
        <div>
            <SubBanner Title="Generate report" subTitle="Park_opp_wine_board Park - indigenous" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>

            <div className="Park_opp_wine_board__Park-main" style={{display:'grid',placeItems:'center'}}>
                <Table_Park_opp_wine_board_indigenous/>
            </div>
        </div>
    )
}

export default Park_opp_wine_board_indigenous
