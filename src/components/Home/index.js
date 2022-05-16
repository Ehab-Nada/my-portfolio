import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-e.png'
import './index.scss'
import me from '../../assets/images/ehabnada.jpg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['h', 'a', 'b']
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    ' ',
    'E',
    'n',
    'd',
    ' ',
    'D',
    'e',
    'v',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / React</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="my-img">
          <img className="me" src={me} alt="ehab" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
