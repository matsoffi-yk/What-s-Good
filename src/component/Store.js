import React, { useEffect, useState } from 'react';
import { firestore } from '../index'
import Foodform from './Foodform';

const Store = () => {
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
    console.log('2222',tasks)
    return (
        <div>
            {
                tasks.map((item, index) => {
                    return (
                        <Foodform 
                            foods ={item}
                            key = {index}
                        />
                    )
                })
            }

        </div>

    );
}

export default Store;