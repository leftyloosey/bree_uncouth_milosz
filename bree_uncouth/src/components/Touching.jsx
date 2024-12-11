// import construction_crane from '../assets/images/construction_crane.jpg'
import clipboard_masks from '../assets/images/clipboard_masks.JPG'
// import construction_indoors from '../assets/images/construction_indoors.jpg'
import construction_twilight from '../assets/images/construction_twilight.jpg'
import in_a_square from '../assets/images/in_a_square.jpg'
import in_a_square_zoom from '../assets/images/in_a_square_zoom.jpg'

import { useParallax } from 'react-scroll-parallax'

const Touching = ({ isOpen, menuShut }) => {
  const p1 =
    'My pedagogy is driven by my sense of our rapidly changing world and the architectural profession. The relationship between the students and the faculty, the composition of the student and faculty bodies, the substance of architectural education, and the ways of assessing its effectiveness are changing right in front of our eyes. To keep up with these changes, I use real sites, encourage and facilitate research, initiate community collaborations, and focus on the social dimension of architecture. These approaches allow students to construct empirical three-dimensional knowledge of the world they will be designing for.'
  const p2 =
    'In my Fall 2023 and 2024 graduate studios, students developed experimental residential highrise projects for downtown Salt Lake City, Utah. The student designs reconsidered traditional ways of apartment living in a city currently undergoing a construction boom and rapid densification. To understand the scale of a housing unit in relation to Salt Lake urban morphology, we started the Fall 2023 semester with a two-week charette: students designed infill housing for the notoriously wide Salt Lake streets in partnership with a local affordable housing-focused developer GiV Group.'

  const p3 =
    'In elective courses, I focus on global and local contemporary challenges from a joint humanities perspective: rather than looking at it solely through large-scale demographic or economic lenses, I focus on human experience in the built environment, because exposure to the experiences of others drives change and improvement and promotes care at a personal level. In my oral history and architectural documentation field course on Housing Insecurity in Mississippi, co-taught with Silvina Lopez Barrera, students interview community members and document their lived spaces in order to write a public history of dramatic and continuous housing issues in our state and town.'

  const p4 =
    'In my history and theory courses, I teach students to hold informed discussions and write. Architectural writing should go beyond the requirements of a basic writing and composition course; it must exhibit a kind of thinking only an architect can possess, using the strength of our specialized knowledge of the visual language of drawing, and of a relationship between an individual and the built environment. In 2023, under my mentorship as a writing advisor, Mississippi State University student Elisa Castaneda won the prestigious grand prize of the Aydelott Travel Award competition. Prior to Elisa’s victory under my mentorship, no student from Mississippi State University received the grand prize in this competition. Elisa’s accomplishment showcases her exceptional talent and persistence. It also reassures me that my dedication to the quality of student writing in classes I teach and projects I mentor makes a difference.'

  const Tile = ({ pic, text }) => {
    // const parallax = useParallax({
    //   speed: -20,
    // })
    const parallax2 = useParallax({
      speed: -20,
    })
    return (
      <div
        onClick={menuShut}
        className={`transition delay-600 duration-300 ease-in-out  gap-2 ${
          isOpen ? 'invisible' : ''
        }`}
      >
        <img
          alt=''
          src={pic}
          className='w-screen md:w-1/2 h-auto shadow-lg rounded-md object-cover'
        />
        <div className='flex flex-row'>
          <p className='m-2 pl-4 w-3/4'>{text}</p>
          <div ref={parallax2.ref} className='flex flex-col'>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='mt-2'>
      <Tile pic={in_a_square} text={p1} />

      <Tile pic={construction_twilight} text={p2} />

      <Tile pic={in_a_square_zoom} text={p3} />

      <Tile pic={clipboard_masks} text={p4} />

      <div className='mt-16'>.</div>
    </div>
  )
}

export default Touching
