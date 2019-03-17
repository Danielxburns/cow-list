import express from 'express';
// const express = require('express');

const app = express();

app.listen(300, () =>
  console.log('listening on port 3000!'),
);