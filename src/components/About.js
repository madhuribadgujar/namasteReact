import UserClass from './UserClass'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
          About Us
        </h1>
        <h2 className="text-xl font-medium text-center text-gray-600 mb-8">
          This is the About page
        </h2>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
          <UserClass name={'Mrugakshi Badgujar (class)'} location={'Pune'} />
        </div>
      </div>
      <div className="bg-gray-800 text-white text-center py-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Ready to Order?</h3>
        <p className="text-lg mb-6">
          Browse through our diverse menu and get your favorite meal delivered
          to your doorstep today!
        </p>
        <button className="bg-gray-500 hover:bg-orange-400 text-white px-6 py-3 rounded-lg text-lg">
          Start Ordering
        </button>
      </div>
    </div>
  )
}

/**
 *
 * import { Component } from 'react'
// import UserClass from './UserClass'

class About extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('About component mounted')
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is About</h2>
      </div>
    )
  }
}
 */
export default About
