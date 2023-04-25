import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import GRAF1 from '../../assets/modal/graf1.jpg'
import GRAF2 from '../../assets/modal/graf2.jpg'
import GRAF3 from '../../assets/modal/graf3.jpg'
import GRAF4 from '../../assets/modal/graf4.jpg'
import GUIT1 from '../../assets/modal/guit1.jpg'
import GUIT2 from '../../assets/modal/guit2.jpg'
import GUIT3 from '../../assets/modal/guit3.jpg'
import GUIT4 from '../../assets/modal/guit4.jpg'
const graf = [GRAF1, GRAF2, GRAF3, GRAF4]
const guit = [GUIT1, GUIT2, GUIT3, GUIT4]

export const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Grafika',
    github: 'https://github.com/buziusbastus1/grafika',
    demo: 'https://buziusbastus1.github.io/grafika/',
    modalContent: 'Modal conten for chart templatesModal conten for chart templatesModal conten for chart templatesModal conten for chart templatesModal conten for chart templatesModal conten for chart templates',
    modalImage: graf
  },
  {
    id: 2,
    image: IMG2,
    title: 'Guitar Display',
    github: 'https://github.com/buziusbastus1/guitar-display',
    demo: 'https://guitar-display.vercel.app/',
    modalContent: 'This is a React app built with ViteJS. The app displays my 3D glb model created in Blender(/public/models/) and uses ScrollControls and GSAP timeline to animate it. It also includes a subpage route where you can interact with the same model. <a href="https://www.youtube.com/@WawaSensei/about" target="_blank" rel="noreferrer">YouTube channel</a>',
    modalImage: guit
  }
]
