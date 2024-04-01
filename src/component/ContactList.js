import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux';

const ContactList = () => {
  const {contactList, keyword} = useSelector((state)=>state);
  let [searchList, setSearchList] = useState([]);
  useEffect(()=>{
    if(keyword !=="") {
      let list = contactList.filter((item)=>item.name.includes(keyword));
      setSearchList(list);
    } else {
      setSearchList(contactList);
    }
  }, [keyword, contactList])
  return (
    <div>
      <div className='contactList-title'>연락처 리스트 {searchList.length}</div>
      <SearchBox/>
      {searchList.map((item,idx)=>(<ContactItem key={idx} item={item}/>))}
    </div>
  )
}

export default ContactList
