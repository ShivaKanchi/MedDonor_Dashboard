import React, { useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids'
import { Header } from '../components'


import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '../redux/Reducers/Event/event.action';



const eventGridName = (props) => (
    <div className="image">
        <img
            className="w-15 h-15"
            src={props.eventimage}
            alt="event"
        />
    </div>
);

const donorGridaddress = (props) => (
    <div className="flex flex-col">
        <p className='text-sm'>{props.landmark}</p>
        <p className='text-sm'>{props.address}</p>
        <p className='text-sm'>{props.city} {props.state}</p>
    </div >
);

const donorGriddate = (props) => (
    <div className="flex flex-col">
        <p className='text-sm'>{props.startdate}</p>
        <p className='text-sm'>{props.enddate}</p>
    </div >
);
const donorGridcoordinator = (props) => (
    <div className="flex flex-col">
        <p className='text-sm'>{props.coordinatorname}</p>
        <p className='text-sm'>{props.coordinator}</p>
        <p className='text-sm'>{props.coordinatorphno}</p>
    </div>
);
// "_id": "63fb7990ef7e5110c6cc170f",
// "eventname": "Kandivali Stn Meddona camp",
// "eventimage": "http://nie-images.s3.amazonaws.com/gall_content/2016/10/2016_10$schoolimg06_Oct_2016_195159687.jpg",
// "landmark": "Kandivali stn",
// "address": "Kandivali-West",
// "city": "Mumbai",
// "state": "Maharashtra",
// "startdate": "29/10/2022",
// "enddate": "30/10/2022",
// "coordinator": "63fb6fcea91936bad7c05e9a",
// "coordinatorname": "SHIVA Kanchi",
// "coordinatorimage": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/12/femto-berserk.jpg",
// "coordinatorphno": [
// 8928656498,
// 7045115958
// ],
// "certificate": "no",
// "createdAt": "2023-02-26T15:24:00.704Z",
// "updatedAt": "2023-02-26T15:29:24.210Z",

export const eventsGrid = [
    { type: 'checkbox', width: '50' },
    {
        headerText: 'Image',
        width: '100',
        template: eventGridName,
        textAlign: 'Center'
    },
    {
        field: 'eventname',
        headerText: 'Name',
        width: '150',
        textAlign: 'Center',
    },
    {
        headerText: 'Address & Location',
        width: '250',
        template: donorGridaddress,
        textAlign: 'Center'
    },
    {
        headerText: 'Dates',
        template: donorGriddate,
        width: '100',
        textAlign: 'Center'
    },
    {
        headerText: 'Co-ordinator',
        template: donorGridcoordinator,
        width: '190',
        textAlign: 'Center'
    },
    {
        field: '_id',
        headerText: 'ID',
        width: '190',
        textAlign: 'Center',
        isPrimaryKey: true,
    },
];

const Events = () => {
    const [events, setEvents] = useState([])

    const dispatch = useDispatch()
    const eventData = useSelector(state => state.event.events)
    useEffect(() => {
        dispatch(getAllEvents())
    }, [])

    useEffect(() => {
        if (eventData) {
            setEvents(eventData);
        }
    }, [eventData]);

    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Page" title="Events" />
            <GridComponent
                dataSource={events}
                allowPaging
                allowSorting
                toolbar={['Search']}
                width="auto"
            >
                <ColumnsDirective>
                    {eventsGrid.map((item, index) => (
                        <ColumnDirective key={index}{...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar]} />
            </GridComponent>
        </div>
    )
}

export default Events