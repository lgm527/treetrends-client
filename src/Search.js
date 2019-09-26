import React from 'react'
import Select from 'react-dropdown-select'

const list = [
'Claremont-Bathgate',
'Eastchester-Edenwald-Baychester',
'Bedford Park-Fordham North',
'Belmont',
'Bronxdale',
'West Farms-Bronx River',
'Soundview-Castle Hill-Clason Point-Harding Park',
'Pelham Bay-Country Club-City Island',
'East Concourse-Concourse Village',
'East Tremont',
'North Riverdale-Fieldston-Riverdale',
'Highbridge',
'Hunts Point',
'Van Cortlandt Village',
'Spuyten Duyvil-Kingsbridge',
'Kingsbridge Heights',
'Allerton-Pelham Gardens',
'Longwood',
'Melrose South-Mott Haven North',
'Morrisania-Melrose',
'University Heights-Morris Heights',
'Mott Haven-Port Morris',
'Fordham South',
'Mount Hope',
'Norwood',
'Williamsbridge-Olinville',
'Parkchester',
'Pelham Parkway',
'Schuylerville-Throgs Neck-Edgewater Park',
'Soundview-Bruckner',
'Westchester-Unionport',
'Woodlawn-Wakefield',
'West Concourse',
'Crotona Park East',
'Rikers Island',
'park-cemetery-etc-Bronx',
'Brooklyn Heights-Cobble Hill',
'Sheepshead Bay-Gerritsen Beach-Manhattn Bch',
'Brighton Beach',
'Seagate-Coney Island',
'West Brighton',
'Homecrest',
'Gravesend',
'Bath Beach',
'Bensonhurst West',
'Bensonhurst East',
'Dyker Heights',
'Bay Ridge',
'Sunset Park West',
'Carroll Gardens-Columbia Street-Red Hook',
'Sunset Park East',
'Stuyvesant Heights',
'Park Slope-Gowanus',
'DUMBO-Vinegar Hill-Downtown Brooklyn-Boerum Hill',
'Windsor Terrace',
'Kensington-Ocean Parkway',
'Flatbush',
'Midwood',
'Madison',
'Georgetown-Marine Park-Bergen Beach-Mill Basin',
'Ocean Parkway South',
'Canarsie',
'Flatlands',
'Prospect Lefferts Gardens-Wingate',
'Crown Heights North',
'Crown Heights South',
'Prospect Heights',
'Fort Greene',
'Clinton Hill',
'Williamsburg',
'North Side-South Side',
'Bedford',
'Greenpoint',
'Bushwick North',
'Bushwick South',
'Ocean Hill',
'Brownsville',
'East New York',
'Cypress Hills-City Line',
'East New York (Pennsylvania Ave)',
'Borough Park',
'East Williamsburg',
'East Flatbush-Farragut',
'Starrett City',
'Erasmus',
'Rugby-Remsen Village',
'park-cemetery-etc-Brooklyn',
'Marble Hill-Inwood',
'Central Harlem North-Polo Grounds',
'Hamilton Heights',
'Manhattanville',
'Morningside Heights',
'Central Harlem South',
'Upper West Side',
'Lincoln Square',
'Clinton',
'Midtown-Midtown South',
'Turtle Bay-East Midtown',
'Murray Hill-Kips Bay',
'Gramercy',
'East Village',
'West Village',
'SoHo-TriBeCa-Civic Center-Little Italy',
'Battery Park City-Lower Manhattan',
'Chinatown',
'Lower East Side',
'Lenox Hill-Roosevelt Island',
'Yorkville',
'East Harlem South',
'East Harlem North',
'Washington Heights North',
'Washington Heights South',
'Upper East Side-Carnegie Hill',
'Stuyvesant Town-Cooper Village',
'park-cemetery-etc-Manhattan',
'South Jamaica',
'Springfield Gardens North',
'Springfield Gardens South-Brookville',
'Rosedale',
'Jamaica Estates-Holliswood',
'Hollis',
'St. Albans',
'Hammels-Arverne-Edgemere',
'Far Rockaway-Bayswater',
'Forest Hills',
'Rego Park',
'Glendale',
'Ridgewood',
'Middle Village',
'Flushing',
'College Point',
'Corona',
'North Corona',
'East Elmhurst',
'Jackson Heights',
'Elmhurst',
'Maspeth',
'Hunters Point-Sunnyside-West Maspeth',
'Cambria Heights',
'Queens Village',
'Briarwood-Jamaica Hills',
'Kew Gardens Hills',
'Pomonok-Flushing Heights-Hillcrest',
'Fresh Meadows-Utopia',
'Oakland Gardens',
'Bellerose',
'Glen Oaks-Floral Park-New Hyde Park',
'Douglas Manor-Douglaston-Little Neck',
'Bayside-Bayside Hills',
'Ft. Totten-Bay Terrace-Clearview',
'Auburndale',
'Whitestone',
'Elmhurst-Maspeth',
'Murray Hill',
'East Flushing',
'Woodhaven',
'Richmond Hill',
'South Ozone Park',
'Ozone Park',
'Lindenwood-Howard Beach',
'Kew Gardens',
'Jamaica',
'Queensboro Hill',
'Woodside',
'Laurelton',
'Queensbridge-Ravenswood-Long Island City',
'Astoria',
'Old Astoria',
'Steinway',
'Baisley Park',
'park-cemetery-etc-Queens',
'Annadale-Huguenot-Prince\'s Bay-Eltingville',
'New Springville-Bloomfield-Travis',
'Westerleigh',
'Grymes Hill-Clifton-Fox Hills',
'Charleston-Richmond Valley-Tottenville',
'Mariner\'s Harbor-Arlington-Port Ivory-Graniteville',
'Grasmere-Arrochar-Ft. Wadsworth',
'West New Brighton-New Brighton-St. George',
'Todt Hill-Emersn Hill-Heartland Villg-Lighthse Hill',
'Oakwood-Oakwood Beach',
'Port Richmond',
'Rossville-Woodrow',
'New Brighton-Silver Lake',
'Old Town-Dongan Hills-South Beach',
'Stapleton-Rosebank',
'New Dorp-Midland Beach',
'Arden Heights',
'Great Kills',
'park-cemetery-etc-Staten Island'
].sort();

const listOptions = (list.map((place) => {return {value: place, label: place}}))

export default class Search extends React.Component {

  convertStringToNTACode = (ntaName) => {
    if (ntaName !== undefined && ntaName !== ''){
     return ntaName.replace(/[\s]/g, '%20')
    }
  }

  handleChange = (selectedOption) => {
    this.props.updateNeighborhood(this.convertStringToNTACode(selectedOption[0].value))
  }

  render(){
    return(
      <div style={{marginLeft: '15.3%'}}>
      <Select options={listOptions}
      onChange={(value) => this.handleChange(value)}
      style={{width: '600px', backgroundColor: 'white', textAlign: 'left'}} />
      </div>

    )
  }
}
