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
    modalContent: '<p>This was my first website uploaded to a github. The course posted on a freecodecamp.org YouTube channel named <a href="https://youtu.be/3PHXvlpOkf4conten" target="_blank" rel="noreferrer">Build 15 JavaScript Projects - Vanilla JavaScript Course</a> inspired my to build my own website.<p>It contains buttons appearing on hover or click on touch-screen devices. Two buttons open up text container in the same place which you can close. The other buttons open up the modals with filtering of images and ability to click on them in order to zoom and swipe them with the <a href="https://photoswipe.com/" target="_blank" rel="noreferrer">PhotoSwipe</a>.</p>',
    modalImage: graf,
    technologies: '<li>Vanilla JS</li><li>HTML</li><li>SCSS</li><li>RWD</li><li>PhotoSwipe</li>'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Guitar Display',
    github: 'https://github.com/buziusbastus1/guitar-display',
    demo: 'https://guitar-display.vercel.app/',
    modalContent: 'This is a React app built with ViteJS. The app displays my 3D glb model created in Blender which uses <a href="https://github.com/pmndrs/drei#scrollcontrols" target="_blank" rel="noreferrer">ScrollControls</a> and GSAP timeline to animate model and user interface. It also includes a subpage route where you can interact with the same model. You can move around with <a href="https://threejs.org/docs/#examples/en/controls/OrbitControls" target="_blank" rel="noreferrer">OrbitControls</a>, click on different parts with camera foucus with <a href="https://github.com/pmndrs/drei#bounds" target="_blank" rel="noreferrer">Bounds</a>, display mesh name on hover near the cursor and change mesh material color.<p> I learned a lot at about react-three-fiber at Wawa Sensei <a href="https://www.youtube.com/@WawaSensei" target="_blank" rel="noreferrer">YouTube channel</a> and <a href="https://github.com/pmndrs/drei" target="_blank" rel="noreferrer">react-three/drei</a> doucumentation.</p>',
    modalImage: guit,
    technologies: '<li>Vite</li><li>SCSS</li><li>React</li><li>Three.js</li><li>React Three Fiber</li><li>GSAP</li><li>React Router</li>'
  }
]
