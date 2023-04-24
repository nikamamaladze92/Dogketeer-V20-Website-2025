import React from 'react'
import FeatureCard from './FeatureCard'

function Features() {
  return (
    <div className='featuresContainer'>
      <div className='features'>
        <h2>Features</h2>
        <h4>Read More about Docketeerxii</h4>
        <button>link to medium article</button>
        <div className='featureCards'>
          <FeatureCard header={"Feature1"} img={""} info={"lorem alsjf askdf asdjkf lajsdfk klsdj"} />
          <FeatureCard header={"Feature2"} img={""} info={"lorem lasjdf alsdjfwie akdjlj wlkjkewr "} />
          <FeatureCard header={"Feature3"} img={""} info={"lorem ipsum dfjgjs dfio pgjs dfio pgjiops dfgjios dfm mm mm mm mmm mm"} />
          <FeatureCard header={"Feature4"} img={""} info={"lorem ipsumj sdfuio gjiopsd fgji opsd fgjiop sdfgj iop sdf mmmm mmm mmm mm"} />
          <FeatureCard header={"Feature4"} img={""} info={"lorem ipsumj sdfuio gjiopsd fgji opsd fgjiop sdfgj iop sdf mmmm mmm mmm mm"} />
          <FeatureCard header={"Feature4"} img={""} info={"lorem ipsumj sdfuio gjiopsd fgji opsd fgjiop sdfgj iop sdf mmmm mmm mmm mm"} />
          <FeatureCard header={"Feature4"} img={""} info={"lorem ipsumj sdfuio gjiopsd fgji opsd fgjiop sdfgj iop sdf mmmm mmm mmm mm"} />
          <FeatureCard header={"Feature4"} img={""} info={"lorem ipsumj sdfuio gjiopsd fgji opsd fgjiop sdfgj iop sdf mmmm mmm mmm mm"} />
        </div>
        
      </div>
    </div>
  )
}

export default Features