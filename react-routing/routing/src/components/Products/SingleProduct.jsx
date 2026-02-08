import { useParams,useNavigate } from "react-router-dom"

const SingleProduct = () => {
  const {id} = useParams()
  const nevigate = useNavigate()
  const handleBack = () =>{
    nevigate(-1)
  }
  return (
    <div>
      <button onClick={handleBack}>go back</button>
      Single Product - {id}
    </div>
  )
}

export default SingleProduct
