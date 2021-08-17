import React, { useState, useEffect } from 'react'
import "./content.css"
import { useParams } from "react-router-dom";

function Content({URL, filter}) {
    const {id} = useParams();
    const [modifiedURL, setModifiedURL] = useState(URL)
    const [entry, setEntry] = useState([])
    const [newEntry, setNewEntry] = useState([])
    useEffect(() => {
        console.log("UseEffect 1")
        if(newEntry.length>0){setNewEntry([])}
        if(URL.includes("id?")){
            console.log("incluye")
            let newURL = URL.replace("id", id)
            console.log(newURL)
            setModifiedURL(newURL)
        } else{
            console.log("else")
            setModifiedURL(URL)
        }
    }, [URL])
    useEffect(() => {
        console.log("UseEffect 2")
        const fetchData = async ()=> { 
            console.log(modifiedURL)
            const response = await fetch(modifiedURL);
            const data = await response.json();
            console.log(data)
            if( filter && data.items){
                console.log("Entre al if")
                const filteredDrafts = data.items.filter(
                (entry) => entry.sys.revision === 0);
                filteredDrafts.items=filteredDrafts;
                console.log(filteredDrafts)
                setNewEntry(filteredDrafts)
            }else{setEntry(data)}
        }
        fetchData();
    }, [ modifiedURL, filter])
    console.log(entry)
    console.log(newEntry)
    return (
        <div className="content">
            {   
            newEntry.length>0? 
                    newEntry.items.map((entry,i) => {
                    return <p key={entry+i}>{entry.fields.name}</p>
                })
            :
            entry.items?
                entry.items.map((entry,i) => {
                    return <p key={entry+i}>{entry.fields.name}</p>
                }):
                (entry.fields && <p>{entry.fields.name}</p>)
            }
        </div>
    )
}

export default Content
