import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

function Courses({ courses }) {
  const [index, setindex] = useState(0)
  const { content, title, price } = courses[index]

  const getTandomCourse = () => {
    let randomNumber = Math.floor(Math.random() * courses.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setindex(randomNumber)
  }

  const prevCourse = () => {
    setindex((index) => {
      let newIndex = index - 1
      if (newIndex < 0) {
        return courses.length - 1
      }
      return newIndex
    })
  }

  const nextCourse = () => {
    setindex((index) => {
      let newIndex = index + 1
      if (newIndex > courses.length - 1) {
        return 0
      }
      return newIndex
    })
  }

  //   const prevCourse = () => {
  //     setindex((index) => {
  //       let newIndex = index - 1
  //       if (newIndex < 0) {
  //         return courses.length - 1
  //       }
  //     })
  //   }

  //   const nextCourse = () => {
  //     setindex((index) => {
  //       let newIndex = index + 1
  //       if (newIndex > courses.length - 1) {
  //         return 0
  //       }
  //     })
  //   }

  return (
    <div className="course-maindiv">
      <div className="courseTitle">
        <h2>Kurslarım</h2>
        <button className="card-delete" onClick={getTandomCourse}>
          Rastgele Kurs Ata
        </button>
      </div>

      <div className="cardDiv">
        <button className="prev" onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="cards">
          <div className="card">
            <h2 className="title"> {title}</h2>
            <h4 className="price">{price}TL</h4>
            <h6>{content}</h6>
          </div>
        </div>
        <button className="next" onClick={nextCourse}>
          <FaChevronRight />
        </button>
      </div>

      {/* {courses.map((course) => {
          return <Course key={course.id} {...course} getCourses={getCourses} />
        })} */}
    </div>
  )
}

export default Courses
