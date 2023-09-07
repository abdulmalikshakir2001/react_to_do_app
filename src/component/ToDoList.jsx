// import { FaBeer } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import toDo from "/src/assets/to_do.png";
import "./ToDoList.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { AiFillDelete } from 'react-icons/ai';
export default function ToDoList() {


  

  // store values in array 
  let [itemsArray, setItemsArray] = useState([])


  
  // assing value to input element 
  let [inputText,setInputText] =  useState("")
  let inputTextChange  = (e) =>{
    setInputText(e.target.value)
  }
  // add item on click 
  let  addItem = () =>{
    // alert(inputText)
    if(inputText !=""){
      setItemsArray([...itemsArray,inputText])
    setInputText("")
    toast.success('Your item added ', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

    }
    else{
      toast.warn('Please Fill the field', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });


    }


   

    




  }  

   // delete item 
   let deleteItem = (id) =>{
    let filterArray =  itemsArray.filter((item,index)=>{
      return index != id

    })
    setItemsArray(filterArray)
    toast.success('item deleted ', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });


    
   }
  return (
    <>
      <div className="container">
        <div className="row flex-column align-items-center">
          {/* image */}
          
          <div className="col-md-4 d-flex justify-content-center">
          <figure>
            <img src={toDo} alt="" />
            <figcaption className="text-center">
              Enter  Your Text Here 📃
            </figcaption>

            </figure>
          </div>
          

          <div className="col-md-4  mt-3">
            <form>
              <div className=" mb-3 position-relative">
                <input
                  type="text"
                  className="form-control"
                  id="input_text"
                  placeholder="✍️ Enter Your List Item"
                  value={inputText}
                  onChange={inputTextChange}
                  
                />
                <div className="add_btn" onClick={addItem} >
                <AiOutlinePlus />

                </div>

                
                
              </div>
            </form>
          </div>
          {/* list item */}
          <div className="col-md-4">
            {
              itemsArray.map((item,index)=>{
                return (
                  <>
                  <div className="position-relative item_button" key={index}>
                    <p  key={index}  className="mb-0"> {item}</p>
                    <div className="delete_btn" onClick={() =>{
                      deleteItem(index)
                    }}>
                     <AiFillDelete/>
                    </div>

                  </div>

                  </>
                )
              })
              
            }

          </div>






          {/* <div className="col-md-4 d-flex justify-content-center mt-3">
            <button type="button" className="check_list_button">Check List</button>
          </div> */}

          



        </div>
      </div>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  );
}
