import React, { useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { Header } from '../components'
import { useDispatch, useSelector } from "react-redux";
import { getAllMedicals } from "../redux/Reducers/Medical/medical.action";


const donorGridName = (props) => (
    <div className="image flex gap-4">
        <>
            <img
                className="rounded-full w-10 h-10"
                src={props.profilepic}
                alt="donor"
            />
        </>
        <>
            <p className='text-sm'>{props.firstname}</p>
            <p className='text-sm'>{props.lastname}</p>
        </>
    </div>
);

const donorGridPhone = (props) => (
    <div className="image flex gap-4">
        <>
            <p className='text-sm'>{props.phone}</p>
            <p className='text-sm'>{props.phone}</p>
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


const Medicals = () => {


    const [medicals, setMedicals] = useState([])
    const dispatch = useDispatch()
    const medicalData = useSelector((state) => state.medicine.medicinelist)

    useEffect(() => {
        dispatch(getAllMedicals())
    }, [])

    useEffect(() => {
        if (medicalData) {
            setMedicals(medicalData);
        }
    }, [medicalData]);



    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Page" title="Medicals" />
            <GridComponent
                dataSource={medicals}
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

export default Medicals