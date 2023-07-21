import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Mainpage({userDetail,children}) {
    const history = useHistory();
  return (
    <><Container fluid className='container1'>
          <Row className='naviparent'>
              <Col><h3 className='naviH'>Navigation</h3></Col>
              <Col >
                  <Button
                   onClick={()=>
                      history.push("/add/user")
                   } 
                  className='naviadd' variant="dark"
                  >Add User</Button>
                  
                  <Button
                   onClick={()=>
                      history.push("/")
                   } 
                  className='navidash' variant="dark"
                  >Dashboard</Button>
              </Col>
          </Row>
      </Container>

      <Container fluid className='container2'>
              <Row className='headerparent'>
                  <Col><h2 className='headH'>{userDetail}</h2></Col>
              </Row>
          </Container>

        <Container fluid className='contentgrandparent'>
              <Row className='contentparent'>
                  <Col className='contentchild'>
                  {children}
                  </Col>
              </Row>
          </Container>

          <Container fluid className='footergrandparent'>
              <Row className='footerparent'>
                  <Col>
                    <article className='footCon'>copyright©️GowthamSarjah@2023</article>
                  </Col>
              </Row>
          </Container>
          
          
          
          </>
  );
}

export default Mainpage;