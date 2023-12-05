import '/index.css'

const DestinationItem = props => {
  const {deastinationDetails} = props
  const {imgUrl, name} = deastinationDetails
}
return (
  <li className="container">
    <img src={imgUrl} alt={name} className="image" />
    <p className="name">{name}</p>
  </li>
)

export default DestinationItem
