const fs = require('fs');
const csv = require('csv-parser');
const moment = require('moment');
const { parse } = require('json2csv');

// Function to process the CSV file
function processCsv(inputFilePath, outputFilePath) {

    const results = [];
     // Check if the input file exists before processing
    if (!fs.existsSync(inputFilePath)) {
        console.error(`Input file "${inputFilePath}" does not exist.`);
        process.exit(1);
    }
    fs.createReadStream(inputFilePath)
        .pipe(csv())
        .on('data', (data) => {
            // Reformat the symbol by removing 'NASDAQ:'
            data.Symbol = data.Symbol.replace('NASDAQ:', '');

            // Reformat the date to use '/' as the delimiter if it's using '-'
            const date = moment(data['Placing Time']).format('YYYY/MM/DD');
            // get time 
            const time = moment(data['Placing Time']).format('HH:mm:ss');

            // Push the reordered data into the results array
            results.push({
                Time: time,
                Date: date,
                Quantity: data.Qty,
                Symbol: data.Symbol,
                Side: data.Side,
                Price: data.Price
            });
        })
        .on('end', () => {
            // Convert the results back to CSV
            const csvData = parse(results, { fields: ['Time', 'Date', 'Quantity', 'Symbol', 'Side', 'Price'] });

            // Write the output to the specified file
            fs.writeFileSync(outputFilePath, csvData);
            console.log(`File with ${results.length} lines processed and saved to ${outputFilePath}`);
        });
}

// Get command-line arguments for input and output file paths
const [, , inputFilePath, outputFilePath] = process.argv;

if (!inputFilePath || !outputFilePath) {
    console.error('Please provide both input and output file paths as arguments.');
    console.error('Usage: node index.js <inputFilePath> <outputFilePath>');
    process.exit(1);
}

processCsv(inputFilePath, outputFilePath);