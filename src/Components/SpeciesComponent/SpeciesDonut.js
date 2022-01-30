import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DonutChart from '../DashbaordComponents/Dashboard_donut/DonutChart';

function SpeciesDonut() {

    const [specie_type_endemic,setSpecie_type_endemic] = useState([]);
    const [specie_type_exotic,setSpecie_type_exotic] = useState([]);
    const [specie_type_indegenous,setSpecie_type_indegenous] = useState([]);

    // conservation

    const [species_conservation_status_LeastConcern,setSpecies_conservation_status_LeastConcern] = useState([]);
    const [species_conservation_status_NotKnown,setSpecies_conservation_status_NotKnown] = useState([]);
    const [species_conservation_status_NearThreatened,setSpecies_conservation_status_NearThreatened] = useState([]);
    const [species_conservation_status_Vulnerable,setSpecies_conservation_status_Vulnerable] = useState([]);
    const [species_conservation_status_CriticallyEndangered,setSpecies_conservation_status_CriticallyEndangered] = useState([]);
    const [species_conservation_status_ConservationDependent,setSpecies_conservation_status_ConservationDependent] = useState([]);

    // phenology

    const [species_phenology_Evergreen,setSpecies_phenology_Evergreen] = useState([]);
    const [species_phenology_Deciduous,setSpecies_phenology_Deciduous] = useState([]);
    const [species_phenology_Endemic,setSpecies_phenology_Endemic] = useState([]);
    const [species_phenology_Indigenous,setSpecies_phenology_Indigenous] = useState([]);
    const [species_phenology_Exotic,setSpecies_phenology_Exotic] = useState([]);
    const [species_phenology_Endangered,setSpecies_phenology_Endangered] = useState([]);


    const species_type = [];
    const species_conservation = [];
    const species_phenology = [];

    



    useEffect(()=>{

    axios.get("https://afternoon-mountain-93761.herokuapp.com/species_analysis_specie_type_endemic").then(res => {
        setSpecie_type_endemic(res.data.length)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/species_analysis_specie_type_exotic").then(res => {
        setSpecie_type_exotic(res.data.length)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/species_analysis_specie_type_indegenous").then(res => {
        setSpecie_type_indegenous(res.data.length)
    })


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationStatus/species_conservationLeastConcern").then(res => {
        setSpecies_conservation_status_LeastConcern(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationStatus/species_conservationNotknown").then(res => {
        setSpecies_conservation_status_NotKnown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationStatus/species_conservationNearThreatened").then(res => {
        setSpecies_conservation_status_NearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationStatus/species_conservationVulnerable").then(res => {
        setSpecies_conservation_status_Vulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationStatus/species_conservationCriticallyEndangered").then(res => {
        setSpecies_conservation_status_CriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationStatus/species_conservationConservationDependent").then(res => {
        setSpecies_conservation_status_ConservationDependent(res.data.length)
    })


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/species_phenology_Evergreen").then(res => {
        setSpecies_phenology_Evergreen(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/species_phenology_Deciduous").then(res => {
        setSpecies_phenology_Deciduous(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/species_phenology_Endemic").then(res => {
        setSpecies_phenology_Endemic(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/species_phenology_Indigenous").then(res => {
        setSpecies_phenology_Indigenous(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/species_phenology_Exotic").then(res => {
        setSpecies_phenology_Exotic(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/species_phenology_Endangered").then(res => {
        setSpecies_phenology_Endangered(res.data.length)
    })



    },[])

    species_type.push(
        specie_type_endemic,
        specie_type_exotic,
        specie_type_indegenous
        
    )

    species_conservation.push(
        species_conservation_status_LeastConcern,
        species_conservation_status_NotKnown,
        species_conservation_status_NearThreatened,
        species_conservation_status_Vulnerable,
        species_conservation_status_CriticallyEndangered,
        species_conservation_status_ConservationDependent
    )

    species_phenology.push(
        species_phenology_Evergreen,
        species_phenology_Deciduous,
        species_phenology_Endemic,
        species_phenology_Indigenous,
        species_phenology_Exotic,
        species_phenology_Endangered
    )


  return <div style={{display: 'flex', overflowX:"scroll"}}>
      <DonutChart
          title="Specie Type"
          values={species_type}
          labels={[
            "Evergreen",
            "Deciduous",
            "Endemic",
            "Indigenous",
            "Exotic",
            "Endangered",
          ]}
        />

<DonutChart
          title="Conservation Staus"
          values={species_conservation}
          labels={[
            "LeastConcern",
            "NotKnown",
            "NearThreatened",
            "Vulnerable",
            "CriticallyEndangered",
            "ConservationDependent",
          ]}
        />

<DonutChart
          title="Phenology"
          values={species_phenology}
          labels={[
            "Evergreen",
            "Deciduous",
            "Endemic",
            "Indigenous",
            "Exotic",
            "Endangered",
          ]}
        />
  </div>;
}

export default SpeciesDonut;
