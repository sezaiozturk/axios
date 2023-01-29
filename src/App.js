import { View, Text, SafeAreaView, Button, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card/Card'

const URL='https://jsonplaceholder.typicode.com/users';

const App=()=> {
  const [userList,setUserList]=useState([]);
  const [load,setLoad]=useState(true);

  async function fetchData(){
    const response=await axios.get(URL);
    setUserList(response.data);
    setLoad(false);
  }
  useEffect(()=>{
    fetchData();
  },[])

  const renderItem=({item})=><Card name={item.name} userName={item.username} email={item.email}/>
  return (

    <SafeAreaView style={{backgroundColor:'#e3e3e3'}}>
      {
        load ? (<ActivityIndicator size={40}/>):(<FlatList 
        data={userList}
        renderItem={renderItem}
      />)
      }
    </SafeAreaView>
  )
}

export default App