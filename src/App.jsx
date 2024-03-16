
import './App.css'
import Button from './components/atoms/Button'
import TestimonialCard from './components/atoms/TestimonialCard'

function App() {

  return (
    <>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button text="button" />
    <TestimonialCard
        topic="Great Experience"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et quam vitae elit eleifend venenatis."
        profileImage="https://images.pexels.com/photos/20568187/pexels-photo-20568187/free-photo-of-mehrazin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="John Doe"
        job="CEO, Company XYZ"
      />
    </>
  )
}

export default App
