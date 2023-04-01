import React, { useEffect, useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter, autoCol } from '@syncfusion/ej2-react-grids'
import { Header } from '../components'

import { useDispatch, useSelector } from "react-redux";
import { getMedicines } from "../redux/Reducers/Medicine/medicine.action";

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
const customerGridStatus = (props) => (
    <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
        <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
        <p>{props.Status}</p>
    </div>
);
export const medicineData = [
    {
        _id: "63fb96806cdf6224160d6cae",
        medname: "Saridon Headache Relief Tablet ",
        medimage: "https://www.netmeds.com/images/product-v1/600x600/109486/saridon_headache_relief_tablet_10s_117986_0_3.jpg",
        category: "Headache",
        desc: "Only to take decrese headache",
        donor: "63fb6fcea91936bad7c05e9a",
        donorname: "SHIVA Kanchi",
        donorimage: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/12/femto-berserk.jpg",
        expiry: "2023-1-10",
        quantity: "2",
        address: "UCOE",
        phone: "8928656498",
        comments: [],
    }
];

export const medicineGrid = [
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
            <Header category="Page" title="Medicines" />
            <GridComponent
                dataSource={medicines}
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



// export const customerGrid = [
//     { type: 'checkbox', width: '50' },
//     {
//         headerText: 'Name',
//         width: '150',
//         template: customerGridImage,
//         textAlign: 'Center'
//     },
//     {
//         field: 'ProjectName',
//         headerText: 'Project Name',
//         width: '150',
//         textAlign: 'Center'
//     },
//     {
//         field: 'Status',
//         headerText: 'Status',
//         width: '130',
//         format: 'yMd',
//         textAlign: 'Center',
//         template: customerGridStatus
//     },
//     {
//         field: 'Weeks',
//         headerText: 'Weeks',
//         width: '100',
//         format: 'C2',
//         textAlign: 'Center'
//     },
//     {
//         field: 'Budget',
//         headerText: 'Budget',
//         width: '100',
//         format: 'yMd',
//         textAlign: 'Center'
//     },

//     {
//         field: 'Location',
//         headerText: 'Location',
//         width: '150',
//         textAlign: 'Center'
//     },

//     {
//         field: 'CustomerID',
//         headerText: 'Customer ID',
//         width: '120',
//         textAlign: 'Center',
//         isPrimaryKey: true,
//     },

// ];