import React,{ useState } from "react"
import Modal from 'react-modal';

Modal.setAppElement('#root')
function Question(props) {
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    
    return (
        <>
            <div   onClick={()=> setmodalIsOpen(true)}
            className=" rounded-lg shadow-lg bg-white transition duration-500  cursor-pointer
            hover:scale-110 hover:bg-[#3c414c] flex justify-center items-center ">
                    
                <h3 className="font-bold text-2xl text-black">{props.name}</h3>
                    
            </div>
            <Modal  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none
                    relative mt-40 w-auto my-6 mx-auto max-w-3xl border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                    isOpen={modalIsOpen} 
                    onRequestClose={()=> setmodalIsOpen(false)}
                    >
          
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              {props.name}
                            </h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setmodalIsOpen(false)}
                            >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            {props.question}
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="border-2 border-rose-500 text-red-500 active:bg-rose-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setmodalIsOpen(false)}
                            >
                              Close
                            </button>
                            <button
                              className="border-2 border-green-500 text-green-500 active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setmodalIsOpen(false)}
                            >
                              Save Changes
                            </button>
                        </div>
                      
          
                  </Modal>
        </>
          )
}
export default Question;

