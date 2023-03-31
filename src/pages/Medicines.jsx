import React, { useEffect, useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { Header } from '../components'

import { useDispatch, useSelector } from "react-redux";
import { getMedicines } from "../redux/Reducers/Medicine/medicine.action";

const customerGridImage = (props) => (
    <div className="image flex gap-4">
        <img
            className="rounded-full w-10 h-10"
            src={props.CustomerImage}
            alt="employee"
        />
        <div>
            <p>{props.CustomerName}</p>
            <p>{props.CustomerEmail}</p>
        </div>
    </div>
);
const customerGridStatus = (props) => (
    <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
        <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
        <p>{props.Status}</p>
    </div>
);
export const customersData = [
    {
        CustomerID: 1001,
        CustomerName: 'Nirav Joshi',
        CustomerEmail: 'nirav@gmail.com',

        ProjectName: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Weeks: '40',
        Budget: '$2.4k',
        Location: 'India',
    },
    {
        CustomerID: 1002,

        CustomerName: 'Sunil Joshi',
        CustomerEmail: 'sunil@gmail.com',
        ProjectName: 'Elite Admin',
        Status: 'Active',

        StatusBg: '#8BE78B',
        Weeks: '11',
        Budget: '$3.9k',
        Location: 'India',
    },
    {
        CustomerID: 1003,

        CustomerName: 'Andrew McDownland',
        CustomerEmail: 'andrew@gmail.com',
        ProjectName: 'Real Homes WP Theme',
        Status: 'Pending',

        StatusBg: '#FEC90F',
        Weeks: '19',
        Budget: '$24.5k',
        Location: 'USA',
    },
   

];

export const medicineGrid = [
    { type: 'checkbox', width: '50' },
    {
        headerText: 'Name',
        width: '150',
        template: customerGridImage,
        textAlign: 'Center'
    },
    {
        field: 'ProjectName',
        headerText: 'Project Name',
        width: '150',
        textAlign: 'Center'
    },
    {
        field: 'Status',
        headerText: 'Status',
        width: '130',
        format: 'yMd',
        textAlign: 'Center',
        template: customerGridStatus
    },
    {
        field: 'Weeks',
        headerText: 'Weeks',
        width: '100',
        format: 'C2',
        textAlign: 'Center'
    },
    {
        field: 'Budget',
        headerText: 'Budget',
        width: '100',
        format: 'yMd',
        textAlign: 'Center'
    },

    {
        field: 'Location',
        headerText: 'Location',
        width: '150',
        textAlign: 'Center'
    },

    {
        field: 'CustomerID',
        headerText: 'Customer ID',
        width: '120',
        textAlign: 'Center',
        isPrimaryKey: true,
    },

];

const Medicines = () => {
    const [medicines, setMedicines] = useState([])
    const dispatch = useDispatch()
    const medData = useSelector((state) => state.medicine.medicinelist)
    useEffect(() => {
        dispatch(getMedicines())
    }, [])
    useEffect(() => {
        if (medData) {
            setMedicines(medData);
        }
    }, [medData]);

    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Page" title="Customers" />
            <GridComponent
                dataSource={customersData}
                allowPaging
                allowSorting
                toolbar={['Delete']}
                editSettings={{ allowDeleting: true, allowEditing: true }}
                width="auto"
            >
                <ColumnsDirective>
                    {medicineGrid.map((item, index) => (
                        <ColumnDirective key={index}{...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
        </div >
    )
}

export default Medicines


