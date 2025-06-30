import CircularGallery from '../constants/CircularGallery'
const Projects = () => {
  return (
    <div>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
    </div>
  )
}

export default Projects
