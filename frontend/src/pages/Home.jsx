import SideBar from '../components/Sidebar/SideBar'
import NotePanel from '../components/Panel/NotePanel'
import GraphPanel from '../components/Graph/GraphPanel'

const Home = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden bg-[#070a0f]">
      <SideBar />
      <GraphPanel />
      <NotePanel />
    </div>
  )
}

export default Home