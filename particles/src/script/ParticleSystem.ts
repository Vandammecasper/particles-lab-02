import  {Particle}  from "./particle";

export const ParticleSystem = (() => {
    const particles: Particle[] = []
    let ctx: CanvasRenderingContext2D

    const passContext = (context: CanvasRenderingContext2D) => {
        ctx = context
    }
    // todo: generate x particles, random in the canvas
    const generate = (amount: 1000) => {
        // new promise
        for (let i =0; i < amount; i++){
            particles.push(new Particle(Math.random() * ctx.canvas.width, Math.random() * ctx.canvas.height))
        }
        console.log(particles)
        }
    // make this a promise, so we can await it

    //todo: draw particles
    const draw = () => {
        particles.forEach(particle => {
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
            ctx.fillStyle = particle.color
            ctx.fill()
        })
    }

    //todo: update particles (move them)
    const clear = () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }

    const animate = () => {
        clear()
        update()
        draw()
        requestAnimationFrame(animate)
    }

    const update = () => {
        for (const p of particles){
            if(p.y < 0 || p.y > ctx.canvas.height){
                p.dy = -p.dy
            }
            if (p.x < 0 || p.x > ctx.canvas.width){
                p.dx = -p.dx
            }
            p.x = p.x + p.dx
            p.y = p.y + p.dy
        }
    }


    return {
        passContext,
        generate,
        draw,
        update,
        animate,
        clear
    }
    })();