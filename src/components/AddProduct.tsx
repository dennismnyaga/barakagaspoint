/* eslint-disable prettier/prettier */
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import profile from '../images/alexander-shatov-niUkImZcSP8-unsplash.jpg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddProductBrand from './AddProductBrand';



interface SalesRecord {
  name: string;
  kg3: {
    quantity: number;
    returned: number;
    sold: number;
  };
  kg12: {
    quantity: number;
    returned: number;
    sold: number;
  };
  kg24: {
    quantity: number;
    returned: number;
    sold: number;
  };
}


const salesRecords: SalesRecord[] = [
  {
    name: 'K-Gas',
    kg3: { quantity: 159, returned: 6.0, sold: 24 },
    kg12: { quantity: 237, returned: 9.0, sold: 37 },
    kg24: { quantity: 262, returned: 16.0, sold: 24 },
  },
  {
    name: 'Pro-Gas',
    kg3: { quantity: 159, returned: 6.0, sold: 24 },
    kg12: { quantity: 237, returned: 9.0, sold: 37 },
    kg24: { quantity: 262, returned: 16.0, sold: 24 },
  },
  // Add more sales records here...
];

const AddProduct = () => {
  return (
    <div className='m-4'>
      <div className=' mb-3 text-black'>
        <AddProductBrand />
      </div>
      <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sales table'>
              <TableHead>
                <TableRow>
                  <TableCell className='font-bold'>Product</TableCell>
                  <TableCell align='right'>Weight</TableCell>
                  <TableCell align='right'>Stock</TableCell>
                  <TableCell align='right'>Returned</TableCell>
                  <TableCell align='right'>Sold</TableCell>
                  <TableCell align='right'>Add Stock</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {salesRecords.map((record) => (
                  <React.Fragment key={record.name}>
                    <TableRow>
                      <TableCell component='th' scope='row' rowSpan={4}>
                        {record.name}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3(Kg)</TableCell>
                      <TableCell align='right'>{record.kg3.quantity}</TableCell>
                      <TableCell align='right'>{record.kg3.returned}</TableCell>
                      <TableCell align='right'>{record.kg3.sold}</TableCell>
                      <TableCell align='right'>
                      <form>
                        <input type='number' placeholder='Add stock' className=' outline-none shadow-md px-1 py-1' required />
                        <button type='submit' className=' bg-blue-500 px-3 py-1 font-bold text-blue-950'>Add</button>
                      </form>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>12(Kg)</TableCell>
                      <TableCell align='right'>{record.kg12.quantity}</TableCell>
                      <TableCell align='right'>{record.kg12.returned}</TableCell>
                      <TableCell align='right'>{record.kg12.sold}</TableCell>
                      <TableCell align='right'>
                      <form>
                        <input type='number' placeholder='Add stock' className=' outline-none shadow-md px-1 py-1' required />
                        <button type='submit' className=' bg-blue-500 px-3 py-1 font-bold text-blue-950'>Add</button>
                      </form>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>24(Kg)</TableCell>
                      <TableCell align='right'>{record.kg24.quantity}</TableCell>
                      <TableCell align='right'>{record.kg24.returned}</TableCell>
                      <TableCell align='right'>{record.kg24.sold}</TableCell>
                      <TableCell align='right'>
                      <form>
                        <input type='number' placeholder='Add stock' className=' outline-none shadow-md px-1 py-1' required />
                        <button type='submit' className=' bg-blue-500 px-3 py-1 font-bold text-blue-950'>Add</button>
                      </form>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </div>
  )
}

export default AddProduct