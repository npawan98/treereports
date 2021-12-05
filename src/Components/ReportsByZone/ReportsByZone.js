import './ReportsByZone.scss'
import SubBanner from '../Common/BannerImage/SubBanner/SubBanner'
import Button from '../Common/ButtonComponent/Button'
import zones from '../../json/zones'
import { useState } from 'react';
function ReportsByZone() {

    const [zone,setZone] = useState("");


    const linkHandler = () =>{
        window.location.assign(`/${zone}`)
    }

    return (
        <div className="reports__zone">
             <div>
                <SubBanner imgURL="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" Title="Generate Reports" subTitle="By Zone"/>
            </div>

            <div className="reports__zone--main">
                <div>
                    <div className="zone__select">
                    <select onChange={(e)=>{
                        setZone(e.target.value)
                    }}>
                        <option disabled selected>Select</option>
                        {
                            zones.map((item)=>{
                                return <option value={item.value} key={item.zone}>{item.zone}</option>;
                            })
                        }
                    </select>
                    </div>
                    <div className="zone__btn--container">
                        <center>
                        <div className="zone__btn" onClick={()=>{linkHandler()}}>
                            <h4>Fetch</h4>
                        </div>
                        </center>
                        {/* {zone} */}
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default ReportsByZone
