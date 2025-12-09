import './Tag.css'
const Tag = (props) => {
    const {tagName} = props
  return (
    <>
      <button className="tag">{tagName}</button>
    </>
  )
}

export default Tag
