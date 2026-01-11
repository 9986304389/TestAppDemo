import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import XLSX from 'xlsx';
import "./style.css";
import Select from "react-select";
import Button from '@mui/material/Button';



export default function SelectAutoWidth(props) {
    // React state to manage selected options
    const [selectedOptions, setSelectedOptions] = React.useState(null);
    const [SearchTerm_year, SetSearchTerm_year] = useState('2024');
    const [SearchTerm_year_1, SetSearchTerm_year_1] = useState('');
    const [Dataoptions, setDataoptions] = useState([]);


    const optionList = [

       
  { value: "Day 1,01-Jan,Matthew 1-3", label: "Day 1,01-Jan,Matthew 1-3" },
  { value: "Day 2,02-Jan,Matthew 4-6", label: "Day 2,02-Jan,Matthew 4-6" },
  { value: "Day 3,03-Jan,Matthew 7-9", label: "Day 3,03-Jan,Matthew 7-9" },
  { value: "Day 4,04-Jan,Matthew 10-12", label: "Day 4,04-Jan,Matthew 10-12" },
  { value: "Day 5,05-Jan,Matthew 13-15", label: "Day 5,05-Jan,Matthew 13-15" },
  { value: "Day 6,06-Jan,Matthew 16-18", label: "Day 6,06-Jan,Matthew 16-18" },
  { value: "Day 7,07-Jan,Matthew 19-21", label: "Day 7,07-Jan,Matthew 19-21" },
  { value: "Day 8,08-Jan,Matthew 22-24", label: "Day 8,08-Jan,Matthew 22-24" },
  { value: "Day 9,09-Jan,Matthew 25-26", label: "Day 9,09-Jan,Matthew 25-26" },
  { value: "Day 10,10-Jan,Matthew 27-28", label: "Day 10,10-Jan,Matthew 27-28" },
  { value: "Day 11,11-Jan,Mark 1-3", label: "Day 11,11-Jan,Mark 1-3" },
  { value: "Day 12,12-Jan,Mark 4-6", label: "Day 12,12-Jan,Mark 4-6" },
  { value: "Day 13,13-Jan,Mark 7-9", label: "Day 13,13-Jan,Mark 7-9" },
  { value: "Day 14,14-Jan,Mark 10-12", label: "Day 14,14-Jan,Mark 10-12" },
  { value: "Day 15,15-Jan,Mark 13-14", label: "Day 15,15-Jan,Mark 13-14" },
  { value: "Day 16,16-Jan,Mark 15-16", label: "Day 16,16-Jan,Mark 15-16" },
  { value: "Day 17,17-Jan,Luke 1-2", label: "Day 17,17-Jan,Luke 1-2" },
  { value: "Day 18,18-Jan,Luke 3-4", label: "Day 18,18-Jan,Luke 3-4" },
  { value: "Day 19,19-Jan,Luke 5-6", label: "Day 19,19-Jan,Luke 5-6" },
  { value: "Day 20,20-Jan,Luke 7-9", label: "Day 20,20-Jan,Luke 7-9" },
  { value: "Day 21,21-Jan,Luke 10-12", label: "Day 21,21-Jan,Luke 10-12" },
  { value: "Day 22,22-Jan,Luke 13-15", label: "Day 22,22-Jan,Luke 13-15" },
  { value: "Day 23,23-Jan,Luke 16-18", label: "Day 23,23-Jan,Luke 16-18" },
  { value: "Day 24,24-Jan,Luke 19-21", label: "Day 24,24-Jan,Luke 19-21" },
  { value: "Day 25,25-Jan,Luke 22-24", label: "Day 25,25-Jan,Luke 22-24" },
  { value: "Day 26,26-Jan,John 1-3", label: "Day 26,26-Jan,John 1-3" },
  { value: "Day 27,27-Jan,John 4-5", label: "Day 27,27-Jan,John 4-5" },
  { value: "Day 28,28-Jan,John 6-7", label: "Day 28,28-Jan,John 6-7" },
  { value: "Day 29,29-Jan,John 8-9", label: "Day 29,29-Jan,John 8-9" },
  { value: "Day 30,30-Jan,John 10-12", label: "Day 30,30-Jan,John 10-12" },

  { value: "Day 31,31-Jan,John 13-16", label: "Day 31,31-Jan,John 13-16" },
  { value: "Day 32,01-Feb,John 17-21", label: "Day 32,01-Feb,John 17-21" },
  { value: "Day 33,02-Feb,Acts 1-3", label: "Day 33,02-Feb,Acts 1-3" },
  { value: "Day 34,03-Feb,Acts 4-6", label: "Day 34,03-Feb,Acts 4-6" },
  { value: "Day 35,04-Feb,Acts 7-9", label: "Day 35,04-Feb,Acts 7-9" },
  { value: "Day 36,05-Feb,Acts 10-12", label: "Day 36,05-Feb,Acts 10-12" },
  { value: "Day 37,06-Feb,Acts 13-16", label: "Day 37,06-Feb,Acts 13-16" },
  { value: "Day 38,07-Feb,Acts 17-20", label: "Day 38,07-Feb,Acts 17-20" },
  { value: "Day 39,08-Feb,Acts 21-24", label: "Day 39,08-Feb,Acts 21-24" },
  { value: "Day 40,09-Feb,Acts 25-28", label: "Day 40,09-Feb,Acts 25-28" },

  { value: "Day 41,10-Feb,Romans 1-3", label: "Day 41,10-Feb,Romans 1-3" },
  { value: "Day 42,11-Feb,Romans 4-6", label: "Day 42,11-Feb,Romans 4-6" },
  { value: "Day 43,12-Feb,Romans 7-9", label: "Day 43,12-Feb,Romans 7-9" },
  { value: "Day 44,13-Feb,Romans 10-12", label: "Day 44,13-Feb,Romans 10-12" },
  { value: "Day 45,14-Feb,Romans 13-16", label: "Day 45,14-Feb,Romans 13-16" },

  { value: "Day 46,15-Feb,1 Corinthians 1-3", label: "Day 46,15-Feb,1 Corinthians 1-3" },
  { value: "Day 47,16-Feb,1 Corinthians 4-6", label: "Day 47,16-Feb,1 Corinthians 4-6" },
  { value: "Day 48,17-Feb,1 Corinthians 7-9", label: "Day 48,17-Feb,1 Corinthians 7-9" },
  { value: "Day 49,18-Feb,1 Corinthians 10-12", label: "Day 49,18-Feb,1 Corinthians 10-12" },
  { value: "Day 50,19-Feb,1 Corinthians 13-16", label: "Day 50,19-Feb,1 Corinthians 13-16" },


        { value: "Day 356,21-Dec,Holiday /Meditate", label: "Day 356,21-Dec,Holiday /Meditate" },
        { value: "Day 357,22-Dec,Holiday /Meditate", label: "Day 357,22-Dec,Holiday /Meditate" },
        { value: "Day 358,23-Dec,Holiday /Meditate", label: "Day 358,23-Dec,Holiday /Meditate" },
        { value: "Day 359,24-Dec,Holiday /Meditate", label: "Day 359,24-Dec,Holiday /Meditate" },
        { value: "Day 360,25-Dec,Holiday /Meditate", label: "Day 360,25-Dec,Holiday /Meditate" },
        { value: "Day 361,26-Dec,Holiday /Meditate", label: "Day 361,26-Dec,Holiday /Meditate" },
        { value: "Day 362,27-Dec,Holiday /Meditate", label: "Day 362,27-Dec,Holiday /Meditate" },
        { value: "Day 363,28-Dec,Holiday /Meditate", label: "Day 363,28-Dec,Holiday /Meditate" },
        { value: "Day 364,29-Dec,Holiday /Meditate", label: "Day 364,29-Dec,Holiday /Meditate" },
        { value: "Day 365,30-Dec,Holiday /Meditate", label: "Day 365,30-Dec,Holiday /Meditate" },
        { value: "Day 366,31-Dec,Holiday /Meditate", label: "Day 366,31-Dec,Holiday /Meditate" },

    ]



    const optionList_year = [
        { value: '2026', label: '2026' },

    ];
    //Function triggered on selection
    function handleSelect(data) {
        setSelectedOptions(data);
        console.log(data.value)
        const selectedValue = data.value;

        // Add the year to the selected value (before the existing string)
        const formattedValue = `${selectedValue},${SearchTerm_year_1}`;

        // Log the formatted value
        console.log("Formatted Value:", formattedValue);
        props.sendDataToParent(formattedValue)
    }

    const clearSelection = () => {
        setSelectedOptions(null);
    }

    function select_year(e) {
        SetSearchTerm_year(e)
        SetSearchTerm_year_1(e.value)
    }

    // Update Dataoptions based on SearchTerm_year_1 using useEffect
    useEffect(() => {
        if (SearchTerm_year_1 === "2026") {
            setDataoptions(optionList);
        
        } else {
            setDataoptions([]); // Clear options if year is not 2024 or 2025
        }
    }, [SearchTerm_year_1]); // Only re-run effect when SearchTerm_year_1 changes

    return (
        <div className="app">

            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <div style={{ width: '56%' }}>
                    <FormControl sx={{ minWidth: 10 }} size="large">
                        <Select
                            options={optionList_year}
                            placeholder="select Year"
                            value={SearchTerm_year}
                            onChange={select_year}
                            isSearchable={true}
                        />
                    </FormControl>
                </div>
                <div className="dropdown-container" style={{ width: '100%' }}>
                    <Select
                        options={Dataoptions}
                        placeholder="what you have read today"
                        value={selectedOptions}
                        onChange={handleSelect}
                        isSearchable={true}

                    />
                    {selectedOptions && (
                        <Button
                            onClick={clearSelection}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3, mb: 2, bgcolor: '#660066',
                                width: 100, fontSize: 12,
                                '&:hover': {
                                    bgcolor: '#660066',
                                },
                            }}
                        >
                            Clear Selection
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}