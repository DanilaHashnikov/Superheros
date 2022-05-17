import React from 'react';

import { Pagination } from '@mui/material';

const ControlledPagination = () => {
    return (
        <>
            <Pagination page={1} count={90} sx={{display: "flex", justifyContent: 'center', mb: 3}} color="primary" /> 
        </>
    );
};

export default ControlledPagination;