import React, { useEffect, useState } from 'react';
import { firestore } from '../index'
import Foodform from './Foodform';
import './css/Store.css';

const Store = props => {
    const [tasks, settasks] = useState([])

    const retriveData = () => {
        firestore.collection('food').onSnapshot((snapshot) => {
            console.log(snapshot.docs)
            let foods = snapshot.docs.map(d => {
                const { name, imgUrl, detail, recipes, cook } = d.data()
                return { name, imgUrl, detail, recipes, cook }
            })
            settasks(foods)
        })
    }

    useEffect(() => {
        retriveData()
    }, [])

    return (
        <div>
            <div className='store'>
                {
                    tasks.map((item, index) => {
                        return (
                            <Foodform
                                foods={item}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </div>


    );
}

export default Store;