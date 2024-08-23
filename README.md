
# CSV Processing Script

This Node.js script processes a CSV file containing stock market data, reformatting specific fields, and then outputs the processed data to a new CSV file.

## Features

- **Symbol Reformatting:** Removes the 'NASDAQ:' prefix from the `Symbol` field.
- **Date Reformatting:** Converts the date in the `Placing Time` field to the `YYYY/MM/DD` format.
- **Time Extraction:** Extracts and formats the time from the `Placing Time` field in `HH:mm:ss` format.
- **Custom CSV Output:** Outputs the processed data in a new CSV file with columns reordered to `Time`, `Date`, `Quantity`, `Symbol`, `Side`, and `Price`.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or later)
- NPM (comes with Node.js)

## Installation

1. Clone the repository or download the script.
2. Navigate to the script's directory in your terminal.
3. Install the necessary dependencies:

   ```bash
   npm install
   ```

   This will install the `csv-parser`, `moment`, and `json2csv` modules.

## Usage

To run the script, use the following command:

```bash
node index.js <inputFilePath> <outputFilePath>
```

- `<inputFilePath>`: Path to the input CSV file.
- `<outputFilePath>`: Path to the output CSV file where the processed data will be saved.

### Example

```bash
node index.js data/input.csv data/output.csv
```

This command will process the `input.csv` file located in the `data` folder and save the processed data to `output.csv` in the same folder.

## Error Handling

- The script checks if the input file exists before processing. If the file is not found, it will output an error message and terminate.
- If the input and output file paths are not provided, the script will display an error message and the correct usage format.

## License

This script is open-source and available under the [MIT License](LICENSE).

## Contributing

If you'd like to contribute to this project, feel free to submit a pull request or open an issue on the GitHub repository.

## Acknowledgements

- [csv-parser](https://www.npmjs.com/package/csv-parser) - Used for parsing the CSV file.
- [moment](https://www.npmjs.com/package/moment) - Used for date and time manipulation.
- [json2csv](https://www.npmjs.com/package/json2csv) - Used for converting JSON data back to CSV format.
