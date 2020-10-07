import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Lists from './Lists'
import './Wrapper.css'
import AddAnotherList from './AddAnotherList'

const Wrapper = ({setIsLoading}) => {
    const [lists, setLists] = useState([])

    const fetchLists = async () => {
        setIsLoading(true)
        try{
            const res = await Axios.get("https://trello-clone-ppm.herokuapp.com/list")
            setLists(res.data)
            setIsLoading(false)
        }catch {
            setLists([])
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchLists();
    },[])

    const addList = (list) => {
        setLists((prevLists) => [...prevLists, list]);
    };

    return(
        <div id="wrapper" className="px-2">
            {
                lists && lists.map(list => (
                    <Lists key={list.id} list={list} card={list.cards} />
                ))
            }
            { lists.length !== 0 && 
                <AddAnotherList addList={addList} position={lists.length}/>
            }
        </div>
    )

}

export default Wrapper
