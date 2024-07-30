import React, { useState } from 'react'

const TodoList = () => {
    const [activity, setActivity]=useState("");
    const [listData, setListData]=useState([]); //initially empty array

const addActivity=()=>{
    // spread operator (...)
    //...listData will make the copy of listData
    setListData([...listData, activity])    
    //this will make a copy of listData and will append all the thing present in activity variable in the list
    setActivity('')
    // console.log(listData)
}

const removeActivity=(i)=>{
    const updatedListData= listData.filter((elem,id)=>{
        return i!==id;
    })
    setListData(updatedListData)
}

const removeAll=()=>{
    setListData([])
}
  return (
    <>
    <div className='container'>
        <div className='header'>TODO LIST</div>
      <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
      <button onClick={addActivity}>Add</button>
      <p className='List-heading'>Here is your List:</p>
      {listData!==[] && listData.map((data,i)=>{
        return(
            <>
            <p key={i}>
                <div className='listData'>{data}</div>
                <button className='btn-position' onClick={()=>removeActivity(i)}>Remove</button>
            </p>
            </>
        )
      })}
      {listData.length>=1 &&  
      <button onClick={removeAll}>Remove All</button>}

    </div>
    </>
  )
}

export default TodoList
