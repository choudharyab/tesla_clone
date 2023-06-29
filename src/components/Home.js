import React from 'react'
import Styled from "styled-components";
import Section from './Section';
function Home() {
  return (
    <Container>
        <Section 
          title="Model S" 
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-s.jpg"
          leftBtnText ="custom order"
          rightBtnText = "Existing Inventory"
        />

        <Section 
          title="Model Y" 
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-y.jpg"
          leftBtnText ="custom order"
          rightBtnText = "Existing Inventory"
        />

        <Section 
          title="Model 3" 
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-3.jpg"
          leftBtnText ="custom order"
          rightBtnText = "Existing Inventory"
        />

        <Section 
          title="Model x" 
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-x.jpg"
          leftBtnText ="custom order"
          rightBtnText = "Existing Inventory"
        />

        <Section 
          title="Lowest cost panels in America" 
          description = "Money-back guarantee"
          backgroundImg = "solar-panel.jpg"
          leftBtnText ="order now"
          rightBtnText = "learn now"
        />

        <Section 
          title="Solar for New Roofs " 
          description = "Solar Roof Costs Less Than a New Roof "
          backgroundImg = "solar-roof.jpg"
          leftBtnText ="order now"
          rightBtnText = "learn now"
        />

        <Section 
          title="Accessories" 
          description = ""
          backgroundImg = "accessories.jpg"
          leftBtnText ="shop now"
          rightBtnText = ""
        />
    </Container>
  )
}

export default Home;

const Container = Styled.div`
    height : 100vh;
`