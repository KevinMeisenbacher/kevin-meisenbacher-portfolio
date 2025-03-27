import './Avatar.scss'
import photo from '../../assets/img/photo.jpg';

const avatar = ({ format }) => {
  return(
    <img src={photo} alt="avatar" className={format} />
  )
}

export default avatar();