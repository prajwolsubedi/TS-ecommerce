import Navbar from '../components/organism/Navbar'
import Footer from '../components/organism/Footer'
import useScrollToTop from '../hooks/useScrollTop'

const Profile = () => {
  useScrollToTop();
  return (
    <div>
        <Navbar />
            <h2 className="font-mono text-lg text-center p-52 bg-[#d6cfcf]">
            I hope you sleep well tonight 🙂
        </h2>
        <Footer />
    </div>
  )
}

export default Profile