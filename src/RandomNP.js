import { useNavigate } from 'react-router-dom'
// import './RandomSpace.css';
import data from './data'
import './RandomNP.css'


const RandomSpace = () => {
    const navigate = useNavigate()
    return (
        <a
            className="RandomSpace"
            onClick={(e) => {
                const id = Math.floor(Math.random() * data.length)
                navigate(`/detail/${id}`)
            }}>Polish Generator 
        </a>
    )
}

export default RandomSpace