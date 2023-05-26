import AddNote from "./AddNote";
import Notes from "./Notes";
const Home = (props) => {
  return (
    <div>
      
      <AddNote title="Add a Note: " button="ADD" showAlert={props.showAlert}/>
      <Notes showAlert={props.showAlert}/>
    </div>
  )
}

export default Home