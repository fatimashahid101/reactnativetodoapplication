import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, ShadowPropTypesIOS, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Task from '../components/Task';
import {AuthContext} from '../navigation/AuthProvider';


const TodoList = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])
  const {logout} = useContext(AuthContext);

  handleAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }])
      setValue('')
    }
  }

  handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== id) return true
      })
    )
  }

  handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    )
  }
  return (
    // <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }} source={require('../assets/backgroundimage.jpg')}>
      <View style={styles.container}>
   
        
         
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            onChangeText={(value) => setValue(value)}
            placeholder={'Write a todo!'}
            placeholderTextColor="purple"
            value={value}
          />
          <TouchableOpacity onPress={() => handleAddTodo()}>
            <Icon name="plus" size={30} color="#900" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {
            todos.map((task) => (
              <Task
                text={task.text}
                key={task.key}
                checked={task.checked}
                setChecked={() => handleChecked(task.key)}
                delete={() => handleDeleteTodo(task.key)}
              />
            ))

          }
        </ScrollView>
        {/* <FormButton style={styles.btn} buttonTitle='Logout' onPress={() => logout()}/> */}
        <TouchableOpacity style={styles.buttonContainer} onPress={() => logout()}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
      </View>
    // </ImageBackground>
  )
}
export default TodoList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333333'
},
buttonContainer: {
    marginTop: 10,
    width: '100%',
    backgroundColor: 'purple',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
  textInput: {
    height: 30,
    flex: 1,
    minHeight: '15%',
    marginTop: '10%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
    paddingLeft: 10
  },
  taskWrapper: {
    marginTop: '2%',
    flexDirection: 'row',
    // alignItems: 'baseline',
    borderColor: '#D0D0D0',
    borderBottomWidth: 0.5,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40,
  },
  task: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 6,
    borderColor: 'purple',
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'rgb(222,222,222)',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 5
  }
});



// import React,{ useEffect, useState, useContext } from 'react'
// import { StyleSheet, FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
// // Import vector icons
// import Icon from 'react-native-vector-icons/FontAwesome';
// import firestore from '@react-native-firebase/firestore';
// import {AuthContext} from '../navigation/AuthProvider';
// const TodoList = () => {
//     // const [entityText, setEntityText] = useState('')
//     // const [entities, setEntities] = useState([])
//     const [todos , setTodos] = useState([])
//     const [input , setInput] = useState('');
//     const { user} = useContext(AuthContext)

//     // const entityRef = firestore().collection('entities')
//     // const userID = user.uid


//     useEffect(() => {
//         firestore().collection('entities').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
//             setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
//           })
//         // firestore().collection('entities')
//         //     // .where("authorID", "==", userID)
//         //     .orderBy('createdAt', 'desc')
//         //     .onSnapshot(
//         //         querySnapshot => {
//         //             const newEntities = []
//         //             querySnapshot.forEach(doc => {
//         //                 const entity = doc.data()
//         //                 entity.id = doc.id
//         //                 newEntities.push(entity)
//         //             });
//         //             setEntities(newEntities)
//         //         },
//         //         error => {
//         //             console.log(error)
//         //         }
//         //     )
//     }, [input])

    

//     const onAddButtonPress = (event) => {
//         // event.preventDefault();
//         firestore().collection('entities').add({
//           todo: input, 
//           timestamp: firestore.FieldValue.serverTimestamp()
//         })
//         // setTodos([...todos, input]);
//         setInput('')
//         // if (entityText && entityText.length > 0) {
//         //     const timestamp = firestore.FieldValue.serverTimestamp();
//         //     const data = {
//         //         text: entityText,
//         //         // authorID: userID,
//         //         createdAt: timestamp,
//         //     };
//         //     firestore().collection('entities')
//         //         .add(data)
//         //         .then(_doc => {
//         //             setEntityText('')
//         //             Keyboard.dismiss()
//         //         })
//         //         .catch((error) => {
//         //             alert(error)
//         //         });
//         // }
//     }

  
//     const renderList = ({item, index}) => {
//         return (
//             <View style={styles.entityContainer}>
//                 <View >
//                 <Text style={styles.entityText}>
//                 <Icon style={styles.deleteentity}   onPress={event => {firestore().collection('todos').doc(doc.id).delete()}} name="minus-square" size={25} color="purple" /> {item.todos}
//                 </Text>

//                 </View>
//                <View>
            
//                </View>
               
//             </View>
//         )
//     }



  
//     return (
//         <View style={styles.container}>
//         <View style={styles.formContainer}>
//             <TextInput
//                 style={styles.input}
//                 placeholder='Add new entity'
//                 placeholderTextColor="#aaaaaa"
//                 onChange={event => setInput(event.target.value)}
//                 value={input}
//                 underlineColorAndroid="transparent"
//                 autoCapitalize="none"
//             />
//             <TouchableOpacity style={styles.button}  onPress={onAddButtonPress}>
//                 <Text style={styles.buttonText}>Add</Text>
//             </TouchableOpacity>
//         </View>
//         { todos && (
//             <View style={styles.listContainer}>
//                 <FlatList
//                     data={todos}
//                     renderItem={renderList}
//                     keyExtractor={(item) => item.id}
//                     removeClippedSubviews={true}
//                 />
//             </View>
//         )}
//     </View>
 
//     )
// }

// export default TodoList;
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center'
//     },
//     formContainer: {
//         flexDirection: 'row',
//         height: 80,
//         marginTop: 40,
//         marginBottom: 20,
//         flex: 1,
//         paddingTop: 10,
//         paddingBottom: 10,
//         paddingLeft: 30,
//         paddingRight: 30,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     input: {
//         height: 48,
//         borderRadius: 5,
//         overflow: 'hidden',
//         backgroundColor: 'white',
//         paddingLeft: 16,
//         flex: 1,
//         marginRight: 5
//     },
//     button: {
//         height: 47,
//         borderWidth:3,
//         borderColor:'purple',
//         borderBottomLeftRadius: 9,
//         borderTopRightRadius: 9,
//         backgroundColor: 'white',
//         width: 80,
//         alignItems: "center",
//         justifyContent: 'center',
//         marginRight:5
//     },
//     buttonText: {
//         color: 'purple',
//         fontSize: 16,
//         fontWeight:'bold'
//     },
//     listContainer: {
//         marginTop: 20,
//         padding: 20,
//     },
//     entityContainer: {
//         display:'flex',
//         width:300,
//         marginTop: 16,
//         borderBottomColor: 'purple',
//         paddingTop: 6,
//         padding: 6,
//         // height:50,
//         borderWidth:3,
//         borderColor:'purple',
//         borderBottomLeftRadius: 9,
//         borderTopRightRadius: 9,

//     },
//     entityText: {
//         fontSize: 20,
//         color: 'purple',
//     },
// })