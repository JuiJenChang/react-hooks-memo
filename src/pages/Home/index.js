import { useEffect, useRef, useState } from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import './index.css'
import { API_GET_DATA } from '../../global/constants'

const getData = async(setData) => {
	const res = await fetch(API_GET_DATA)
	const { data } = await res.json()
	setData(data)
} 

const updateData = async(data) => {
	await fetch(API_GET_DATA, {
		method: 'PUT',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({ data })
	})
}

const Home = () => {
  const [data, setData] = useState([]);
	const submittingStatus = useRef(false)

	useEffect(() => {
		getData(setData)
	}, [])

	useEffect(() => {
		if (!submittingStatus.current) {
			return
		}
		updateData(data)
			.then(data => submittingStatus.current = false)
	}, [data])

  return (
    <div className="app">
      <Edit add={setData} submittingStatus={submittingStatus} />
      <List listData={data} deleteDate={setData} submittingStatus={submittingStatus} />
    </div>
  );
};

export default Home;
