import { Link, useParams } from "react-router-dom"
import SubBanner from "../../Components/Common/BannerImage/SubBanner/SubBanner"
import MuiTable from "../../Components/Common/MUI-table/table"

function Zone_Park() {
    const zone = useParams();
    {console.log(zone)}
    return (
        <div className="Dog__Park">
            {
                zone.park_name === "dog"?(
                    <div>
                        <SubBanner Title="Generate report" subTitle="Dog Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
                        
                        <div className="Dog__Park-main" style={{display:'grid',placeItems:'center'}}>
                            <MuiTable selTable={zone.park_name}/>
                        </div>
                    </div>
                ):(null)
                
            }
            {
                zone.park_name === "snake"?(
                    <div>
                        <SubBanner Title="Generate report" subTitle="Snake Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
                        
                        <div className="Dog__Park-main" style={{display:'grid',placeItems:'center'}}>
                            <MuiTable selTable={zone.park_name}/>
                        </div>
                    </div>
                ):(null)
                
            }
            
        
        
        </div>
    )
}

export default Zone_Park
