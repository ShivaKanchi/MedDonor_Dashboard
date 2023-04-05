import React, { useEffect, useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { Header } from '../components'

import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../redux/Reducers/User/user.action";



const donorGridName = (props) => (
    <div className="image flex gap-4">
        <>
            <>
                <img
                    className="rounded-full w-10 h-10"
                    src={props.profilepic}
                    alt="donor"
                />
            </>
            <p className='text-sm'>{props.firstname}-{props.lastname}</p>

        </>
    </div>
);

const donorGridPhone = (props) => (
    <div className="image flex gap-4">
        <>
            <p className='text-sm'>{props.phone}</p>
            {/* <p className='text-sm'>{props.phone}</p> */}
        </>
    </div>
);


const donorGridDonations = (props) => (
    <div className="image flex gap-4">
        <>
            <p className='text-sm'>{props.phone}</p>
            <p className='text-sm'>{props.phone}</p>
        </>
    </div>
);


// "_id": "63fb6fcea91936bad7c05e9a",
// "firstname": "SHIVA",
// "lastname": "Kanchi",
// "profilepic": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/12/femto-berserk.jpg",
// "email": "shiva11@gmail.com",
// "password": "$2a$08$Npr4VOqFSL45gwXfU2UbjeqLZigf1hY3yPQ04gk/BwgmNidMZHWEW",
// "address": "Dont Know",
// "phone": [
// 8928656498,
// 7045115958
// ],
// "donations": [
// "63fb96806cdf6224160d6cae"
// ],
// "comments": [],
// "createdAt": "2023-02-26T14:42:22.702Z",
// "updatedAt": "2023-02-26T17:27:28.333Z",
// "__v": 0

export const donorGrid = [
    { type: 'checkbox', width: '50' },
    {
        headerText: 'Name',
        width: '100',
        template: donorGridName,
        textAlign: 'Center'
    },
    {
        field: 'email',
        headerText: 'Email',
        width: '200',
        textAlign: 'Center',
    },
    {
        headerText: 'phone',
        width: '100',
        template: donorGridPhone,
        textAlign: 'Center'
    },
    {
        headerText: 'Donations',
        width: '200',
        template: donorGridDonations,
        textAlign: 'Center'
    },
    {
        field: 'address',
        headerText: 'Address',
        width: '200',
        textAlign: 'Center'
    },
    {
        field: 'comments',
        headerText: 'Comments',
        width: '110',
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

const Donors = () => {

    const [donors, setDonors] = useState([])
    const dispatch = useDispatch()
    const donorsdata = useSelector((state) => state.user.users)

    useEffect(() => {
        dispatch(getAllUser())
    }, [])

    useEffect(() => {
        if (donorsdata) {
            console.log(donorsdata)
            setDonors(donorsdata);
        }
    }, [donorsdata]);


    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Page" title="Donors" />
            <GridComponent
                dataSource={donors}
                allowPaging
                allowSorting
                toolbar={['Delete', 'Search']}
                editSettings={{ allowDeleting: true, allowEditing: true }}
                width="auto"
            >
                <ColumnsDirective>
                    {donorGrid.map((item, index) => (
                        <ColumnDirective key={index}{...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Search, Filter]} />
            </GridComponent>
        </div >
    )
}

export default Donors


 // {
    //     field: 'phone',
    //     headerText: 'Phone',
    //     width: '100',
    //     // format: 'yMd',
    //     textAlign: 'Center'
    // },

    // {
    //     field: 'address',
    //     headerText: 'Location',
    //     width: '150',
    //     textAlign: 'Center'
    // },
    // {
    //     field: 'expiry',
    //     headerText: 'Expiry',
    //     width: '130',
    //     format: 'yMd',
    //     textAlign: 'Center',
    //     template: customerGridStatus
    // },