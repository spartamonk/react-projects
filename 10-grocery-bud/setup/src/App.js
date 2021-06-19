import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
const getLocalStorage =()=> {
  let list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(list)
  } else {
    return []
  }
}
function App() {
  const [itemName, setItemName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    isAlert: false,
    alertType: '',
    alertText:''
  });
  const {isAlert} = alert;
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] =useState(null);
  const showAlert=(isAlert=false, alertType='', alertText="")=> {
    setAlert({isAlert, alertType, alertText});
  }

  const handleSubmit =(e)=> {
    e.preventDefault();
    if(!itemName) {
      showAlert(true,'danger','please enter value')
    }
    else if(itemName && isEditing) {
      setList(
        list.map(item => {
          if(item.id === editID) {
            return {
              ...item, name: itemName
            }
          }
          return item;
        })
        
      )
      setItemName('');
      showAlert(true, 'success', 'value changed');
      setIsEditing(false)
    }
    else {
      const newItem= {name: itemName, id: new Date().getTime().toString()}
      setList([...list, newItem]);
      setItemName('');
      showAlert(true, 'success', 'item added to the list')
    }
  }
 
  const clearAll = ()=> {
    setList([]);
    showAlert(true, 'danger', 'empty list')
  }
  const removeItem = id => {
    const newList= list.filter(item=> item.id !== id);
    setList(newList);
    showAlert(true, 'danger', 'item removed');
  }
  const editItem = id => {
    const specificItem = list.find(item=> item.id === id);
    setItemName(specificItem.name);
    setIsEditing(true);
    setEditID(id);
    
  }
  useEffect(()=> {
    localStorage.setItem('list', JSON.stringify(list));
  },[list])
  return (
    <section className='section-center'>
      <form action='' className='grocery-form' onSubmit={handleSubmit}>
        {isAlert && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <button className='submit-btn' type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {
      list.length > 0 && (<div className='grocery-container'>
        {
          list.map(item => {
            const {id, name} = item;
            return (
              <List
                key={id}
                {...item}
                removeItem={removeItem}
                editItem={editItem}
              />
            )
          })
        }
        <button className="clear-btn" type="button" onClick={clearAll}>clear items</button>
      </div>)
      }
    </section>
  )
}

export default App
