import React, { useEffect, useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../redux/Reducers/User/user.action";



const medicineGridImage = (props) => (
    <div className="image flex gap-4">
        <img
            className="w-10 h-10"
            src={props.medimage}
            alt="med"
        />
    </div>
);
const donorGridImage = (props) => (
    <div className="image flex gap-2">
        <div>
            <p className='text-sm'>{props.donorname}</p>
            <p className='text-sm'>{props.donor}</p>
        </div>
        {/* <img
            className="rounded-full w-10 h-10"
            src={props.donorimage}
            alt="donor"
        /> */}
    </div>
);


export const donorGrid = [
    { type: 'checkbox', width: '50' },

    {
        field: 'medname',
        headerText: 'Name',
        width: '200',
        textAlign: 'Center',
    },
    {
        headerText: 'Image',
        width: '100',
        template: medicineGridImage,
        textAlign: 'Center'
    },
    {
        headerText: 'Donor',
        width: '200',
        template: donorGridImage,
        textAlign: 'Center'
    },
    {
        field: 'desc',
        headerText: 'Description',
        width: '200',
        textAlign: 'Center'
    },
    // {
    //     field: 'expiry',
    //     headerText: 'Expiry',
    //     width: '130',
    //     format: 'yMd',
    //     textAlign: 'Center',
    //     template: customerGridStatus
    // },
    {
        field: 'quantity',
        headerText: 'Quantity',
        width: '110',
        // format: 'C2',
        textAlign: 'Center'
    },
    {
        field: 'phone',
        headerText: 'Phone',
        width: '100',
        // format: 'yMd',
        textAlign: 'Center'
    },

    {
        field: 'address',
        headerText: 'Location',
        width: '150',
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
    const donorsdata = useSelector((state) => state.medicine.medicinelist)
    useEffect(() => {
        dispatch(getAllUser())
    }, [])
    useEffect(() => {
        if (donorsdata) {
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
                toolbar={['Delete']}
                editSettings={{ allowDeleting: true, allowEditing: true }}
                width="auto"
            >
                <ColumnsDirective>
                    {donorGrid.map((item, index) => (
                        <ColumnDirective key={index}{...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
        </div >
    )
}

export default Donors