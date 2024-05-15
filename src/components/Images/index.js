import './index.css'

const Images = props => {
  const {imgDetails, clickedImg} = props
  const {id, thumbnailUrl} = imgDetails
  const imgClicked = () => {
    clickedImg(id)
  }
  return (
    <li>
      <button className="img-btn" onClick={imgClicked}>
        <img src={thumbnailUrl} alt="thumbnail" className="image" />
      </button>
    </li>
  )
}

export default Images
