import React from 'react'
import Header from './Header'
import Section from './Section'


function Home() {
  return (
    <>
    <Header/>
    <Section
      name = 'Model 3'
      tagline = 'Order Online for touchless delivery'
      leftBtn = 'order now'
      rightBtn = 'Existing Inventory'
      background = 'model-3.jpg'
    />
      <Section
      name = 'Model Y'
      tagline = 'Order Online for touchless delivery'
      leftBtn = 'order now'
      rightBtn = 'Existing Inventory'
      background = 'model-s.jpg'
      />
      <Section
      name = 'Model S'
      tagline = 'Order Online for touchless delivery'
      leftBtn = 'order now'
      rightBtn = 'Existing Inventory'
      background = 'model-x.jpg'
      />
      <Section
      name = 'Model X'
      tagline = 'Order Online for touchless delivery'
      leftBtn = 'order now'
      rightBtn = 'Existing Inventory'
      background = 'model-y.jpg'
      />
      <Section
      name = 'Solar Panels'
      tagline = 'Lower Cost Solar Panels in India'
      leftBtn = 'order now'
      rightBtn = 'Existing Inventory'
      background = 'solar-panel.jpg'
      />
      <Section
      name = 'Solar Roof'
      tagline = 'Produce Clean Energy from your roof'
      leftBtn = 'order now'
      rightBtn = 'Lern More'
      background = 'solar-roof.jpg'
    />
      <Section
      name = 'Accessories'
      tagline = 'Order Online for touchless delivery'
      leftBtn = 'order now'
      background = 'accessories.jpg'

    />

    </>
  )
}

export default Home