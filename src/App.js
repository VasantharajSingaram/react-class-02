import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './App.css';



function App() {
  // let name = 'Vasanth';
  const names = [
    {
      name: "Love Today",
      pic: "https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg",
      para: "Love Today is an Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan of Comali fame, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment. The film stars Pradeep Ranganathan himself, Ivana and Raveena Ravi in lead roles."
    },

{
  name: "Beast",
  pic: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/beast-et00311733-13-04-2022-01-25-10.jpg",
  para: "Love Today is an Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan of Comali fame, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment. The film stars Pradeep Ranganathan himself, Ivana and Raveena Ravi in lead roles."

},
{
  name: "PS1",
  pic: "https://pbs.twimg.com/media/FeIucBQVUAIWJXJ?format=jpg&name=medium",
  para: "Love Today is an Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan of Comali fame, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment. The film stars Pradeep Ranganathan himself, Ivana and Raveena Ravi in lead roles."
},
{
  name: "Sardar",
  pic: "https://filmy.bio/movies/cover/Sardar%20(2022)%20Hindi%20Dubbed.jpg",
  para: "Love Today is an Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan of Comali fame, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment. The film stars Pradeep Ranganathan himself, Ivana and Raveena Ravi in lead roles."
}
  ]
  return(
    <div className="App">
      {/* <h1>
        Hello, {name} 😀 😀 - {10 * 20} followers{" "} //this is in the User(props) function see
      </h1> */}
      {/* <User name = "Arjun" 
      pic="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
  
      <User name = "Monisha"
      pic="https://img.freepik.com/free-photo/half-profile-image-beautiful-young-woman-with-bob-hairdo-posing-gazing-with-eyes-full-reproach-suspicion-human-facial-expressions-emotions-reaction-feelings_343059-4660.jpg?w=2000"
      />
      <User name = "Saravanan" 
      pic="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
      /> */}
  {/* <Welcome name = "raj"/> */}

      
      {names.map(nm => <Welcome name={nm.name} pic={nm.pic} para={nm.para} />)}
       </div>
  );
}

// function User(props) {
// const {pic, name} = props; //pbject destructuring (ES6)
//   return (
//   <section>
//   <img className= "img-1" src={props.pic} alt={props.name}></img>
//   <h1 className="user-name">Hello, <span className='user-name-2'>{props.name}</span>😀 😀</h1>
 
//  </section>
//   );
// } or

// function User({pic, name}) {

//   return (
//   <section>
//   <img className= "img-1" src={pic} alt={name}></img>
//   <h1 className="user-name">Hello, <span className='user-name-2'>{name}</span>😀 😀</h1>
 
//  </section>
//   );
// }


//using loop method here instead of for loop we use map
function Welcome({pic, name, para}) {

  return (
  <section>
     
<Container>
<Row>
  <Col>


 <img className= "img-1" src={pic} alt={name}></img>
  <h1 className='card-title'>{name}</h1>
  <p className='card-text'>{para}</p>
  

  </Col>
  </Row>
  </Container>
 </section>
  );
}


  


  
   
   

export default App;

// ctrl+` => terminal open shortcut
// npm start