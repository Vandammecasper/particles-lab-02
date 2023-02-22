import './style/style.css'
import './style/reset.css'
import dom from './script/dom'
import {ParticleSystem} from './script/ParticleSystem'

const ctx = dom.setup('#particleContainer')
console.log({ctx})

if (ctx ){
    ParticleSystem.passContext(ctx)

    //override van de default waarde van de particle system
    ParticleSystem.generate(1000)
    ParticleSystem.animate()
}


// module nodig voor particlesystem (revealing module pattern - iife - self-invoking function)

// DOM module voor dom interacties (revealing module pattern - iife - self-invoking function)
