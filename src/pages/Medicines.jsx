import React, { useEffect, useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'


import { useDispatch, useSelector } from "react-redux";
import { getMedicines } from "../redux/Reducers/Medicine/medicine.action";


const Medicines = () => {
    const [medicines, setMedicines] = useState([])

    const dispatch = useDispatch()
    // const medData = useSelector((state) => state.medicine.medicinelist)

    useEffect(() => {
        dispatch(getMedicines())
    }, [])

    // useEffect(() => {
    //     if (medData) {
    //         setMedicines(medData);
    //     }
    // }, [medData]);

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
                    {customersGrid.map((item, index) => (
                        <ColumnDirective key={index}{...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
        </div >
    )
}

export default Medicines