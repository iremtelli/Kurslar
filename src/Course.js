import axios from "axios"

function Course({ id, content, title, price, getCourses }) {
  const handleRemove = async () => {
    await axios
      .delete("http://localhost:3000/courses/" + id)
      .then((res) => {
        getCourses()
      })
      .catch((err) => alert(err?.response?.statusText))
      .finally(() => {})
  }
  return (
    <div className="cards">
      <div className="card">
        <h2 className="title"> {title}</h2>
        <h4 className="price">{price}TL</h4>
        <h6>{content}</h6>
      </div>
      <button className="card-delete" onClick={() => handleRemove()}>
        Sil
      </button>
    </div>
  )
}

export default Course
