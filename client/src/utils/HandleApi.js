import axios from 'axios';

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data--->', data);
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseUrl}/save`, { text }) // Send an object with 'text' property
        .then((response) => {
            console.log(response.data); // Assuming the data you want is in response.data
            setText("");
            getAllToDo(setToDo);
        })
        .catch((error) => {
            console.error('Error adding todo:', error);
        });
}

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
    axios
      .post(`${baseUrl}/update`, { _id: toDoId, text }) // Send an object with '_id' and 'text' properties
      .then((response) => {
        console.log(response.data); // Assuming the data you want is in response.data
        setText("");
        setIsUpdating(false);
        getAllToDo(setToDo);
      })
      .catch((error) => {
        console.error('Error updating todo:', error);
      });
    
};

const deleteToDo = (_id, setToDo) => {
    axios
      .post(`${baseUrl}/delete`, { _id }) // Send an object with '_id' and 'text' properties
      .then((response) => {
        console.log(response.data);
        getAllToDo(setToDo);
      })
      .catch((error) => {
        console.error('Error updating todo:', error);
      });
    
};
  


export { getAllToDo, addToDo, updateToDo, deleteToDo }