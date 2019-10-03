import React from 'react'
import Nav from './Nav'
import './styles/Tips.css'

export default class Tips extends React.Component {

  render(){
    return(
      <div>
        <div><Nav handleLogOut={this.props.handleLogOut} username={this.props.user} /></div>

        <div className='tipsDiv'>

        <div id='tipBanner'><u>Stewardship Tips!</u></div>

        <div className='tip'><p><i>Improve the Soil:</i><br></br>In spring, flush the tree bed with lots of water to help remove salt deposits in the soil. Scattering salt to deice sidewalks can severely damage trees; use sand instead. With a hand cultivator (a tool that looks like a three-pronged claw), loosen the soil gently ½ to 1 inch deep. Most of a tree’s roots lie within the top 18 inches of soil, so be very gentle! Mix in a thin layer of compost (no more than ½ inch) every year. Add a layer of mulch 2 to 3 inches deep, being careful to keep it at least 6 inches away from the tree trunk. Mulch smothers weeds, helps retain moisture, and makes good compost when it decomposes. Replenish the mulch as it breaks down, and replace it every spring to remove toxic salts from winter snow removal.</p></div>
        <div className='tip'><p><i>Water:</i><br></br>Even without a drought, tree beds are so small that not enough rain falls onto their soil to adequately irrigate the trees. You can help by watering new trees with about 15 to 20 gallons of water a week. A mature tree needs 8 to 10 gallons a week during the hot season. The key is to water slowly: Set up a hose to trickle into the bed for an hour; or prick a few holes on one side of a clean garbage can, set it next to the tree bed, and fill it with water. A layer of mulch also helps conserve moisture, so always mulch your tree beds.</p></div>
        <div className='tip'><p><i>Keep the Tree Bed Clean:</i><br></br>Regularly removing trash and animal waste from the tree bed tells passersby, 'Someone cares!' It’s true, picking up trash isn’t as glamorous as planting flowers, but your tree will love you for it. Consider posting a small sign in the tree bed asking people to curb their dogs and not litter.</p></div>
        <div className='tip'><p><i>Install a Tree Guard:</i><br></br>Guards help protect your tree from animals, foot traffic, and car and bicycle abuse. Even the simplest guard creates a psychological space around the tree that alerts passersby that the tree is important to the block. An easy, do-it-yourself way is to drive four sturdy wooden stakes or lengths of pipe in each corner of the bed. Make sure the tops of the stakes are at least 18 inches high and rounded so pedestrians can’t be hurt by them. Drill holes through the stakes or pipes, then loop rope or chain through them. If you hire a metalworker to create a guard around the tree bed, make sure the guard is on the edge of the bed and doesn’t touch the tree. Also make sure the guard allows rainwater to flow from the sidewalk into the bed. Note: Installing a guard around any city tree requires a permit.</p></div>
        <div className='tip'><p><i>Plants:</i><br></br>When there’s barely any ground to garden, it’s natural to want to garden in a tree bed. Annuals, perennials, and bulbs can be beautiful additions to a tree bed, as long as you remember that the tree’s health comes first. Flowers let passersby know you are taking care of your street tree. Wilting flowers in the tree bed are also a good reminder to water; as you water the flowers, the tree will also get a drink.</p></div>
        <div className='tip'><p><i>Hints for Newly Planted Trees:</i><br></br>Immediately remove the burlap wrapped around the trunk and any tape or wire used to hold it in place. Left in place, the burlap could keep the trunk wet and cause rot, and tape or wire could girdle the tree. After a year, remove any guylines and stakes so the tree can grow and move freely, which improves tree strength.</p></div>

        <p>Thanks to this <a href='https://www.bbg.org/gardening/article/street_tree_bed_care'>article</a> by the Brooklyn Botanical Garden for the great tips!</p>
        <br></br>
        </div>

      </div>
    )
  }
}
