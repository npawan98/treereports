import './SpeciesComponent.scss'
import SubBanner from '../Common/BannerImage/SubBanner/SubBanner'
import Button from '../Common/ButtonComponent/Button'
import zones from '../../json/zones'
import { useState } from 'react';
import SpeciesTable from '../Common/MUI-table/SpeciesTable/SpeciesTable';
function SpeciesComponent() {

    const [zone,setZone] = useState("");


    const linkHandler = () =>{
        window.location.assign(`/${zone}`)
    }

    return (
        <div className="reports__zone">
             <div>
                <SubBanner imgURL="https://images.unsplash.com/photo-1520264914976-a1ddb24d2114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" Title="Generate Reports" subTitle="All Species"/>
            </div>

            <div className="reports__zone--main">
               <SpeciesTable/>
            
            </div>
        </div>  
    )
}

export default SpeciesComponent
