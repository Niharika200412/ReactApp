import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'

function App() {

  return (
    <>
      <div className="container knowing">
        <div className="row _menu-panel">
          <div>Header</div>
          <h1>hi</h1>
         
        </div>
         <div className="row _body-panel">
          <div className="col"><div><h1>RSI</h1></div></div>
        </div>
         <div className="row _cards-panel">
          <div className="col row">
            <div className="col-3 card _mycards"> 
              <div className="row card _headerCard"></div>
              <div className="row card _bodyCard "></div>
              <div className="row card _footerCard"></div>
            </div>
          </div>
           <div className="col row">
            <div className="col-3 card _mycards"> 
              <div className="row card _headerCard"></div>
              <div className="row card _bodyCard"></div>
              <div className="row card _footerCard"></div>
            </div>
          </div>
           <div className="col row">
            <div className="col-3 card _mycards"> 
              <div className="row card _headerCard"></div>
              <div className="row card _bodyCard"></div>
              <div className="row card _footerCard"></div>
            </div>
          </div>
           <div className="col row">
            <div className="col-3 card _mycards"> 
              <div className="row card _headerCard"></div>
              <div className="row card _bodyCard"></div>
              <div className="row card _footerCard"></div>
            </div>
          </div>
          <div className="col row">
            <div className="col-3 card _mycards"> 
              <div className="row card _headerCard"></div>
              <div className="row card _bodyCard"></div>
              <div className="row card _footerCard"></div>
            </div>
          </div>
          <div className="col row">
            <div className="col-3 card _mycards"> 
              <div className="row card _headerCard"></div>
              <div className="row card _bodyCard"></div>
              <div className="row card _footerCard"></div>
            </div>
          </div>
          
          
         

        </div>
      </div>
     
    </>
  )
}

export default App
