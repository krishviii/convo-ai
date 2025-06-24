import React from 'react'

import { AuroraBackground } from '../../components/ui/aurora-background';
import { motion } from "motion/react";
import { HeroParallax } from '../../components/ui/hero-parallax';
import { useNavigate } from 'react-router-dom';
import { BackgroundBeams } from '../../components/ui/backgroung-beems';
type Props = {}

const Landing = (props: Props) => {
  const navigate = useNavigate();
    // Sample data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'AI Chat Sessions',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const products = [
  { 
    "title": "Chat with AI: Get instant responses", 
    "link": "#", 
    "thumbnail": "https://uploads-ssl.webflow.com/62165c754a64e4f58a05824a/64fb0d279ea6bc67a244dc9d_outil-chatbot-1400x800.png.png"
  },
  { 
    "title": "AI for Support: Chatbot solutions", 
    "link": "#", 
    "thumbnail": "https://th.bing.com/th/id/OIP.7G3hQgvyyjoelpolxGgouwHaES?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
  },
  { 
    "title": "Analyze Your Data with AI", 
    "link": "#", 
    "thumbnail": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/57f31289502157.5df7269134a57.png"
  }
];

  return (
    <>
    <AuroraBackground>
      <div className="absolute top-6 left-8 z-20">
        <div className='flex flex-row  items-center gap-4'>
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />

      <span className="text-4xl font-bold text-indigo-600 dark:text-white">Convo AI</span>
     </div> </div>
      <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
      <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Empower Your Business with AI Chatbots
      </div>
      <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Engage customers, automate support, and boost productivity with intelligent AI conversations.
      </div>
      <div className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 text-center mt-2">
        Seamlessly integrate AI into your workflow.
      </div>
      <div className="text-base md:text-xl text-gray-500 dark:text-gray-400 text-center mb-4">
        Start your AI journey today and stay ahead of the curve.
      </div>
      <motion.button
        whileHover={{ scale: 1.08, backgroundColor: "#6366f1", color: "#fff" }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white dark:bg-white rounded-full w-fit text-black dark:text-black px-4 py-2"
        onClick={() => {
        navigate('/dashboard')
        }}
      >
        Start now
      </motion.button>
      </motion.div>
    </AuroraBackground>
     <HeroParallax products={products} />
    
    </>
   
 
  )
}

export default Landing