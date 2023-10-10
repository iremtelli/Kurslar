import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import Courses from "./Courses"
import Loading from "./Loading"

function App() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)

  const postCourses = async () => {
    await axios
      .post("http://localhost:3000/courses", {
        id: Math.random(0, 9999),
        content:
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
        title: Math.random(0, 9999) + "CSS",
        price: 69,
      })
      .then((res) => {
        fetchCourses()
      })
      .catch((err) => alert(err?.response?.statusText))
  }

  const fetchCourses = async () => {
    setLoading(true)
    await axios
      .get("http://localhost:3000/courses")
      .then((res) => {
        setCourses(res.data)
      })
      .catch((err) => alert(err?.response?.statusText))
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
  }
  useEffect(() => {
    fetchCourses()
  }, [])
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div>
              <h2>Kurs Bulunamadı</h2>
              <button
                onClick={() => {
                  postCourses()
                }}
              >
                Ekle
              </button>
            </div>
          ) : (
            <Courses courses={courses} />
          )}
        </>
      )}
    </div>
  )
}

export default App
