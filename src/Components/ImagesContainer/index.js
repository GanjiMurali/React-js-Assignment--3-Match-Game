import './index.css'

const ImagesContainer = props => {
  const {eachItemDetails, clickImageItem} = props
  const {id, thumbnailUrl} = eachItemDetails

  const imageElement = () => {
    clickImageItem(id)
  }

  return (
    <li>
      <button
        type="button"
        onClick={imageElement}
        className="small-images-buttons"
      >
        <img src={thumbnailUrl} alt="thumbnail" className="images" />
      </button>
    </li>
  )
}

export default ImagesContainer
