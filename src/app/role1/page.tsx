

'use client';
import { Typography, Grid, Box, Table, TableHead, TableRow, TableCell, Chip, TableBody, Toolbar, styled, IconButton, Stack, Button, TextField, AppBar } from '@mui/material';

import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hook';
// import { getAllStudentListAsync, getStudentList, getStudentListAsync } from '@/redux/slices/accountStudentSlice';
import Link from 'next/link';
import { getAllStudentListAsync, getStudentList } from '@/redux/slices/accountStudentSlice';


const AccountStudent = () => {
    let stt = 0;
    const assignments: any[] = useAppSelector(getStudentList)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllStudentListAsync());
    console.log("hello", assignments)
        
    }, []);
// const API_URL = process.env.NEXT_PUBLIC_API_URL;
    return (

            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
{/* {API_URL} */}
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Table
                            aria-label="simple table"
                            sx={{
                                whiteSpace: "nowrap",
                                mt: 2
                            }}
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            STT
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            Identity
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            Name
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            Birthday
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            Gender
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            Ethnic
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            Status
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            Action
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {assignments.map((asm) => {
                                    stt += 1;
                                    return (
                                        <TableRow key={stt}>
                                            <TableCell>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    {stt}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    {asm.student_id}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Box>
                                                        <Typography variant="subtitle2" fontWeight={600}>
                                                            {asm.name}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    {asm.birthday}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    {asm.gender == 1 ? "Nữ" : "Nam"}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                        textOverflow: "ellipsis",
                                                        overflow: "hidden",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    {asm.ethnic}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>

                                                {asm.status == 1 ? <Chip
                                                    sx={{
                                                        px: "4px",
                                                        backgroundColor: "secondary.main",
                                                        color: "#fff",
                                                    }}
                                                    size="small"
                                                    label="Hiện còn học"
                                                ></Chip> : <Chip
                                                    sx={{
                                                        px: "4px",
                                                        backgroundColor: "error.main",
                                                        color: "#fff",
                                                    }}
                                                    size="small"
                                                    label="Không còn học"
                                                ></Chip>}
                                            </TableCell>
                                            <TableCell>
                                                <Link href="#">
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </Box>
    )
};


export default AccountStudent;






// 'use client'
// import Image from 'next/image'
// import styles from './page.module.css'
// import {useAuthorization} from "@/hocs/useAuthorization";
// import dotenv from 'dotenv';

// // dotenv.load();
// export default function Home() {
//   // useAuthorization('admin');
// const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;
//   return (
//     <main className='bg-light flex-grow-1'>
//       <h1>{API_ENDPOINT}</h1>
      
//       {/* <p className="d-inline-flex gap-1">
//         <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
//           Link with href
//         </a>
//         <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
//           Button with data-bs-target
//         </button>
//       </p>
//       <div className="collapse" id="collapseExample">
//         <div className="card card-body">
//           Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
//         </div>
//       </div> */}
//     </main>
//   )
// }
