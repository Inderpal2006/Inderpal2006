const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Replace 'YOUR_API_KEY' with your actual API key from a currency conversion service
const API_KEY = 'YOUR_API_KEY';
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

app.post('/convert', async (req, res) => {
    const { amount, fromCurrency, toCurrency } = req.body;

    try {
        const response = await axios.get(`${API_URL}/${fromCurrency}`);
        const rates = response.data.conversion_rates;
        const conversionRate = rates[toCurrency];

        const convertedAmount = (amount * conversionRate).toFixed(2);

        res.json({ convertedAmount });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching conversion rate.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});