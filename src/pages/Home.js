import React, {useEffect, useState} from 'react'
import Select from 'react-select'
import {findWinningbid, getProjects} from "../beApis";
import {SubmitBid} from "./SubmitBid";
export const Home = () => {
    const sampleProjects = [
        { value: 'p1', label: 'Project1' },
        { value: 'p2', label: 'Project2' },
        { value: 'p3', label: 'Project3' }
    ]

    const [projects, setProject] = useState([sampleProjects]);
    const [optionSelected, setOptionSelected] = useState('');
    const [winningBid, setWinningBid] = useState();
    const GetWinningBid =  (selected) => {
         findWinningbid(selected)
             .then(response => {
                 setWinningBid(response);
                 DisplayWinner();
              })
             .catch((error) => console.log('error'));
    };

    const DisplayWinner = () => {
        return (
            <p>Winning bid is {winningBid}</p>
        )
    }
/*
    useEffect(() => {
        getProjects()
            .then((data) => setProject(data))
            .catch(() => {
                console.error('error');
            })
    }, [optionSelected]);*/

    return (
        <>
            <h1> Select the project</h1>
            <Select name='project' options={projects} isOptionSelected={(option) => setOptionSelected(option.label)}/>

            <button onClick={() => GetWinningBid(optionSelected)}>Check Winning Bid</button>

            <SubmitBid/>
        </>
    )
}