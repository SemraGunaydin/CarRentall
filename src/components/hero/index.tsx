import Button from "../button"
import {motion} from "motion/react";

const Hero = () => {
  return (
	<div className="hero">
		<div className="pt-14 padding-x flex-1 max-h-[920]">
			<h1 className="hero-title">Feel the Freedom, Start Your Journey</h1>

			<p className="hero-subtitle">
				Get ready for an unforgettable journey with our gold-standard service! Make your car rental experience shine with our Golden Options and enjoy every moment on the road.
			</p>

			<Button text="Discover The Cars" designs="mt-10"/>
		</div>

		<div className="flex justify-center">
			<motion.img 
			initial={{
				translateX:200,
				scale:0.7,
			}}
			animate={{
				translateX:0,
				scale:1,
			}}
			transition={{duration:0.5}}
			src="/hero.png"
			className="object-contain" />
		</div>
	</div>
  )
}

export default Hero