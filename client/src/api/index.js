import axios from 'axios';
import React from 'react';

export default axios.create({
    baseURL: 'localhost:3000'
});

