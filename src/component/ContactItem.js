import React from 'react'
import {Row, Col} from "react-bootstrap"

const ContactItem = ({item}) => {
  return (
    <div className='contactItem-box'>
      <Row className='contactItem-each'>
        <Col lg={2}><img width={50} alt='' src="https://static-00.iconduck.com/assets.00/user-face-icon-2048x2048-epe1c16e.png"/></Col>
        <Col lg={10}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem
