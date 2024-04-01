import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

// 1. 왼쪽: 연락처 등록 폼, 오른쪽: 연락처 리스트와 검색창
// 2. 연락처 리스트: 유저 이름, 유저 연락처
// 3. 연락처 리스트 갯수.
// 4. 사용자가 유저의 이름을 통해 검색 가능.


function App() {
  return (
    <div className='whole-box'>
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col className='left-side'><ContactForm/></Col>
          <Col><ContactList/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
