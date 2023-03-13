import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image'
const Sampling = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();

    }, [])
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/main');
            // const data = await response.json();
            setData(response.data);


        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');

        }

    }

    return (
        <div>
            {
                


                    )
                })
            }



        </div>
    )
}
export default Sampling;