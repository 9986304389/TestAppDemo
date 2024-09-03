import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import XLSX from 'xlsx';
import "./style.css";
import Select from "react-select";
import Button from '@mui/material/Button';
// export default function SelectAutoWidth(props) {
//     const [age, setAge] = React.useState('');

//     // const handleChange = (event) => {
//     //     setAge(event.target.value);
//     //     props.sendDataToParent(event.target.value);
//     // };


//     return (
//         <div>
//             <FormControl sx={{ m: 0, minWidth: '100%' }}>
//                 {/* <InputLabel id="demo-simple-select-autowidth-label">what you have read today</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-autowidth-label"
//                     id="demo-simple-select-autowidth"
//                     value={age}
//                     onChange={handleChange}
//                     autoWidth
//                     label="what you have read today"
//                 >
//                     <MenuItem value="">
//                         <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={'Day 1,01-Jan,Matthew 1-3'}>Day 1,01-Jan,Matthew 1-3</MenuItem>
//                     <MenuItem value={'Day 2,02-Jan,Matthew 4-6'}>Day 2,02-Jan,Matthew 4-6</MenuItem>
//                     <MenuItem value={'Day 3,03-Jan,Matthew 7-9'}>Day 3,03-Jan,Matthew 7-9</MenuItem>
//                     <MenuItem value={'Day 4,04-Jan,Matthew 10-12'}>Day 4,04-Jan,Matthew 10-12</MenuItem>
//                     <MenuItem value={'Day 5,05-Jan,Matthew 13-15'}>Day 5,05-Jan,Matthew 13-15</MenuItem>
//                     <MenuItem value={'Day 6,06-Jan,Matthew 16-18'}>Day 6,06-Jan,Matthew 16-18</MenuItem>
//                     <MenuItem value={'Day 7,07-Jan,Matthew 19-21'}>Day 7,07-Jan,Matthew 19-21</MenuItem>
//                     <MenuItem value={'Day 8,08-Jan,Matthew 22-24'}>Day 8,08-Jan,Matthew 22-24</MenuItem>
//                     <MenuItem value={'Day 9,09-Jan,Matthew 25-28'}>Day 9,09-Jan,Matthew 25-28</MenuItem>
//                     <MenuItem value={'Day 10,10-Jan,Mark 1-3'}>Day 10,10-Jan,Mark 1-3</MenuItem>
//                     <MenuItem value={'Day 11,11-Jan,Mark 4-6'}>Day 11,11-Jan,Mark 4-6</MenuItem>
//                     <MenuItem value={'Day 12,12-Jan,Mark 7-9'}>Day 12,12-Jan,Mark 7-9</MenuItem>
//                     <MenuItem value={'Day 13,13-Jan,Mark 10-12'}>Day 13,13-Jan,Mark 10-12</MenuItem>
//                     <MenuItem value={'Day 14,14-Jan,Mark 13-16'}>Day 14,14-Jan,Mark 13-16</MenuItem>
//                     <MenuItem value={'Day 15,15-Jan,Luke 1-3'}>Day 15,15-Jan,Luke 1-3</MenuItem>
//                     <MenuItem value={'Day 16,16-Jan,Luke 4-6'}>Day 16,16-Jan,Luke 4-6</MenuItem>
//                     <MenuItem value={'Day 17,17-Jan,Luke 7-9'}>Day 17,17-Jan,Luke 7-9</MenuItem>
//                     <MenuItem value={'Day 18,18-Jan,Luke 10-12'}>Day 18,18-Jan,Luke 10-12</MenuItem>
//                     <MenuItem value={'Day 19,19-Jan,Luke 13-15'}>Day 19,19-Jan,Luke 13-15</MenuItem>
//                     <MenuItem value={'Day 20,20-Jan,Luke 16-18'}>Day 20,20-Jan,Luke 16-18</MenuItem>
//                     <MenuItem value={'Day 21,21-Jan,Luke 19-21'}>Day 21,21-Jan,Luke 19-21</MenuItem>
//                     <MenuItem value={'Day 22,22-Jan,Luke 22-24'}>Day 22,22-Jan,Luke 22-24</MenuItem>
//                     <MenuItem value={'Day 23,23-Jan,John 1-3'}>Day 23,23-Jan,John 1-3</MenuItem>
//                     <MenuItem value={'Day 24,24-Jan,John 4-6'}>Day 24,24-Jan,John 4-6</MenuItem>
//                     <MenuItem value={'Day 25,25-Jan,John 7-9'}>Day 25,25-Jan,John 7-9</MenuItem>
//                     <MenuItem value={'Day 26,26-Jan,John 10-12'}>Day 26,26-Jan,John 10-12</MenuItem>
//                     <MenuItem value={'Day 27,27-Jan,John 13-15'}>Day 27,27-Jan,John 13-15</MenuItem>
//                     <MenuItem value={'Day 28,28-Jan,John 16-18'}>Day 28,28-Jan,John 16-18</MenuItem>
//                     <MenuItem value={'Day 29,29-Jan,John 19-21'}>Day 29,29-Jan,John 19-21</MenuItem>
//                     <MenuItem value={'Day 30,30-Jan,Acts 1-3'}>Day 30,30-Jan,Acts 1-3</MenuItem>
//                     <MenuItem value={'Day 31,31-Jan,Acts 4-6'}>Day 31,31-Jan,Acts 4-6</MenuItem>
//                     <MenuItem value={'Day 32,01-Feb,Acts 7-9'}>Day 32,01-Feb,Acts 7-9</MenuItem>
//                     <MenuItem value={'Day 33,02-Feb,Acts 10-12'}>Day 33,02-Feb,Acts 10-12</MenuItem>
//                     <MenuItem value={'Day 34,03-Feb,Acts 13-15'}>Day 34,03-Feb,Acts 13-15</MenuItem>
//                     <MenuItem value={'Day 35,04-Feb,Acts 16-18'}>Day 35,04-Feb,Acts 16-18</MenuItem>
//                     <MenuItem value={'Day 36,05-Feb,Acts 19-21'}>Day 36,05-Feb,Acts 19-21</MenuItem>
//                     <MenuItem value={'Day 37,06-Feb,Acts 22-24'}>Day 37,06-Feb,Acts 22-24</MenuItem>
//                     <MenuItem value={'Day 38,07-Feb,Acts 25-28'}>Day 38,07-Feb,Acts 25-28</MenuItem>
//                     <MenuItem value={'Day 39,08-Feb,Romans 1-3'}>Day 39,08-Feb,Romans 1-3</MenuItem>
//                     <MenuItem value={'Day 40,09-Feb,Romans 4-6'}>Day 40,09-Feb,Romans 4-6</MenuItem>
//                     <MenuItem value={'Day 41,10-Feb,Romans 7-9'}>Day 41,10-Feb,Romans 7-9</MenuItem>
//                     <MenuItem value={'Day 42,11-Feb,Romans 10-12'}>Day 42,11-Feb,Romans 10-12</MenuItem>
//                     <MenuItem value={'Day 43,12-Feb,Romans 13-16'}>Day 43,12-Feb,Romans 13-16</MenuItem>
//                     <MenuItem value={'Day 44,13-Feb,1 Corinthians 1-3'}>Day 44,13-Feb,1 Corinthians 1-3</MenuItem>
//                     <MenuItem value={'Day 45,14-Feb,1 Corinthians 4-6'}>Day 45,14-Feb,1 Corinthians 4-6</MenuItem>
//                     <MenuItem value={'Day 46,15-Feb,1 Corinthians 7-9'}>Day 46,15-Feb,1 Corinthians 7-9</MenuItem>
//                     <MenuItem value={'Day 47,16-Feb,1 Corinthians 10-12'}>Day 47,16-Feb,1 Corinthians 10-12</MenuItem>
//                     <MenuItem value={'Day 48,17-Feb,1 Corinthians 13-16'}>Day 48,17-Feb,1 Corinthians 13-16</MenuItem>
//                     <MenuItem value={'Day 49,18-Feb,2 Corinthians 1-3'}>Day 49,18-Feb,2 Corinthians 1-3</MenuItem>
//                     <MenuItem value={'Day 50,19-Feb,2 Corinthians 4-6'}>Day 50,19-Feb,2 Corinthians 4-6</MenuItem>
//                     <MenuItem value={'Day 51,20-Feb,2 Corinthians 7-9'}>Day 51,20-Feb,2 Corinthians 7-9</MenuItem>
//                     <MenuItem value={'Day 52,21-Feb,2 Corinthians 10-13'}>Day 52,21-Feb,2 Corinthians 10-13</MenuItem>
//                     <MenuItem value={'Day 53,22-Feb,Galatians 1-3'}>Day 53,22-Feb,Galatians 1-3</MenuItem>
//                     <MenuItem value={'Day 54,23-Feb,Galatians 4-6'}>Day 54,23-Feb,Galatians 4-6</MenuItem>
//                     <MenuItem value={'Day 55,24-Feb,Ephesians 1-3'}>Day 55,24-Feb,Ephesians 1-3</MenuItem>
//                     <MenuItem value={'Day 56,25-Feb,Ephesians 4-6'}>Day 56,25-Feb,Ephesians 4-6</MenuItem>
//                     <MenuItem value={'Day 57,26-Feb,Philippians 1-4'}>Day 57,26-Feb,Philippians 1-4</MenuItem>
//                     <MenuItem value={'Day 58,27-Feb,Colossians 1-4'}>Day 58,27-Feb,Colossians 1-4</MenuItem>
//                     <MenuItem value={'Day 59,28-Feb,1 Thessalonians 1-3'}>Day 59,28-Feb,1 Thessalonians 1-3</MenuItem>
//                     <MenuItem value={'Day 60,29-Feb,1 Thessalonians 4-5'}>Day 60,29-Feb,1 Thessalonians 4-5</MenuItem>
//                     <MenuItem value={'Day 61,01-Mar,2 Thessalonians 1-3'}>Day 61,01-Mar,2 Thessalonians 1-3</MenuItem>
//                     <MenuItem value={'Day 62,02-Mar,1 Timothy 1-3'}>Day 62,02-Mar,1 Timothy 1-3</MenuItem>
//                     <MenuItem value={'Day 63,03-Mar,1 Timothy 4-6'}>Day 63,03-Mar,1 Timothy 4-6</MenuItem>
//                     <MenuItem value={'Day 64,04-Mar,2 Timothy 1-4'}>Day 64,04-Mar,2 Timothy 1-4</MenuItem>
//                     <MenuItem value={'Day 65,05-Mar,Titus 1-3'}>Day 65,05-Mar,Titus 1-3</MenuItem>
//                     <MenuItem value={'Day 66,06-Mar,Philemon 1'}>Day 66,06-Mar,Philemon 1</MenuItem>
//                     <MenuItem value={'Day 67,07-Mar,Hebrews 1-3'}>Day 67,07-Mar,Hebrews 1-3</MenuItem>
//                     <MenuItem value={'Day 68,08-Mar,Hebrews 4-6'}>Day 68,08-Mar,Hebrews 4-6</MenuItem>
//                     <MenuItem value={'Day 69,09-Mar,Hebrews 7-9'}>Day 69,09-Mar,Hebrews 7-9</MenuItem>
//                     <MenuItem value={'Day 70,10-Mar,Hebrews 10-13'}>Day 70,10-Mar,Hebrews 10-13</MenuItem>
//                     <MenuItem value={'Day 71,11-Mar,James 1-3'}>Day 71,11-Mar,James 1-3</MenuItem>
//                     <MenuItem value={'Day 72,12-Mar,James 4-5'}>Day 72,12-Mar,James 4-5</MenuItem>
//                     <MenuItem value={'Day 73,13-Mar,1 Peter 1-3'}>Day 73,13-Mar,1 Peter 1-3</MenuItem>
//                     <MenuItem value={'Day 74,14-Mar,1 Peter 4-5'}>Day 74,14-Mar,1 Peter 4-5</MenuItem>
//                     <MenuItem value={'Day 75,15-Mar,2 Peter 1-3'}>Day 75,15-Mar,2 Peter 1-3</MenuItem>
//                     <MenuItem value={'Day 76,16-Mar,1 John 1-3'}>Day 76,16-Mar,1 John 1-3</MenuItem>
//                     <MenuItem value={'Day 77,17-Mar,1 John 4-5'}>Day 77,17-Mar,1 John 4-5</MenuItem>
//                     <MenuItem value={'Day 78,18-Mar,2 John 1, 3 John 1, Jude 1'}>Day 78,18-Mar,2 John 1, 3 John 1, Jude 1</MenuItem>
//                     <MenuItem value={'Day 79,19-Mar,Revelation 1-3'}>Day 79,19-Mar,Revelation 1-3</MenuItem>
//                     <MenuItem value={'Day 80,20-Mar,Revelation 4-6'}>Day 80,20-Mar,Revelation 4-6</MenuItem>
//                     <MenuItem value={'Day 81,21-Mar,Revelation 7-9'}>Day 81,21-Mar,Revelation 7-9</MenuItem>
//                     <MenuItem value={'Day 82,22-Mar,Revelation 10-12'}>Day 82,22-Mar,Revelation 10-12</MenuItem>
//                     <MenuItem value={'Day 83,23-Mar,Revelation 13-15'}>Day 83,23-Mar,Revelation 13-15</MenuItem>
//                     <MenuItem value={'Day 84,24-Mar,Revelation 16-18'}>Day 84,24-Mar,Revelation 16-18</MenuItem>
//                     <MenuItem value={'Day 85,25-Mar,Revelation 19-22'}>Day 85,25-Mar,Revelation 19-22</MenuItem>
//                     <MenuItem value={'Day 86,26-Mar,Genesis 1-3'}>Day 86,26-Mar,Genesis 1-3</MenuItem>
//                     <MenuItem value={'Day 87,27-Mar,Genesis 4-6'}>Day 87,27-Mar,Genesis 4-6</MenuItem>
//                     <MenuItem value={'Day 88,28-Mar,Genesis 7-9'}>Day 88,28-Mar,Genesis 7-9</MenuItem>
//                     <MenuItem value={'Day 89,29-Mar,Genesis 10-12'}>Day 89,29-Mar,Genesis 10-12</MenuItem>
//                     <MenuItem value={'Day 90,30-Mar,Genesis 13-15'}>Day 90,30-Mar,Genesis 13-15</MenuItem>
//                     <MenuItem value={'Day 91,31-Mar,Genesis 16-18'}>Day 91,31-Mar,Genesis 16-18</MenuItem>
//                     <MenuItem value={'Day 92,01-Apr,Genesis 19-21'}>Day 92,01-Apr,Genesis 19-21</MenuItem>
//                     <MenuItem value={'Day 93,02-Apr,Genesis 22-24'}>Day 93,02-Apr,Genesis 22-24</MenuItem>
//                     <MenuItem value={'Day 94,03-Apr,Genesis 25-27'}>Day 94,03-Apr,Genesis 25-27</MenuItem>
//                     <MenuItem value={'Day 95,04-Apr,Genesis 28-30'}>Day 95,04-Apr,Genesis 28-30</MenuItem>
//                     <MenuItem value={'Day 96,05-Apr,Genesis 31-33'}>Day 96,05-Apr,Genesis 31-33</MenuItem>
//                     <MenuItem value={'Day 97,06-Apr,Genesis 34-36'}>Day 97,06-Apr,Genesis 34-36</MenuItem>
//                     <MenuItem value={'Day 98,07-Apr,Genesis 37-39'}>Day 98,07-Apr,Genesis 37-39</MenuItem>
//                     <MenuItem value={'Day 99,08-Apr,Genesis 40-42'}>Day 99,08-Apr,Genesis 40-42</MenuItem>
//                     <MenuItem value={'Day 100,09-Apr,Genesis 43-45'}>Day 100,09-Apr,Genesis 43-45</MenuItem>
//                     <MenuItem value={'Day 101,10-Apr,Genesis 46-50'}>Day 101,10-Apr,Genesis 46-50</MenuItem>
//                     <MenuItem value={'Day 102,11-Apr,Exodus 1-3'}>Day 102,11-Apr,Exodus 1-3</MenuItem>
//                     <MenuItem value={'Day 103,12-Apr,Exodus 4-6'}>Day 103,12-Apr,Exodus 4-6</MenuItem>
//                     <MenuItem value={'Day 104,13-Apr,Exodus 7-9'}>Day 104,13-Apr,Exodus 7-9</MenuItem>
//                     <MenuItem value={'Day 105,14-Apr,Exodus 10-12'}>Day 105,14-Apr,Exodus 10-12</MenuItem>
//                     <MenuItem value={'Day 106,15-Apr,Exodus 13-15'}>Day 106,15-Apr,Exodus 13-15</MenuItem>
//                     <MenuItem value={'Day 107,16-Apr,Exodus 16-18'}>Day 107,16-Apr,Exodus 16-18</MenuItem>
//                     <MenuItem value={'Day 108,17-Apr,Exodus 19-21'}>Day 108,17-Apr,Exodus 19-21</MenuItem>
//                     <MenuItem value={'Day 109,18-Apr,Exodus 22-24'}>Day 109,18-Apr,Exodus 22-24</MenuItem>
//                     <MenuItem value={'Day 110,19-Apr,Exodus 25-27'}>Day 110,19-Apr,Exodus 25-27</MenuItem>
//                     <MenuItem value={'Day 111,20-Apr,Exodus 28-30'}>Day 111,20-Apr,Exodus 28-30</MenuItem>
//                     <MenuItem value={'Day 112,21-Apr,Exodus 31-33'}>Day 112,21-Apr,Exodus 31-33</MenuItem>
//                     <MenuItem value={'Day 113,22-Apr,Exodus 34-36'}>Day 113,22-Apr,Exodus 34-36</MenuItem>
//                     <MenuItem value={'Day 114,23-Apr,Exodus 37-40'}>Day 114,23-Apr,Exodus 37-40</MenuItem>
//                     <MenuItem value={'Day 115,24-Apr,Leviticus 1-3'}>Day 115,24-Apr,Leviticus 1-3</MenuItem>
//                     <MenuItem value={'Day 116,25-Apr,Leviticus 4-6'}>Day 116,25-Apr,Leviticus 4-6</MenuItem>
//                     <MenuItem value={'Day 117,26-Apr,Leviticus 7-9'}>Day 117,26-Apr,Leviticus 7-9</MenuItem>
//                     <MenuItem value={'Day 118,27-Apr,Leviticus 10-12'}>Day 118,27-Apr,Leviticus 10-12</MenuItem>
//                     <MenuItem value={'Day 119,28-Apr,Leviticus 13-15'}>Day 119,28-Apr,Leviticus 13-15</MenuItem>
//                     <MenuItem value={'Day 120,29-Apr,Leviticus 16-18'}>Day 120,29-Apr,Leviticus 16-18</MenuItem>
//                     <MenuItem value={'Day 121,30-Apr,Leviticus 19-21'}>Day 121,30-Apr,Leviticus 19-21</MenuItem>
//                     <MenuItem value={'Day 122,01-May,Leviticus 22-24'}>Day 122,01-May,Leviticus 22-24</MenuItem>
//                     <MenuItem value={'Day 123,02-May,Leviticus 25-27'}>Day 123,02-May,Leviticus 25-27</MenuItem>
//                     <MenuItem value={'Day 124,03-May,Numbers 1-3'}>Day 124,03-May,Numbers 1-3</MenuItem>
//                     <MenuItem value={'Day 125,04-May,Numbers 4-6'}>Day 125,04-May,Numbers 4-6</MenuItem>
//                     <MenuItem value={'Day 126,05-May,Numbers 7-9'}>Day 126,05-May,Numbers 7-9</MenuItem>
//                     <MenuItem value={'Day 127,06-May,Numbers 10-12'}>Day 127,06-May,Numbers 10-12</MenuItem>
//                     <MenuItem value={'Day 128,07-May,Numbers 13-15'}>Day 128,07-May,Numbers 13-15</MenuItem>
//                     <MenuItem value={'Day 129,08-May,Numbers 16-18'}>Day 129,08-May,Numbers 16-18</MenuItem>
//                     <MenuItem value={'Day 130,09-May,Numbers 19-21'}>Day 130,09-May,Numbers 19-21</MenuItem>
//                     <MenuItem value={'Day 131,10-May,Numbers 22-24'}>Day 131,10-May,Numbers 22-24</MenuItem>
//                     <MenuItem value={'Day 132,11-May,Numbers 25-27'}>Day 132,11-May,Numbers 25-27</MenuItem>
//                     <MenuItem value={'Day 133,12-May,Numbers 28-30'}>Day 133,12-May,Numbers 28-30</MenuItem>
//                     <MenuItem value={'Day 134,13-May,Numbers 31-33'}>Day 134,13-May,Numbers 31-33</MenuItem>
//                     <MenuItem value={'Day 135,14-May,Numbers 34-36'}>Day 135,14-May,Numbers 34-36</MenuItem>
//                     <MenuItem value={'Day 136,15-May,Joshua 1-3'}>Day 136,15-May,Joshua 1-3</MenuItem>
//                     <MenuItem value={'Day 137,16-May,Joshua 4-6'}>Day 137,16-May,Joshua 4-6</MenuItem>
//                     <MenuItem value={'Day 138,17-May,Joshua 7-9'}>Day 138,17-May,Joshua 7-9</MenuItem>
//                     <MenuItem value={'Day 139,18-May,Joshua 10-12'}>Day 139,18-May,Joshua 10-12</MenuItem>
//                     <MenuItem value={'Day 140,19-May,Joshua 13-15'}>Day 140,19-May,Joshua 13-15</MenuItem>
//                     <MenuItem value={'Day 141,20-May,Joshua 16-18'}>Day 141,20-May,Joshua 16-18</MenuItem>
//                     <MenuItem value={'Day 142,21-May,Joshua 19-21'}>Day 142,21-May,Joshua 19-21</MenuItem>
//                     <MenuItem value={'Day 143,22-May,Joshua 22-24'}>Day 143,22-May,Joshua 22-24</MenuItem>
//                     <MenuItem value={'Day 144,23-May,Judges 1-3'}>Day 144,23-May,Judges 1-3</MenuItem>
//                     <MenuItem value={'Day 145,24-May,Judges 4-6'}>Day 145,24-May,Judges 4-6</MenuItem>
//                     <MenuItem value={'Day 146,25-May,Judges 7-9'}>Day 146,25-May,Judges 7-9</MenuItem>
//                     <MenuItem value={'Day 147,26-May,Judges 10-12'}>Day 147,26-May,Judges 10-12</MenuItem>
//                     <MenuItem value={'Day 148,27-May,Judges 13-15'}>Day 148,27-May,Judges 13-15</MenuItem>
//                     <MenuItem value={'Day 149,28-May,Judges 16-18'}>Day 149,28-May,Judges 16-18</MenuItem>
//                     <MenuItem value={'Day 150,29-May,Judges 19-21'}>Day 150,29-May,Judges 19-21</MenuItem>
//                     <MenuItem value={'Day 151,30-May,Ruth 1-4'}>Day 151,30-May,Ruth 1-4</MenuItem>
//                     <MenuItem value={'Day 152,31-May,1 Samuel 1-3'}>Day 152,31-May,1 Samuel 1-3</MenuItem>
//                     <MenuItem value={'Day 153,01-Jun,1 Samuel 4-6'}>Day 153,01-Jun,1 Samuel 4-6</MenuItem>
//                     <MenuItem value={'Day 154,02-Jun,1 Samuel 7-9'}>Day 154,02-Jun,1 Samuel 7-9</MenuItem>
//                     <MenuItem value={'Day 155,03-Jun,1 Samuel 10-12'}>Day 155,03-Jun,1 Samuel 10-12</MenuItem>
//                     <MenuItem value={'Day 156,04-Jun,1 Samuel 13-15'}>Day 156,04-Jun,1 Samuel 13-15</MenuItem>
//                     <MenuItem value={'Day 157,05-Jun,1 Samuel 16-18'}>Day 157,05-Jun,1 Samuel 16-18</MenuItem>
//                     <MenuItem value={'Day 158,06-Jun,1 Samuel 19-21'}>Day 158,06-Jun,1 Samuel 19-21</MenuItem>
//                     <MenuItem value={'Day 159,07-Jun,1 Samuel 22-24'}>Day 159,07-Jun,1 Samuel 22-24</MenuItem>
//                     <MenuItem value={'Day 160,08-Jun,1 Samuel 25-27'}>Day 160,08-Jun,1 Samuel 25-27</MenuItem>
//                     <MenuItem value={'Day 161,09-Jun,1 Samuel 28-31'}>Day 161,09-Jun,1 Samuel 28-31</MenuItem>
//                     <MenuItem value={'Day 162,10-Jun,2 Samuel 1-3'}>Day 162,10-Jun,2 Samuel 1-3</MenuItem>
//                     <MenuItem value={'Day 163,11-Jun,2 Samuel 4-6'}>Day 163,11-Jun,2 Samuel 4-6</MenuItem>
//                     <MenuItem value={'Day 164,12-Jun,2 Samuel 7-9'}>Day 164,12-Jun,2 Samuel 7-9</MenuItem>
//                     <MenuItem value={'Day 165,13-Jun,2 Samuel 10-12'}>Day 165,13-Jun,2 Samuel 10-12</MenuItem>
//                     <MenuItem value={'Day 166,14-Jun,2 Samuel 13-15'}>Day 166,14-Jun,2 Samuel 13-15</MenuItem>
//                     <MenuItem value={'Day 167,15-Jun,2 Samuel 16-18'}>Day 167,15-Jun,2 Samuel 16-18</MenuItem>
//                     <MenuItem value={'Day 168,16-Jun,2 Samuel 19-21'}>Day 168,16-Jun,2 Samuel 19-21</MenuItem>
//                     <MenuItem value={'Day 169,17-Jun,2 Samuel 22-24'}>Day 169,17-Jun,2 Samuel 22-24</MenuItem>
//                     <MenuItem value={'Day 170,18-Jun,1 Kings 1-3'}>Day 170,18-Jun,1 Kings 1-3</MenuItem>
//                     <MenuItem value={'Day 171,19-Jun,1 Kings 4-6'}>Day 171,19-Jun,1 Kings 4-6</MenuItem>
//                     <MenuItem value={'Day 172,20-Jun,1 Kings 7-9'}>Day 172,20-Jun,1 Kings 7-9</MenuItem>
//                     <MenuItem value={'Day 173,21-Jun,1 Kings 10-12'}>Day 173,21-Jun,1 Kings 10-12</MenuItem>
//                     <MenuItem value={'Day 174,22-Jun,1 Kings 13-15'}>Day 174,22-Jun,1 Kings 13-15</MenuItem>
//                     <MenuItem value={'Day 175,23-Jun,1 Kings 16-18'}>Day 175,23-Jun,1 Kings 16-18</MenuItem>
//                     <MenuItem value={'Day 176,24-Jun,1 Kings 19-22'}>Day 176,24-Jun,1 Kings 19-22</MenuItem>
//                     <MenuItem value={'Day 177,25-Jun,2 Kings 1-3'}>Day 177,25-Jun,2 Kings 1-3</MenuItem>
//                     <MenuItem value={'Day 178,26-Jun,2 Kings 4-6'}>Day 178,26-Jun,2 Kings 4-6</MenuItem>
//                     <MenuItem value={'Day 179,27-Jun,2 Kings 7-9'}>Day 179,27-Jun,2 Kings 7-9</MenuItem>
//                     <MenuItem value={'Day 180,28-Jun,2 Kings 10-12'}>Day 180,28-Jun,2 Kings 10-12</MenuItem>
//                     <MenuItem value={'Day 181,29-Jun,2 Kings 13-15'}>Day 181,29-Jun,2 Kings 13-15</MenuItem>
//                     <MenuItem value={'Day 182,30-Jun,2 Kings 16-18'}>Day 182,30-Jun,2 Kings 16-18</MenuItem>
//                     <MenuItem value={'Day 183,01-Jul,2 Kings 19-21'}>Day 183,01-Jul,2 Kings 19-21</MenuItem>
//                     <MenuItem value={'Day 184,02-Jul,2 Kings 22-25'}>Day 184,02-Jul,2 Kings 22-25</MenuItem>
//                     <MenuItem value={'Day 185,03-Jul,1 Chronicles 1-3'}>Day 185,03-Jul,1 Chronicles 1-3</MenuItem>
//                     <MenuItem value={'Day 186,04-Jul,1 Chronicles 4-6'}>Day 186,04-Jul,1 Chronicles 4-6</MenuItem>
//                     <MenuItem value={'Day 187,05-Jul,1 Chronicles 7-9'}>Day 187,05-Jul,1 Chronicles 7-9</MenuItem>
//                     <MenuItem value={'Day 188,06-Jul,1 Chronicles 10-12'}>Day 188,06-Jul,1 Chronicles 10-12</MenuItem>
//                     <MenuItem value={'Day 189,07-Jul,1 Chronicles 13-15'}>Day 189,07-Jul,1 Chronicles 13-15</MenuItem>
//                     <MenuItem value={'Day 190,08-Jul,1 Chronicles 16-18'}>Day 190,08-Jul,1 Chronicles 16-18</MenuItem>
//                     <MenuItem value={'Day 191,09-Jul,1 Chronicles 19-21'}>Day 191,09-Jul,1 Chronicles 19-21</MenuItem>
//                     <MenuItem value={'Day 192,10-Jul,1 Chronicles 22-24'}>Day 192,10-Jul,1 Chronicles 22-24</MenuItem>
//                     <MenuItem value={'Day 193,11-Jul,1 Chronicles 25-27'}>Day 193,11-Jul,1 Chronicles 25-27</MenuItem>
//                     <MenuItem value={'Day 194,12-Jul,1 Chronicles 28-29'}>Day 194,12-Jul,1 Chronicles 28-29</MenuItem>
//                     <MenuItem value={'Day 195,13-Jul,2 Chronicles 1-3'}>Day 195,13-Jul,2 Chronicles 1-3</MenuItem>
//                     <MenuItem value={'Day 196,14-Jul,2 Chronicles 4-6'}>Day 196,14-Jul,2 Chronicles 4-6</MenuItem>
//                     <MenuItem value={'Day 197,15-Jul,2 Chronicles 7-9'}>Day 197,15-Jul,2 Chronicles 7-9</MenuItem>
//                     <MenuItem value={'Day 198,16-Jul,2 Chronicles 10-12'}>Day 198,16-Jul,2 Chronicles 10-12</MenuItem>
//                     <MenuItem value={'Day 199,17-Jul,2 Chronicles 13-15'}>Day 199,17-Jul,2 Chronicles 13-15</MenuItem>
//                     <MenuItem value={'Day 200,18-Jul,2 Chronicles 16-18'}>Day 200,18-Jul,2 Chronicles 16-18</MenuItem>
//                     <MenuItem value={'Day 201,19-Jul,2 Chronicles 19-21'}>Day 201,19-Jul,2 Chronicles 19-21</MenuItem>
//                     <MenuItem value={'Day 202,20-Jul,2 Chronicles 22-24'}>Day 202,20-Jul,2 Chronicles 22-24</MenuItem>
//                     <MenuItem value={'Day 203,21-Jul,2 Chronicles 25-27'}>Day 203,21-Jul,2 Chronicles 25-27</MenuItem>
//                     <MenuItem value={'Day 204,22-Jul,2 Chronicles 28-30'}>Day 204,22-Jul,2 Chronicles 28-30</MenuItem>
//                     <MenuItem value={'Day 205,23-Jul,2 Chronicles 31-33'}>Day 205,23-Jul,2 Chronicles 31-33</MenuItem>
//                     <MenuItem value={'Day 206,24-Jul,2 Chronicles 34-36'}>Day 206,24-Jul,2 Chronicles 34-36</MenuItem>
//                     <MenuItem value={'Day 207,25-Jul,Ezra 1-3'}>Day 207,25-Jul,Ezra 1-3</MenuItem>
//                     <MenuItem value={'Day 208,26-Jul,Ezra 4-6'}>Day 208,26-Jul,Ezra 4-6</MenuItem>
//                     <MenuItem value={'Day 209,27-Jul,Ezra 7-10'}>Day 209,27-Jul,Ezra 7-10</MenuItem>
//                     <MenuItem value={'Day 210,28-Jul,Nehemiah 1-3'}>Day 210,28-Jul,Nehemiah 1-3</MenuItem>
//                     <MenuItem value={'Day 211,29-Jul,Nehemiah 4-6'}>Day 211,29-Jul,Nehemiah 4-6</MenuItem>
//                     <MenuItem value={'Day 212,30-Jul,Nehemiah 7-9'}>Day 212,30-Jul,Nehemiah 7-9</MenuItem>
//                     <MenuItem value={'Day 213,31-Jul,Nehemiah 10-13'}>Day 213,31-Jul,Nehemiah 10-13</MenuItem>
//                     <MenuItem value={'Day 214,01-Aug,Esther 1-3'}>Day 214,01-Aug,Esther 1-3</MenuItem>
//                     <MenuItem value={'Day 215,02-Aug,Esther 4-6'}>Day 215,02-Aug,Esther 4-6</MenuItem>
//                     <MenuItem value={'Day 216,03-Aug,Esther 7-10'}>Day 216,03-Aug,Esther 7-10</MenuItem>
//                     <MenuItem value={'Day 217,04-Aug,Job 1-3'}>Day 217,04-Aug,Job 1-3</MenuItem>
//                     <MenuItem value={'Day 218,05-Aug,Job 4-6'}>Day 218,05-Aug,Job 4-6</MenuItem>
//                     <MenuItem value={'Day 219,06-Aug,Job 7-9'}>Day 219,06-Aug,Job 7-9</MenuItem>
//                     <MenuItem value={'Day 220,07-Aug,Job 10-12'}>Day 220,07-Aug,Job 10-12</MenuItem>
//                     <MenuItem value={'Day 221,08-Aug,Job 13-15'}>Day 221,08-Aug,Job 13-15</MenuItem>
//                     <MenuItem value={'Day 222,09-Aug,Job 16-18'}>Day 222,09-Aug,Job 16-18</MenuItem>
//                     <MenuItem value={'Day 223,10-Aug,Job 19-21'}>Day 223,10-Aug,Job 19-21</MenuItem>
//                     <MenuItem value={'Day 224,11-Aug,Job 22-24'}>Day 224,11-Aug,Job 22-24</MenuItem>
//                     <MenuItem value={'Day 225,12-Aug,Job 25-27'}>Day 225,12-Aug,Job 25-27</MenuItem>
//                     <MenuItem value={'Day 226,13-Aug,Job 28-30'}>Day 226,13-Aug,Job 28-30</MenuItem>
//                     <MenuItem value={'Day 227,14-Aug,Job 31-33'}>Day 227,14-Aug,Job 31-33</MenuItem>
//                     <MenuItem value={'Day 228,15-Aug,Job 34-36'}>Day 228,15-Aug,Job 34-36</MenuItem>
//                     <MenuItem value={'Day 229,16-Aug,Job 37-39'}>Day 229,16-Aug,Job 37-39</MenuItem>
//                     <MenuItem value={'Day 230,17-Aug,Job 40-42'}>Day 230,17-Aug,Job 40-42</MenuItem>
//                     <MenuItem value={'Day 231,18-Aug,Psalms 1-5'}>Day 231,18-Aug,Psalms 1-5</MenuItem>
//                     <MenuItem value={'Day 232,19-Aug,Psalms 5-10'}>Day 232,19-Aug,Psalms 5-10</MenuItem>
//                     <MenuItem value={'Day 233,20-Aug,Psalms 11-15'}>Day 233,20-Aug,Psalms 11-15</MenuItem>
//                     <MenuItem value={'Day 234,21-Aug,Psalms 16-20'}>Day 234,21-Aug,Psalms 16-20</MenuItem>
//                     <MenuItem value={'Day 235,22-Aug,Psalms 21-25'}>Day 235,22-Aug,Psalms 21-25</MenuItem>
//                     <MenuItem value={'Day 236,23-Aug,Psalms 26-30'}>Day 236,23-Aug,Psalms 26-30</MenuItem>
//                     <MenuItem value={'Day 237,24-Aug,Psalms 31-35'}>Day 237,24-Aug,Psalms 31-35</MenuItem>
//                     <MenuItem value={'Day 238,25-Aug,Psalms 36-40'}>Day 238,25-Aug,Psalms 36-40</MenuItem>
//                     <MenuItem value={'Day 239,26-Aug,Psalms 41-45'}>Day 239,26-Aug,Psalms 41-45</MenuItem>
//                     <MenuItem value={'Day 240,27-Aug,Psalms 46-50'}>Day 240,27-Aug,Psalms 46-50</MenuItem>
//                     <MenuItem value={'Day 241,28-Aug,Psalms 51-55'}>Day 241,28-Aug,Psalms 51-55</MenuItem>
//                     <MenuItem value={'Day 242,29-Aug,Psalms 55-60'}>Day 242,29-Aug,Psalms 55-60</MenuItem>
//                     <MenuItem value={'Day 243,30-Aug,Psalms 61-65'}>Day 243,30-Aug,Psalms 61-65</MenuItem>
//                     <MenuItem value={'Day 244,31-Aug,Psalms 66-70'}>Day 244,31-Aug,Psalms 66-70</MenuItem>
//                     <MenuItem value={'Day 245,01-Sep,Psalms 71-75'}>Day 245,01-Sep,Psalms 71-75</MenuItem>
//                     <MenuItem value={'Day 246,02-Sep,Psalms 76-80'}>Day 246,02-Sep,Psalms 76-80</MenuItem>
//                     <MenuItem value={'Day 247,03-Sep,Psalms 85-90'}>Day 247,03-Sep,Psalms 85-90</MenuItem>
//                     <MenuItem value={'Day 248,04-Sep,Psalms 95-100'}>Day 248,04-Sep,Psalms 95-100</MenuItem>
//                     <MenuItem value={'Day 249,05-Sep,Psalms 101-105'}>Day 249,05-Sep,Psalms 101-105</MenuItem>
//                     <MenuItem value={'Day 250,06-Sep,Psalms 106-110'}>Day 250,06-Sep,Psalms 106-110</MenuItem>
//                     <MenuItem value={'Day 251,07-Sep,Psalms 111-115'}>Day 251,07-Sep,Psalms 111-115</MenuItem>
//                     <MenuItem value={'Day 252,08-Sep,Psalms 116-118'}>Day 252,08-Sep,Psalms 116-118</MenuItem>
//                     <MenuItem value={'Day 253,09-Sep,Psalms 119'}>Day 253,09-Sep,Psalms 119</MenuItem>
//                     <MenuItem value={'Day 254,10-Sep,Psalms 120-125'}>Day 254,10-Sep,Psalms 120-125</MenuItem>
//                     <MenuItem value={'Day 255,11-Sep,Psalms 126-130'}>Day 255,11-Sep,Psalms 126-130</MenuItem>
//                     <MenuItem value={'Day 256,12-Sep,Psalms 131-135'}>Day 256,12-Sep,Psalms 131-135</MenuItem>
//                     <MenuItem value={'Day 257,13-Sep,Psalms 136-140'}>Day 257,13-Sep,Psalms 136-140</MenuItem>
//                     <MenuItem value={'Day 258,14-Sep,Psalms 141-145'}>Day 258,14-Sep,Psalms 141-145</MenuItem>
//                     <MenuItem value={'Day 259,15-Sep,Psalms 146-150'}>Day 259,15-Sep,Psalms 146-150</MenuItem>
//                     <MenuItem value={'Day 260,16-Sep,Proverbs 1-3'}>Day 260,16-Sep,Proverbs 1-3</MenuItem>
//                     <MenuItem value={'Day 261,17-Sep,Proverbs 4-6'}>Day 261,17-Sep,Proverbs 4-6</MenuItem>
//                     <MenuItem value={'Day 262,18-Sep,Proverbs 7-9'}>Day 262,18-Sep,Proverbs 7-9</MenuItem>
//                     <MenuItem value={'Day 263,19-Sep,Proverbs 10-12'}>Day 263,19-Sep,Proverbs 10-12</MenuItem>
//                     <MenuItem value={'Day 264,20-Sep,Proverbs 13-15'}>Day 264,20-Sep,Proverbs 13-15</MenuItem>
//                     <MenuItem value={'Day 265,21-Sep,Proverbs 16-18'}>Day 265,21-Sep,Proverbs 16-18</MenuItem>
//                     <MenuItem value={'Day 266,22-Sep,Proverbs 19-21'}>Day 266,22-Sep,Proverbs 19-21</MenuItem>
//                     <MenuItem value={'Day 267,23-Sep,Proverbs 22-24'}>Day 267,23-Sep,Proverbs 22-24</MenuItem>
//                     <MenuItem value={'Day 268,24-Sep,Proverbs 25-27'}>Day 268,24-Sep,Proverbs 25-27</MenuItem>
//                     <MenuItem value={'Day 269,25-Sep,Proverbs 28-31'}>Day 269,25-Sep,Proverbs 28-31</MenuItem>
//                     <MenuItem value={'Day 270,26-Sep,Ecclesiastes 1-4'}>Day 270,26-Sep,Ecclesiastes 1-4</MenuItem>
//                     <MenuItem value={'Day 271,27-Sep,Ecclesiastes 5-8'}>Day 271,27-Sep,Ecclesiastes 5-8</MenuItem>
//                     <MenuItem value={'Day 272,28-Sep,Ecclesiastes 9-12'}>Day 272,28-Sep,Ecclesiastes 9-12</MenuItem>
//                     <MenuItem value={'Day 273,29-Sep,Song of Solomon 1-4'}>Day 273,29-Sep,Song of Solomon 1-4</MenuItem>
//                     <MenuItem value={'Day 274,30-Sep,Isaiah 1-3'}>Day 274,30-Sep,Isaiah 1-3</MenuItem>
//                     <MenuItem value={'Day 275,01-Oct,Isaiah 4-6'}>Day 275,01-Oct,Isaiah 4-6</MenuItem>
//                     <MenuItem value={'Day 276,02-Oct,Isaiah 7-9'}>Day 276,02-Oct,Isaiah 7-9</MenuItem>
//                     <MenuItem value={'Day 277,03-Oct,Isaiah 10-12'}>Day 277,03-Oct,Isaiah 10-12</MenuItem>
//                     <MenuItem value={'Day 278,04-Oct,Isaiah 13-15'}>Day 278,04-Oct,Isaiah 13-15</MenuItem>
//                     <MenuItem value={'Day 279,05-Oct,Isaiah 16-18'}>Day 279,05-Oct,Isaiah 16-18</MenuItem>
//                     <MenuItem value={'Day 280,06-Oct,Isaiah 19-21'}>Day 280,06-Oct,Isaiah 19-21</MenuItem>
//                     <MenuItem value={'Day 281,07-Oct,Isaiah 22-24'}>Day 281,07-Oct,Isaiah 22-24</MenuItem>
//                     <MenuItem value={'Day 282,08-Oct,Isaiah 25-27'}>Day 282,08-Oct,Isaiah 25-27</MenuItem>
//                     <MenuItem value={'Day 283,09-Oct,Isaiah 28-30'}>Day 283,09-Oct,Isaiah 28-30</MenuItem>
//                     <MenuItem value={'Day 284,10-Oct,Isaiah 31-33'}>Day 284,10-Oct,Isaiah 31-33</MenuItem>
//                     <MenuItem value={'Day 285,11-Oct,Isaiah 34-36'}>Day 285,11-Oct,Isaiah 34-36</MenuItem>
//                     <MenuItem value={'Day 286,12-Oct,Isaiah 37-39'}>Day 286,12-Oct,Isaiah 37-39</MenuItem>
//                     <MenuItem value={'Day 287,13-Oct,Isaiah 40-42'}>Day 287,13-Oct,Isaiah 40-42</MenuItem>
//                     <MenuItem value={'Day 288,14-Oct,Isaiah 43-45'}>Day 288,14-Oct,Isaiah 43-45</MenuItem>
//                     <MenuItem value={'Day 289,15-Oct,Isaiah 46-48'}>Day 289,15-Oct,Isaiah 46-48</MenuItem>
//                     <MenuItem value={'Day 290,16-Oct,Isaiah 49-51'}>Day 290,16-Oct,Isaiah 49-51</MenuItem>
//                     <MenuItem value={'Day 291,17-Oct,Isaiah 52-54'}>Day 291,17-Oct,Isaiah 52-54</MenuItem>
//                     <MenuItem value={'Day 292,18-Oct,Isaiah 55-57'}>Day 292,18-Oct,Isaiah 55-57</MenuItem>
//                     <MenuItem value={'Day 293,19-Oct,Isaiah 58-60'}>Day 293,19-Oct,Isaiah 58-60</MenuItem>
//                     <MenuItem value={'Day 294,20-Oct,Isaiah 61-63'}>Day 294,20-Oct,Isaiah 61-63</MenuItem>
//                     <MenuItem value={'Day 295,21-Oct,Isaiah 64-66'}>Day 295,21-Oct,Isaiah 64-66</MenuItem>
//                     <MenuItem value={'Day 296,22-Oct,Jeremiah 1-3'}>Day 296,22-Oct,Jeremiah 1-3</MenuItem>
//                     <MenuItem value={'Day 297,23-Oct,Jeremiah 4-6'}>Day 297,23-Oct,Jeremiah 4-6</MenuItem>
//                     <MenuItem value={'Day 298,24-Oct,Jeremiah 7-9'}>Day 298,24-Oct,Jeremiah 7-9</MenuItem>
//                     <MenuItem value={'Day 299,25-Oct,Jeremiah 10-12'}>Day 299,25-Oct,Jeremiah 10-12</MenuItem>
//                     <MenuItem value={'Day 300,26-Oct,Jeremiah 13-15'}>Day 300,26-Oct,Jeremiah 13-15</MenuItem>
//                     <MenuItem value={'Day 301,27-Oct,Jeremiah 16-18'}>Day 301,27-Oct,Jeremiah 16-18</MenuItem>
//                     <MenuItem value={'Day 302,28-Oct,Jeremiah 19-21'}>Day 302,28-Oct,Jeremiah 19-21</MenuItem>
//                     <MenuItem value={'Day 303,29-Oct,Jeremiah 22-24'}>Day 303,29-Oct,Jeremiah 22-24</MenuItem>
//                     <MenuItem value={'Day 304,30-Oct,Jeremiah 25-27'}>Day 304,30-Oct,Jeremiah 25-27</MenuItem>
//                     <MenuItem value={'Day 305,31-Oct,Jeremiah 28-30'}>Day 305,31-Oct,Jeremiah 28-30</MenuItem>
//                     <MenuItem value={'Day 306,01-Nov,Jeremiah 31-33'}>Day 306,01-Nov,Jeremiah 31-33</MenuItem>
//                     <MenuItem value={'Day 307,02-Nov,Jeremiah 34-36'}>Day 307,02-Nov,Jeremiah 34-36</MenuItem>
//                     <MenuItem value={'Day 308,03-Nov,Jeremiah 37-39'}>Day 308,03-Nov,Jeremiah 37-39</MenuItem>
//                     <MenuItem value={'Day 309,04-Nov,Jeremiah 40-42'}>Day 309,04-Nov,Jeremiah 40-42</MenuItem>
//                     <MenuItem value={'Day 310,05-Nov,Jeremiah 43-45'}>Day 310,05-Nov,Jeremiah 43-45</MenuItem>
//                     <MenuItem value={'Day 311,06-Nov,Jeremiah 46-49'}>Day 311,06-Nov,Jeremiah 46-49</MenuItem>
//                     <MenuItem value={'Day 312,07-Nov,Jeremiah 50-52'}>Day 312,07-Nov,Jeremiah 50-52</MenuItem>
//                     <MenuItem value={'Day 313,08-Nov,Lamentations 1-3'}>Day 313,08-Nov,Lamentations 1-3</MenuItem>
//                     <MenuItem value={'Day 314,09-Nov,Lamentations 4-5'}>Day 314,09-Nov,Lamentations 4-5</MenuItem>
//                     <MenuItem value={'Day 315,10-Nov,Ezekiel 1-3'}>Day 315,10-Nov,Ezekiel 1-3</MenuItem>
//                     <MenuItem value={'Day 316,11-Nov,Ezekiel 4-6'}>Day 316,11-Nov,Ezekiel 4-6</MenuItem>
//                     <MenuItem value={'Day 317,12-Nov,Ezekiel 7-9'}>Day 317,12-Nov,Ezekiel 7-9</MenuItem>
//                     <MenuItem value={'Day 318,13-Nov,Ezekiel 10-12'}>Day 318,13-Nov,Ezekiel 10-12</MenuItem>
//                     <MenuItem value={'Day 319,14-Nov,Ezekiel 13-15'}>Day 319,14-Nov,Ezekiel 13-15</MenuItem>
//                     <MenuItem value={'Day 320,15-Nov,Ezekiel 16-18'}>Day 320,15-Nov,Ezekiel 16-18</MenuItem>
//                     <MenuItem value={'Day 321,16-Nov,Ezekiel 19-21'}>Day 321,16-Nov,Ezekiel 19-21</MenuItem>
//                     <MenuItem value={'Day 322,17-Nov,Ezekiel 22-24'}>Day 322,17-Nov,Ezekiel 22-24</MenuItem>
//                     <MenuItem value={'Day 323,18-Nov,Ezekiel 25-27'}>Day 323,18-Nov,Ezekiel 25-27</MenuItem>
//                     <MenuItem value={'Day 324,19-Nov,Ezekiel 29-30'}>Day 324,19-Nov,Ezekiel 29-30</MenuItem>
//                     <MenuItem value={'Day 325,20-Nov,Ezekiel 31-33'}>Day 325,20-Nov,Ezekiel 31-33</MenuItem>
//                     <MenuItem value={'Day 326,21-Nov,Ezekiel 34-36'}>Day 326,21-Nov,Ezekiel 34-36</MenuItem>
//                     <MenuItem value={'Day 327,22-Nov,Ezekiel 37-39'}>Day 327,22-Nov,Ezekiel 37-39</MenuItem>
//                     <MenuItem value={'Day 328,23-Nov,Ezekiel 40-42'}>Day 328,23-Nov,Ezekiel 40-42</MenuItem>
//                     <MenuItem value={'Day 329,24-Nov,Ezekiel 43-45'}>Day 329,24-Nov,Ezekiel 43-45</MenuItem>
//                     <MenuItem value={'Day 330,25-Nov,Ezekiel 46-48'}>Day 330,25-Nov,Ezekiel 46-48</MenuItem>
//                     <MenuItem value={'Day 331,26-NovDaniel 1-4'}>Day 331,26-NovDaniel 1-4</MenuItem>
//                     <MenuItem value={'Day 332,27-NovDaniel 5-8'}>Day 332,27-NovDaniel 5-8</MenuItem>
//                     <MenuItem value={'Day 333,28-NovDaniel 9-12'}>Day 333,28-NovDaniel 9-12</MenuItem>
//                     <MenuItem value={'Day 334,29-Nov,Hosea 1-4'}>Day 334,29-Nov,Hosea 1-4</MenuItem>
//                     <MenuItem value={'Day 335,30-Nov,Hosea 5-8'}>Day 335,30-Nov,Hosea 5-8</MenuItem>
//                     <MenuItem value={'Day 336,01-Dec,Hosea 9-12'}>Day 336,01-Dec,Hosea 9-12</MenuItem>
//                     <MenuItem value={'Day 337,02-Dec,Hosea 13-14'}>Day 337,02-Dec,Hosea 13-14</MenuItem>
//                     <MenuItem value={'Day 338,03-Dec,Joel 1-3'}>Day 338,03-Dec,Joel 1-3</MenuItem>
//                     <MenuItem value={'Day 339,04-Dec,Amos 1-4'}>Day 339,04-Dec,Amos 1-4</MenuItem>
//                     <MenuItem value={'Day 340,05-Dec,Amos 5-9'}>Day 340,05-Dec,Amos 5-9</MenuItem>
//                     <MenuItem value={'Day 341,06-Dec,Obadiah 1, Jonah 1-4'}>Day 341,06-Dec,Obadiah 1, Jonah 1-4</MenuItem>
//                     <MenuItem value={'Day 342,07-Dec,Micha 1-4'}>Day 342,07-Dec,Micha 1-4</MenuItem>
//                     <MenuItem value={'Day 343,08-Dec,Micha 5-7'}>Day 343,08-Dec,Micha 5-7</MenuItem>
//                     <MenuItem value={'Day 344,09-Dec,Nahum 1-3'}>Day 344,09-Dec,Nahum 1-3</MenuItem>
//                     <MenuItem value={'Day 345,10-Dec,Habakkuk 1-3'}>Day 345,10-Dec,Habakkuk 1-3</MenuItem>
//                     <MenuItem value={'Day 346,11-Dec,Zephaniah 1-3'}>Day 346,11-Dec,Zephaniah 1-3</MenuItem>
//                     <MenuItem value={'Day 347,12-Dec,Haggai 1-2'}>Day 347,12-Dec,Haggai 1-2</MenuItem>
//                     <MenuItem value={'Day 348,13-Dec,Zechariah 1-3'}>Day 348,13-Dec,Zechariah 1-3</MenuItem>
//                     <MenuItem value={'Day 349,14-Dec,Zechariah 4-6'}>Day 349,14-Dec,Zechariah 4-6</MenuItem>
//                     <MenuItem value={'Day 350,15-Dec,Zechariah 7-9'}>Day 350,15-Dec,Zechariah 7-9</MenuItem>
//                     <MenuItem value={'Day 351,16-Dec,Zechariah 10-12'}>Day 351,16-Dec,Zechariah 10-12</MenuItem>
//                     <MenuItem value={'Day 352,17-Dec,Zechariah 13-14'}>Day 352,17-Dec,Zechariah 13-14</MenuItem>
//                     <MenuItem value={'Day 353,18-Dec,Malachi 1-4'}>Day 353,18-Dec,Malachi 1-4</MenuItem>
//                     <MenuItem value={'Day 354,19-Dec,Holiday /Meditate'}>Day 354,19-Dec,Holiday /Meditate</MenuItem>
//                     <MenuItem value={'Day 355,20-Dec,Holiday /Meditate'}>Day 355,20-Dec,Holiday /Meditate</MenuItem>
//                     <MenuItem value={'Day 356,21-Dec,Holiday /Meditate'}>Day 356,21-Dec,Holiday /Meditate</MenuItem>
//                     <MenuItem value={'Day 357,22-Dec,Holiday /Meditate'}>Day 357,22-Dec,Holiday /Meditate</MenuItem>
//                     <MenuItem value={'Day 358,23-Dec,Holiday /Meditate'}>Day 358,23-Dec,Holiday /Meditate</MenuItem>
//                     <MenuItem value={'Day 359,24-Dec,Holiday /Meditate'}>Day 359,24-Dec,Holiday /Meditate</MenuItem>
//                     <MenuItem value={'Day 360,25-Dec,Holiday /Meditate'}>Day 360,25-Dec,Holiday /Meditate</MenuItem>
//                     <MenuItem value={'Day 361,26-Dec,Holiday /Meditate'}>Day 361,26-Dec,Holiday /Meditate</MenuItem>
//                     <MenuItem value={'Day 362,27-Dec,Holiday /Meditate'}>Day 362,27-Dec,Holiday /Meditate</MenuItem>
//                     <MenuItem value={'Day 363,28-Dec,Holiday /Meditate'}>Day 363,28-Dec,Holiday /Meditate</MenuItem>
//                     <MenuItem value={'Day 364,29-Dec,Holiday /Meditate'}>Day 364,29-Dec,Holiday /Meditate</MenuItem>
//                     <MenuItem value={'Day 365,30-Dec,Holiday /Meditate'}>Day 365,30-Dec,Holiday /Meditate</MenuItem>
//                     <MenuItem value={'Day 366,31-Dec,Holiday /Meditate'}>Day 366,31-Dec,Holiday /Meditate</MenuItem>


//                 </Select> */}
//                 <App />
//             </FormControl>
//         </div>
//     );
// }

export default function SelectAutoWidth(props) {
    // React state to manage selected options
    const [selectedOptions, setSelectedOptions] = React.useState(null);

    // Array of all options
    // const optionList = [

    //     { value:"Day 1,01-Jan,Matthew 1-3", label: "Day 1,01-Jan,Matthew 1-3" },
    //     { value:"Day 2,02-Jan,Matthew 4-6", label: "Day 2,02-Jan,Matthew 4-6" },
    //     { value:"Day 3,03-Jan,Matthew 7-9", label: "Day 3,03-Jan,Matthew 7-9" },
    //     { value:"Day 4,04-Jan,Matthew 10-12", label: "Day 4,04-Jan,Matthew 10-12" },
    //     { value:"Day 5,05-Jan,Matthew 13-15", label: "Day 5,05-Jan,Matthew 13-15" },
    //     { value:"Day 6,06-Jan,Matthew 16-18", label: "Day 6,06-Jan,Matthew 16-18" },
    //     { value:"Day 7,07-Jan,Matthew 19-21", label: "Day 7,07-Jan,Matthew 19-21" },
    //     { value:"Day 8,08-Jan,Matthew 22-24", label: "Day 8,08-Jan,Matthew 22-24" },
    //     { value:"Day 9,09-Jan,Matthew 25-28", label: "Day 9,09-Jan,Matthew 25-28" },
    //     { value:"Day 10,10-Jan,Mark 1-3", label: "Day 10,10-Jan,Mark 1-3" },
    //     { value:"Day 11,11-Jan,Mark 4-6", label: "Day 11,11-Jan,Mark 4-6" },
    //     { value:"Day 12,12-Jan,Mark 7-9", label: "Day 12,12-Jan,Mark 7-9" },
    //     { value:"Day 13,13-Jan,Mark 10-12", label: "Day 13,13-Jan,Mark 10-12" },
    //     { value:"Day 14,14-Jan,Mark 13-16", label: "Day 14,14-Jan,Mark 13-16" },
    //     { value:"Day 15,15-Jan,Luke 1-3", label: "Day 15,15-Jan,Luke 1-3" },
    //     { value:"Day 16,16-Jan,Luke 4-6", label: "Day 16,16-Jan,Luke 4-6" },
    //     { value:"Day 17,17-Jan,Luke 7-9", label: "Day 17,17-Jan,Luke 7-9" },
    //     { value:"Day 18,18-Jan,Luke 10-12", label: "Day 18,18-Jan,Luke 10-12" },
    //     { value:"Day 19,19-Jan,Luke 13-15", label: "Day 19,19-Jan,Luke 13-15" },
    //     { value:"Day 20,20-Jan,Luke 16-18", label: "Day 20,20-Jan,Luke 16-18" },
    //     { value:"Day 21,21-Jan,Luke 19-21", label: "Day 21,21-Jan,Luke 19-21" },
    //     { value:"Day 22,22-Jan,Luke 22-24", label: "Day 22,22-Jan,Luke 22-24" },
    //     { value:"Day 23,23-Jan,John 1-3", label: "Day 23,23-Jan,John 1-3" },
    //     { value:"Day 24,24-Jan,John 4-6", label: "Day 24,24-Jan,John 4-6" },
    //     { value:"Day 25,25-Jan,John 7-9", label: "Day 25,25-Jan,John 7-9" },
    //     { value:"Day 26,26-Jan,John 10-12", label: "Day 26,26-Jan,John 10-12" },
    //     { value:"Day 27,27-Jan,John 13-15", label: "Day 27,27-Jan,John 13-15" },
    //     { value:"Day 28,28-Jan,John 16-18", label: "Day 28,28-Jan,John 16-18" },
    //     { value:"Day 29,29-Jan,John 19-21", label: "Day 29,29-Jan,John 19-21" },
    //     { value:"Day 30,30-Jan,Acts 1-3", label: "Day 30,30-Jan,Acts 1-3" },
    //     { value:"Day 31,31-Jan,Acts 4-6", label: "Day 31,31-Jan,Acts 4-6" },
    //     { value:"Day 32,01-Feb,Acts 7-9", label: "Day 32,01-Feb,Acts 7-9" },
    //     { value:"Day 33,02-Feb,Acts 10-12", label: "Day 33,02-Feb,Acts 10-12" },
    //     { value:"Day 34,03-Feb,Acts 13-15", label: "Day 34,03-Feb,Acts 13-15" },
    //     { value:"Day 35,04-Feb,Acts 16-18", label: "Day 35,04-Feb,Acts 16-18" },
    //     { value:"Day 36,05-Feb,Acts 19-21", label: "Day 36,05-Feb,Acts 19-21" },
    //     { value:"Day 37,06-Feb,Acts 22-24", label: "Day 37,06-Feb,Acts 22-24" },
    //     { value:"Day 38,07-Feb,Acts 25-28", label: "Day 38,07-Feb,Acts 25-28" },
    //     { value:"Day 39,08-Feb,Romans 1-3", label: "Day 39,08-Feb,Romans 1-3" },
    //     { value:"Day 40,09-Feb,Romans 4-6", label: "Day 40,09-Feb,Romans 4-6" },
    //     { value:"Day 41,10-Feb,Romans 7-9", label: "Day 41,10-Feb,Romans 7-9" },
    //     { value:"Day 42,11-Feb,Romans 10-12", label: "Day 42,11-Feb,Romans 10-12" },
    //     { value:"Day 43,12-Feb,Romans 13-16", label: "Day 43,12-Feb,Romans 13-16" },
    //     { value:"Day 44,13-Feb,1 Corinthians 1-3", label: "Day 44,13-Feb,1 Corinthians 1-3" },
    //     { value:"Day 45,14-Feb,1 Corinthians 4-6", label: "Day 45,14-Feb,1 Corinthians 4-6" },
    //     { value:"Day 46,15-Feb,1 Corinthians 7-9", label: "Day 46,15-Feb,1 Corinthians 7-9" },
    //     { value:"Day 47,16-Feb,1 Corinthians 10-12", label: "Day 47,16-Feb,1 Corinthians 10-12" },
    //     { value:"Day 48,17-Feb,1 Corinthians 13-16", label: "Day 48,17-Feb,1 Corinthians 13-16" },
    //     { value:"Day 49,18-Feb,2 Corinthians 1-3", label: "Day 49,18-Feb,2 Corinthians 1-3" },
    //     { value:"Day 50,19-Feb,2 Corinthians 4-6", label: "Day 50,19-Feb,2 Corinthians 4-6" },
    //     { value:"Day 51,20-Feb,2 Corinthians 7-9", label: "Day 51,20-Feb,2 Corinthians 7-9" },
    //     { value:"Day 52,21-Feb,2 Corinthians 10-13", label: "Day 52,21-Feb,2 Corinthians 10-13" },
    //     { value:"Day 53,22-Feb,Galatians 1-3", label: "Day 53,22-Feb,Galatians 1-3" },
    //     { value:"Day 54,23-Feb,Galatians 4-6", label: "Day 54,23-Feb,Galatians 4-6" },
    //     { value:"Day 55,24-Feb,Ephesians 1-3", label: "Day 55,24-Feb,Ephesians 1-3" },
    //     { value:"Day 56,25-Feb,Ephesians 4-6", label: "Day 56,25-Feb,Ephesians 4-6" },
    //     { value:"Day 57,26-Feb,Philippians 1-4", label: "Day 57,26-Feb,Philippians 1-4" },
    //     { value:"Day 58,27-Feb,Colossians 1-4", label: "Day 58,27-Feb,Colossians 1-4" },
    //     { value:"Day 59,28-Feb,1 Thessalonians 1-3", label: "Day 59,28-Feb,1 Thessalonians 1-3" },
    //     { value:"Day 60,29-Feb,1 Thessalonians 4-5", label: "Day 60,29-Feb,1 Thessalonians 4-5" },
    //     { value:"Day 61,01-Mar,2 Thessalonians 1-3", label: "Day 61,01-Mar,2 Thessalonians 1-3" },
    //     { value:"Day 62,02-Mar,1 Timothy 1-3", label: "Day 62,02-Mar,1 Timothy 1-3" },
    //     { value:"Day 63,03-Mar,1 Timothy 4-6", label: "Day 63,03-Mar,1 Timothy 4-6" },
    //     { value:"Day 64,04-Mar,2 Timothy 1-4", label: "Day 64,04-Mar,2 Timothy 1-4" },
    //     { value:"Day 65,05-Mar,Titus 1-3", label: "Day 65,05-Mar,Titus 1-3" },
    //     { value:"Day 66,06-Mar,Philemon 1", label: "Day 66,06-Mar,Philemon 1" },
    //     { value:"Day 67,07-Mar,Hebrews 1-3", label: "Day 67,07-Mar,Hebrews 1-3" },
    //     { value:"Day 68,08-Mar,Hebrews 4-6", label: "Day 68,08-Mar,Hebrews 4-6" },
    //     { value:"Day 69,09-Mar,Hebrews 7-9", label: "Day 69,09-Mar,Hebrews 7-9" },
    //     { value:"Day 70,10-Mar,Hebrews 10-13", label: "Day 70,10-Mar,Hebrews 10-13" },
    //     { value:"Day 71,11-Mar,James 1-3", label: "Day 71,11-Mar,James 1-3" },
    //     { value:"Day 72,12-Mar,James 4-5", label: "Day 72,12-Mar,James 4-5" },
    //     { value:"Day 73,13-Mar,1 Peter 1-3", label: "Day 73,13-Mar,1 Peter 1-3" },
    //     { value:"Day 74,14-Mar,1 Peter 4-5", label: "Day 74,14-Mar,1 Peter 4-5" },
    //     { value:"Day 75,15-Mar,2 Peter 1-3", label: "Day 75,15-Mar,2 Peter 1-3" },
    //     { value:"Day 76,16-Mar,1 John 1-3", label: "Day 76,16-Mar,1 John 1-3" },
    //     { value:"Day 77,17-Mar,1 John 4-5", label: "Day 77,17-Mar,1 John 4-5" },
    //     { value:"Day 78,18-Mar,2 John 1, 3 John 1, Jude 1", label: "Day 78,18-Mar,2 John 1, 3 John 1, Jude 1" },
    //     { value:"Day 79,19-Mar,Revelation 1-3", label: "Day 79,19-Mar,Revelation 1-3" },
    //     { value:"Day 80,20-Mar,Revelation 4-6", label: "Day 80,20-Mar,Revelation 4-6" },
    //     { value:"Day 81,21-Mar,Revelation 7-9", label: "Day 81,21-Mar,Revelation 7-9" },
    //     { value:"Day 82,22-Mar,Revelation 10-12", label: "Day 82,22-Mar,Revelation 10-12" },
    //     { value:"Day 83,23-Mar,Revelation 13-15", label: "Day 83,23-Mar,Revelation 13-15" },
    //     { value:"Day 84,24-Mar,Revelation 16-18", label: "Day 84,24-Mar,Revelation 16-18" },
    //     { value:"Day 85,25-Mar,Revelation 19-22", label: "Day 85,25-Mar,Revelation 19-22" },
    //     { value:"Day 86,26-Mar,Genesis 1-3", label: "Day 86,26-Mar,Genesis 1-3" },
    //     { value:"Day 87,27-Mar,Genesis 4-6", label: "Day 87,27-Mar,Genesis 4-6" },
    //     { value:"Day 88,28-Mar,Genesis 7-9", label: "Day 88,28-Mar,Genesis 7-9" },
    //     { value:"Day 89,29-Mar,Genesis 10-12", label: "Day 89,29-Mar,Genesis 10-12" },
    //     { value:"Day 90,30-Mar,Genesis 13-15", label: "Day 90,30-Mar,Genesis 13-15" },
    //     { value:"Day 91,31-Mar,Genesis 16-18", label: "Day 91,31-Mar,Genesis 16-18" },
    //     { value:"Day 92,01-Apr,Genesis 19-21", label: "Day 92,01-Apr,Genesis 19-21" },
    //     { value:"Day 93,02-Apr,Genesis 22-24", label: "Day 93,02-Apr,Genesis 22-24" },
    //     { value:"Day 94,03-Apr,Genesis 25-27", label: "Day 94,03-Apr,Genesis 25-27" },
    //     { value:"Day 95,04-Apr,Genesis 28-30", label: "Day 95,04-Apr,Genesis 28-30" },
    //     { value:"Day 96,05-Apr,Genesis 31-33", label: "Day 96,05-Apr,Genesis 31-33" },
    //     { value:"Day 97,06-Apr,Genesis 34-36", label: "Day 97,06-Apr,Genesis 34-36" },
    //     { value:"Day 98,07-Apr,Genesis 37-39", label: "Day 98,07-Apr,Genesis 37-39" },
    //     { value:"Day 99,08-Apr,Genesis 40-42", label: "Day 99,08-Apr,Genesis 40-42" },
    //     { value:"Day 100,09-Apr,Genesis 43-45", label: "Day 100,09-Apr,Genesis 43-45" },
    //     { value:"Day 101,10-Apr,Genesis 46-50", label: "Day 101,10-Apr,Genesis 46-50" },
    //     { value:"Day 102,11-Apr,Exodus 1-3", label: "Day 102,11-Apr,Exodus 1-3" },
    //     { value:"Day 103,12-Apr,Exodus 4-6", label: "Day 103,12-Apr,Exodus 4-6" },
    //     { value:"Day 104,13-Apr,Exodus 7-9", label: "Day 104,13-Apr,Exodus 7-9" },
    //     { value:"Day 105,14-Apr,Exodus 10-12", label: "Day 105,14-Apr,Exodus 10-12" },
    //     { value:"Day 106,15-Apr,Exodus 13-15", label: "Day 106,15-Apr,Exodus 13-15" },
    //     { value:"Day 107,16-Apr,Exodus 16-18", label: "Day 107,16-Apr,Exodus 16-18" },
    //     { value:"Day 108,17-Apr,Exodus 19-21", label: "Day 108,17-Apr,Exodus 19-21" },
    //     { value:"Day 109,18-Apr,Exodus 22-24", label: "Day 109,18-Apr,Exodus 22-24" },
    //     { value:"Day 110,19-Apr,Exodus 25-27", label: "Day 110,19-Apr,Exodus 25-27" },
    //     { value:"Day 111,20-Apr,Exodus 28-30", label: "Day 111,20-Apr,Exodus 28-30" },
    //     { value:"Day 112,21-Apr,Exodus 31-33", label: "Day 112,21-Apr,Exodus 31-33" },
    //     { value:"Day 113,22-Apr,Exodus 34-36", label: "Day 113,22-Apr,Exodus 34-36" },
    //     { value:"Day 114,23-Apr,Exodus 37-40", label: "Day 114,23-Apr,Exodus 37-40" },
    //     { value:"Day 115,24-Apr,Leviticus 1-3", label: "Day 115,24-Apr,Leviticus 1-3" },
    //     { value:"Day 116,25-Apr,Leviticus 4-6", label: "Day 116,25-Apr,Leviticus 4-6" },
    //     { value:"Day 117,26-Apr,Leviticus 7-9", label: "Day 117,26-Apr,Leviticus 7-9" },
    //     { value:"Day 118,27-Apr,Leviticus 10-12", label: "Day 118,27-Apr,Leviticus 10-12" },
    //     { value:"Day 119,28-Apr,Leviticus 13-15", label: "Day 119,28-Apr,Leviticus 13-15" },
    //     { value:"Day 120,29-Apr,Leviticus 16-18", label: "Day 120,29-Apr,Leviticus 16-18" },
    //     { value:"Day 121,30-Apr,Leviticus 19-21", label: "Day 121,30-Apr,Leviticus 19-21" },
    //     { value:"Day 122,01-May,Leviticus 22-24", label: "Day 122,01-May,Leviticus 22-24" },
    //     { value:"Day 123,02-May,Leviticus 25-27", label: "Day 123,02-May,Leviticus 25-27" },
    //     { value:"Day 124,03-May,Numbers 1-3", label: "Day 124,03-May,Numbers 1-3" },
    //     { value:"Day 125,04-May,Numbers 4-6", label: "Day 125,04-May,Numbers 4-6" },
    //     { value:"Day 126,05-May,Numbers 7-9", label: "Day 126,05-May,Numbers 7-9" },
    //     { value:"Day 127,06-May,Numbers 10-12", label: "Day 127,06-May,Numbers 10-12" },
    //     { value:"Day 128,07-May,Numbers 13-15", label: "Day 128,07-May,Numbers 13-15" },
    //     { value:"Day 129,08-May,Numbers 16-18", label: "Day 129,08-May,Numbers 16-18" },
    //     { value:"Day 130,09-May,Numbers 19-21", label: "Day 130,09-May,Numbers 19-21" },
    //     { value:"Day 131,10-May,Numbers 22-24", label: "Day 131,10-May,Numbers 22-24" },
    //     { value:"Day 132,11-May,Numbers 25-27", label: "Day 132,11-May,Numbers 25-27" },
    //     { value:"Day 133,12-May,Numbers 28-30", label: "Day 133,12-May,Numbers 28-30" },
    //     { value:"Day 134,13-May,Numbers 31-33", label: "Day 134,13-May,Numbers 31-33" },
    //     { value:"Day 135,14-May,Numbers 34-36", label: "Day 135,14-May,Numbers 34-36" },
    //     { value:"Day 136,15-May,Joshua 1-3", label: "Day 136,15-May,Joshua 1-3" },
    //     { value:"Day 137,16-May,Joshua 4-6", label: "Day 137,16-May,Joshua 4-6" },
    //     { value:"Day 138,17-May,Joshua 7-9", label: "Day 138,17-May,Joshua 7-9" },
    //     { value:"Day 139,18-May,Joshua 10-12", label: "Day 139,18-May,Joshua 10-12" },
    //     { value:"Day 140,19-May,Joshua 13-15", label: "Day 140,19-May,Joshua 13-15" },
    //     { value:"Day 141,20-May,Joshua 16-18", label: "Day 141,20-May,Joshua 16-18" },
    //     { value:"Day 142,21-May,Joshua 19-21", label: "Day 142,21-May,Joshua 19-21" },
    //     { value:"Day 143,22-May,Joshua 22-24", label: "Day 143,22-May,Joshua 22-24" },
    //     { value:"Day 144,23-May,Judges 1-3", label: "Day 144,23-May,Judges 1-3" },
    //     { value:"Day 145,24-May,Judges 4-6", label: "Day 145,24-May,Judges 4-6" },
    //     { value:"Day 146,25-May,Judges 7-9", label: "Day 146,25-May,Judges 7-9" },
    //     { value:"Day 147,26-May,Judges 10-12", label: "Day 147,26-May,Judges 10-12" },
    //     { value:"Day 148,27-May,Judges 13-15", label: "Day 148,27-May,Judges 13-15" },
    //     { value:"Day 149,28-May,Judges 16-18", label: "Day 149,28-May,Judges 16-18" },
    //     { value:"Day 150,29-May,Judges 19-21", label: "Day 150,29-May,Judges 19-21" },
    //     { value:"Day 151,30-May,Ruth 1-4", label: "Day 151,30-May,Ruth 1-4" },
    //     { value:"Day 152,31-May,1 Samuel 1-3", label: "Day 152,31-May,1 Samuel 1-3" },
    //     { value:"Day 153,01-Jun,1 Samuel 4-6", label: "Day 153,01-Jun,1 Samuel 4-6" },
    //     { value:"Day 154,02-Jun,1 Samuel 7-9", label: "Day 154,02-Jun,1 Samuel 7-9" },
    //     { value:"Day 155,03-Jun,1 Samuel 10-12", label: "Day 155,03-Jun,1 Samuel 10-12" },
    //     { value:"Day 156,04-Jun,1 Samuel 13-15", label: "Day 156,04-Jun,1 Samuel 13-15" },
    //     { value:"Day 157,05-Jun,1 Samuel 16-18", label: "Day 157,05-Jun,1 Samuel 16-18" },
    //     { value:"Day 158,06-Jun,1 Samuel 19-21", label: "Day 158,06-Jun,1 Samuel 19-21" },
    //     { value:"Day 159,07-Jun,1 Samuel 22-24", label: "Day 159,07-Jun,1 Samuel 22-24" },
    //     { value:"Day 160,08-Jun,1 Samuel 25-27", label: "Day 160,08-Jun,1 Samuel 25-27" },
    //     { value:"Day 161,09-Jun,1 Samuel 28-31", label: "Day 161,09-Jun,1 Samuel 28-31" },
    //     { value:"Day 162,10-Jun,2 Samuel 1-3", label: "Day 162,10-Jun,2 Samuel 1-3" },
    //     { value:"Day 163,11-Jun,2 Samuel 4-6", label: "Day 163,11-Jun,2 Samuel 4-6" },
    //     { value:"Day 164,12-Jun,2 Samuel 7-9", label: "Day 164,12-Jun,2 Samuel 7-9" },
    //     { value:"Day 165,13-Jun,2 Samuel 10-12", label: "Day 165,13-Jun,2 Samuel 10-12" },
    //     { value:"Day 166,14-Jun,2 Samuel 13-15", label: "Day 166,14-Jun,2 Samuel 13-15" },
    //     { value:"Day 167,15-Jun,2 Samuel 16-18", label: "Day 167,15-Jun,2 Samuel 16-18" },
    //     { value:"Day 168,16-Jun,2 Samuel 19-21", label: "Day 168,16-Jun,2 Samuel 19-21" },
    //     { value:"Day 169,17-Jun,2 Samuel 22-24", label: "Day 169,17-Jun,2 Samuel 22-24" },
    //     { value:"Day 170,18-Jun,1 Kings 1-3", label: "Day 170,18-Jun,1 Kings 1-3" },
    //     { value:"Day 171,19-Jun,1 Kings 4-6", label: "Day 171,19-Jun,1 Kings 4-6" },
    //     { value:"Day 172,20-Jun,1 Kings 7-9", label: "Day 172,20-Jun,1 Kings 7-9" },
    //     { value:"Day 173,21-Jun,1 Kings 10-12", label: "Day 173,21-Jun,1 Kings 10-12" },
    //     { value:"Day 174,22-Jun,1 Kings 13-15", label: "Day 174,22-Jun,1 Kings 13-15" },
    //     { value:"Day 175,23-Jun,1 Kings 16-18", label: "Day 175,23-Jun,1 Kings 16-18" },
    //     { value:"Day 176,24-Jun,1 Kings 19-22", label: "Day 176,24-Jun,1 Kings 19-22" },
    //     { value:"Day 177,25-Jun,2 Kings 1-3", label: "Day 177,25-Jun,2 Kings 1-3" },
    //     { value:"Day 178,26-Jun,2 Kings 4-6", label: "Day 178,26-Jun,2 Kings 4-6" },
    //     { value:"Day 179,27-Jun,2 Kings 7-9", label: "Day 179,27-Jun,2 Kings 7-9" },
    //     { value:"Day 180,28-Jun,2 Kings 10-12", label: "Day 180,28-Jun,2 Kings 10-12" },
    //     { value:"Day 181,29-Jun,2 Kings 13-15", label: "Day 181,29-Jun,2 Kings 13-15" },
    //     { value:"Day 182,30-Jun,2 Kings 16-18", label: "Day 182,30-Jun,2 Kings 16-18" },
    //     { value:"Day 183,01-Jul,2 Kings 19-21", label: "Day 183,01-Jul,2 Kings 19-21" },
    //     { value:"Day 184,02-Jul,2 Kings 22-25", label: "Day 184,02-Jul,2 Kings 22-25" },
    //     { value:"Day 185,03-Jul,1 Chronicles 1-3", label: "Day 185,03-Jul,1 Chronicles 1-3" },
    //     { value:"Day 186,04-Jul,1 Chronicles 4-6", label: "Day 186,04-Jul,1 Chronicles 4-6" },
    //     { value:"Day 187,05-Jul,1 Chronicles 7-9", label: "Day 187,05-Jul,1 Chronicles 7-9" },
    //     { value:"Day 188,06-Jul,1 Chronicles 10-12", label: "Day 188,06-Jul,1 Chronicles 10-12" },
    //     { value:"Day 189,07-Jul,1 Chronicles 13-15", label: "Day 189,07-Jul,1 Chronicles 13-15" },
    //     { value:"Day 190,08-Jul,1 Chronicles 16-18", label: "Day 190,08-Jul,1 Chronicles 16-18" },
    //     { value:"Day 191,09-Jul,1 Chronicles 19-21", label: "Day 191,09-Jul,1 Chronicles 19-21" },
    //     { value:"Day 192,10-Jul,1 Chronicles 22-24", label: "Day 192,10-Jul,1 Chronicles 22-24" },
    //     { value:"Day 193,11-Jul,1 Chronicles 25-27", label: "Day 193,11-Jul,1 Chronicles 25-27" },
    //     { value:"Day 194,12-Jul,1 Chronicles 28-29", label: "Day 194,12-Jul,1 Chronicles 28-29" },
    //     { value:"Day 195,13-Jul,2 Chronicles 1-3", label: "Day 195,13-Jul,2 Chronicles 1-3" },
    //     { value:"Day 196,14-Jul,2 Chronicles 4-6", label: "Day 196,14-Jul,2 Chronicles 4-6" },
    //     { value:"Day 197,15-Jul,2 Chronicles 7-9", label: "Day 197,15-Jul,2 Chronicles 7-9" },
    //     { value:"Day 198,16-Jul,2 Chronicles 10-12", label: "Day 198,16-Jul,2 Chronicles 10-12" },
    //     { value:"Day 199,17-Jul,2 Chronicles 13-15", label: "Day 199,17-Jul,2 Chronicles 13-15" },
    //     { value:"Day 200,18-Jul,2 Chronicles 16-18", label: "Day 200,18-Jul,2 Chronicles 16-18" },
    //     { value:"Day 201,19-Jul,2 Chronicles 19-21", label: "Day 201,19-Jul,2 Chronicles 19-21" },
    //     { value:"Day 202,20-Jul,2 Chronicles 22-24", label: "Day 202,20-Jul,2 Chronicles 22-24" },
    //     { value:"Day 203,21-Jul,2 Chronicles 25-27", label: "Day 203,21-Jul,2 Chronicles 25-27" },
    //     { value:"Day 204,22-Jul,2 Chronicles 28-30", label: "Day 204,22-Jul,2 Chronicles 28-30" },
    //     { value:"Day 205,23-Jul,2 Chronicles 31-33", label: "Day 205,23-Jul,2 Chronicles 31-33" },
    //     { value:"Day 206,24-Jul,2 Chronicles 34-36", label: "Day 206,24-Jul,2 Chronicles 34-36" },
    //     { value:"Day 207,25-Jul,Ezra 1-3", label: "Day 207,25-Jul,Ezra 1-3" },
    //     { value:"Day 208,26-Jul,Ezra 4-6", label: "Day 208,26-Jul,Ezra 4-6" },
    //     { value:"Day 209,27-Jul,Ezra 7-10", label: "Day 209,27-Jul,Ezra 7-10" },
    //     { value:"Day 210,28-Jul,Nehemiah 1-3", label: "Day 210,28-Jul,Nehemiah 1-3" },
    //     { value:"Day 211,29-Jul,Nehemiah 4-6", label: "Day 211,29-Jul,Nehemiah 4-6" },
    //     { value:"Day 212,30-Jul,Nehemiah 7-9", label: "Day 212,30-Jul,Nehemiah 7-9" },
    //     { value:"Day 213,31-Jul,Nehemiah 10-13", label: "Day 213,31-Jul,Nehemiah 10-13" },
    //     { value:"Day 214,01-Aug,Esther 1-3", label: "Day 214,01-Aug,Esther 1-3" },
    //     { value:"Day 215,02-Aug,Esther 4-6", label: "Day 215,02-Aug,Esther 4-6" },
    //     { value:"Day 216,03-Aug,Esther 7-10", label: "Day 216,03-Aug,Esther 7-10" },
    //     { value:"Day 217,04-Aug,Job 1-3", label: "Day 217,04-Aug,Job 1-3" },
    //     { value:"Day 218,05-Aug,Job 4-6", label: "Day 218,05-Aug,Job 4-6" },
    //     { value:"Day 219,06-Aug,Job 7-9", label: "Day 219,06-Aug,Job 7-9" },
    //     { value:"Day 220,07-Aug,Job 10-12", label: "Day 220,07-Aug,Job 10-12" },
    //     { value:"Day 221,08-Aug,Job 13-15", label: "Day 221,08-Aug,Job 13-15" },
    //     { value:"Day 222,09-Aug,Job 16-18", label: "Day 222,09-Aug,Job 16-18" },
    //     { value:"Day 223,10-Aug,Job 19-21", label: "Day 223,10-Aug,Job 19-21" },
    //     { value:"Day 224,11-Aug,Job 22-24", label: "Day 224,11-Aug,Job 22-24" },
    //     { value:"Day 225,12-Aug,Job 25-27", label: "Day 225,12-Aug,Job 25-27" },
    //     { value:"Day 226,13-Aug,Job 28-30", label: "Day 226,13-Aug,Job 28-30" },
    //     { value:"Day 227,14-Aug,Job 31-33", label: "Day 227,14-Aug,Job 31-33" },
    //     { value:"Day 228,15-Aug,Job 34-36", label: "Day 228,15-Aug,Job 34-36" },
    //     { value:"Day 229,16-Aug,Job 37-39", label: "Day 229,16-Aug,Job 37-39" },
    //     { value:"Day 230,17-Aug,Job 40-42", label: "Day 230,17-Aug,Job 40-42" },
    //     { value:"Day 231,18-Aug,Psalms 1-5", label: "Day 231,18-Aug,Psalms 1-5" },
    //     { value:"Day 232,19-Aug,Psalms 5-10", label: "Day 232,19-Aug,Psalms 5-10" },
    //     { value:"Day 233,20-Aug,Psalms 11-15", label: "Day 233,20-Aug,Psalms 11-15" },
    //     { value:"Day 234,21-Aug,Psalms 16-20", label: "Day 234,21-Aug,Psalms 16-20" },
    //     { value:"Day 235,22-Aug,Psalms 21-25", label: "Day 235,22-Aug,Psalms 21-25" },
    //     { value:"Day 236,23-Aug,Psalms 26-30", label: "Day 236,23-Aug,Psalms 26-30" },
    //     { value:"Day 237,24-Aug,Psalms 31-35", label: "Day 237,24-Aug,Psalms 31-35" },
    //     { value:"Day 238,25-Aug,Psalms 36-40", label: "Day 238,25-Aug,Psalms 36-40" },
    //     { value:"Day 239,26-Aug,Psalms 41-45", label: "Day 239,26-Aug,Psalms 41-45" },
    //     { value:"Day 240,27-Aug,Psalms 46-50", label: "Day 240,27-Aug,Psalms 46-50" },
    //     { value:"Day 241,28-Aug,Psalms 51-55", label: "Day 241,28-Aug,Psalms 51-55" },
    //     { value:"Day 242,29-Aug,Psalms 55-60", label: "Day 242,29-Aug,Psalms 55-60" },
    //     { value:"Day 243,30-Aug,Psalms 61-65", label: "Day 243,30-Aug,Psalms 61-65" },
    //     { value:"Day 244,31-Aug,Psalms 66-70", label: "Day 244,31-Aug,Psalms 66-70" },
    //     { value:"Day 245,01-Sep,Psalms 71-75", label: "Day 245,01-Sep,Psalms 71-75" },
    //     { value:"Day 246,02-Sep,Psalms 76-80", label: "Day 246,02-Sep,Psalms 76-80" },
    //     { value:"Day 247,03-Sep,Psalms 85-90", label: "Day 247,03-Sep,Psalms 85-90" },
    //     { value:"Day 248,04-Sep,Psalms 95-100", label: "Day 248,04-Sep,Psalms 95-100" },
    //     { value:"Day 249,05-Sep,Psalms 101-105", label: "Day 249,05-Sep,Psalms 101-105" },
    //     { value:"Day 250,06-Sep,Psalms 106-110", label: "Day 250,06-Sep,Psalms 106-110" },
    //     { value:"Day 251,07-Sep,Psalms 111-115", label: "Day 251,07-Sep,Psalms 111-115" },
    //     { value:"Day 252,08-Sep,Psalms 116-118", label: "Day 252,08-Sep,Psalms 116-118" },
    //     { value:"Day 253,09-Sep,Psalms 119", label: "Day 253,09-Sep,Psalms 119" },
    //     { value:"Day 254,10-Sep,Psalms 120-125", label: "Day 254,10-Sep,Psalms 120-125" },
    //     { value:"Day 255,11-Sep,Psalms 126-130", label: "Day 255,11-Sep,Psalms 126-130" },
    //     { value:"Day 256,12-Sep,Psalms 131-135", label: "Day 256,12-Sep,Psalms 131-135" },
    //     { value:"Day 257,13-Sep,Psalms 136-140", label: "Day 257,13-Sep,Psalms 136-140" },
    //     { value:"Day 258,14-Sep,Psalms 141-145", label: "Day 258,14-Sep,Psalms 141-145" },
    //     { value:"Day 259,15-Sep,Psalms 146-150", label: "Day 259,15-Sep,Psalms 146-150" },
    //     { value:"Day 260,16-Sep,Proverbs 1-3", label: "Day 260,16-Sep,Proverbs 1-3" },
    //     { value:"Day 261,17-Sep,Proverbs 4-6", label: "Day 261,17-Sep,Proverbs 4-6" },
    //     { value:"Day 262,18-Sep,Proverbs 7-9", label: "Day 262,18-Sep,Proverbs 7-9" },
    //     { value:"Day 263,19-Sep,Proverbs 10-12", label: "Day 263,19-Sep,Proverbs 10-12" },
    //     { value:"Day 264,20-Sep,Proverbs 13-15", label: "Day 264,20-Sep,Proverbs 13-15" },
    //     { value:"Day 265,21-Sep,Proverbs 16-18", label: "Day 265,21-Sep,Proverbs 16-18" },
    //     { value:"Day 266,22-Sep,Proverbs 19-21", label: "Day 266,22-Sep,Proverbs 19-21" },
    //     { value:"Day 267,23-Sep,Proverbs 22-24", label: "Day 267,23-Sep,Proverbs 22-24" },
    //     { value:"Day 268,24-Sep,Proverbs 25-27", label: "Day 268,24-Sep,Proverbs 25-27" },
    //     { value:"Day 269,25-Sep,Proverbs 28-31", label: "Day 269,25-Sep,Proverbs 28-31" },
    //     { value:"Day 270,26-Sep,Ecclesiastes 1-4", label: "Day 270,26-Sep,Ecclesiastes 1-4" },
    //     { value:"Day 271,27-Sep,Ecclesiastes 5-8", label: "Day 271,27-Sep,Ecclesiastes 5-8" },
    //     { value:"Day 272,28-Sep,Ecclesiastes 9-12", label: "Day 272,28-Sep,Ecclesiastes 9-12" },
    //     { value:"Day 273,29-Sep,Song of Solomon 1-4", label: "Day 273,29-Sep,Song of Solomon 1-4" },
    //     { value:"Day 274,30-Sep,Isaiah 1-3", label: "Day 274,30-Sep,Isaiah 1-3" },
    //     { value:"Day 275,01-Oct,Isaiah 4-6", label: "Day 275,01-Oct,Isaiah 4-6" },
    //     { value:"Day 276,02-Oct,Isaiah 7-9", label: "Day 276,02-Oct,Isaiah 7-9" },
    //     { value:"Day 277,03-Oct,Isaiah 10-12", label: "Day 277,03-Oct,Isaiah 10-12" },
    //     { value:"Day 278,04-Oct,Isaiah 13-15", label: "Day 278,04-Oct,Isaiah 13-15" },
    //     { value:"Day 279,05-Oct,Isaiah 16-18", label: "Day 279,05-Oct,Isaiah 16-18" },
    //     { value:"Day 280,06-Oct,Isaiah 19-21", label: "Day 280,06-Oct,Isaiah 19-21" },
    //     { value:"Day 281,07-Oct,Isaiah 22-24", label: "Day 281,07-Oct,Isaiah 22-24" },
    //     { value:"Day 282,08-Oct,Isaiah 25-27", label: "Day 282,08-Oct,Isaiah 25-27" },
    //     { value:"Day 283,09-Oct,Isaiah 28-30", label: "Day 283,09-Oct,Isaiah 28-30" },
    //     { value:"Day 284,10-Oct,Isaiah 31-33", label: "Day 284,10-Oct,Isaiah 31-33" },
    //     { value:"Day 285,11-Oct,Isaiah 34-36", label: "Day 285,11-Oct,Isaiah 34-36" },
    //     { value:"Day 286,12-Oct,Isaiah 37-39", label: "Day 286,12-Oct,Isaiah 37-39" },
    //     { value:"Day 287,13-Oct,Isaiah 40-42", label: "Day 287,13-Oct,Isaiah 40-42" },
    //     { value:"Day 288,14-Oct,Isaiah 43-45", label: "Day 288,14-Oct,Isaiah 43-45" },
    //     { value:"Day 289,15-Oct,Isaiah 46-48", label: "Day 289,15-Oct,Isaiah 46-48" },
    //     { value:"Day 290,16-Oct,Isaiah 49-51", label: "Day 290,16-Oct,Isaiah 49-51" },
    //     { value:"Day 291,17-Oct,Isaiah 52-54", label: "Day 291,17-Oct,Isaiah 52-54" },
    //     { value:"Day 292,18-Oct,Isaiah 55-57", label: "Day 292,18-Oct,Isaiah 55-57" },
    //     { value:"Day 293,19-Oct,Isaiah 58-60", label: "Day 293,19-Oct,Isaiah 58-60" },
    //     { value:"Day 294,20-Oct,Isaiah 61-63", label: "Day 294,20-Oct,Isaiah 61-63" },
    //     { value:"Day 295,21-Oct,Isaiah 64-66", label: "Day 295,21-Oct,Isaiah 64-66" },
    //     { value:"Day 296,22-Oct,Jeremiah 1-3", label: "Day 296,22-Oct,Jeremiah 1-3" },
    //     { value:"Day 297,23-Oct,Jeremiah 4-6", label: "Day 297,23-Oct,Jeremiah 4-6" },
    //     { value:"Day 298,24-Oct,Jeremiah 7-9", label: "Day 298,24-Oct,Jeremiah 7-9" },
    //     { value:"Day 299,25-Oct,Jeremiah 10-12", label: "Day 299,25-Oct,Jeremiah 10-12" },
    //     { value:"Day 300,26-Oct,Jeremiah 13-15", label: "Day 300,26-Oct,Jeremiah 13-15" },
    //     { value:"Day 301,27-Oct,Jeremiah 16-18", label: "Day 301,27-Oct,Jeremiah 16-18" },
    //     { value:"Day 302,28-Oct,Jeremiah 19-21", label: "Day 302,28-Oct,Jeremiah 19-21" },
    //     { value:"Day 303,29-Oct,Jeremiah 22-24", label: "Day 303,29-Oct,Jeremiah 22-24" },
    //     { value:"Day 304,30-Oct,Jeremiah 25-27", label: "Day 304,30-Oct,Jeremiah 25-27" },
    //     { value:"Day 305,31-Oct,Jeremiah 28-30", label: "Day 305,31-Oct,Jeremiah 28-30" },
    //     { value:"Day 306,01-Nov,Jeremiah 31-33", label: "Day 306,01-Nov,Jeremiah 31-33" },
    //     { value:"Day 307,02-Nov,Jeremiah 34-36", label: "Day 307,02-Nov,Jeremiah 34-36" },
    //     { value:"Day 308,03-Nov,Jeremiah 37-39", label: "Day 308,03-Nov,Jeremiah 37-39" },
    //     { value:"Day 309,04-Nov,Jeremiah 40-42", label: "Day 309,04-Nov,Jeremiah 40-42" },
    //     { value:"Day 310,05-Nov,Jeremiah 43-45", label: "Day 310,05-Nov,Jeremiah 43-45" },
    //     { value:"Day 311,06-Nov,Jeremiah 46-49", label: "Day 311,06-Nov,Jeremiah 46-49" },
    //     { value:"Day 312,07-Nov,Jeremiah 50-52", label: "Day 312,07-Nov,Jeremiah 50-52" },
    //     { value:"Day 313,08-Nov,Lamentations 1-3", label: "Day 313,08-Nov,Lamentations 1-3" },
    //     { value:"Day 314,09-Nov,Lamentations 4-5", label: "Day 314,09-Nov,Lamentations 4-5" },
    //     { value:"Day 315,10-Nov,Ezekiel 1-3", label: "Day 315,10-Nov,Ezekiel 1-3" },
    //     { value:"Day 316,11-Nov,Ezekiel 4-6", label: "Day 316,11-Nov,Ezekiel 4-6" },
    //     { value:"Day 317,12-Nov,Ezekiel 7-9", label: "Day 317,12-Nov,Ezekiel 7-9" },
    //     { value:"Day 318,13-Nov,Ezekiel 10-12", label: "Day 318,13-Nov,Ezekiel 10-12" },
    //     { value:"Day 319,14-Nov,Ezekiel 13-15", label: "Day 319,14-Nov,Ezekiel 13-15" },
    //     { value:"Day 320,15-Nov,Ezekiel 16-18", label: "Day 320,15-Nov,Ezekiel 16-18" },
    //     { value:"Day 321,16-Nov,Ezekiel 19-21", label: "Day 321,16-Nov,Ezekiel 19-21" },
    //     { value:"Day 322,17-Nov,Ezekiel 22-24", label: "Day 322,17-Nov,Ezekiel 22-24" },
    //     { value:"Day 323,18-Nov,Ezekiel 25-27", label: "Day 323,18-Nov,Ezekiel 25-27" },
    //     { value:"Day 324,19-Nov,Ezekiel 29-30", label: "Day 324,19-Nov,Ezekiel 29-30" },
    //     { value:"Day 325,20-Nov,Ezekiel 31-33", label: "Day 325,20-Nov,Ezekiel 31-33" },
    //     { value:"Day 326,21-Nov,Ezekiel 34-36", label: "Day 326,21-Nov,Ezekiel 34-36" },
    //     { value:"Day 327,22-Nov,Ezekiel 37-39", label: "Day 327,22-Nov,Ezekiel 37-39" },
    //     { value:"Day 328,23-Nov,Ezekiel 40-42", label: "Day 328,23-Nov,Ezekiel 40-42" },
    //     { value:"Day 329,24-Nov,Ezekiel 43-45", label: "Day 329,24-Nov,Ezekiel 43-45" },
    //     { value:"Day 330,25-Nov,Ezekiel 46-48", label: "Day 330,25-Nov,Ezekiel 46-48" },
    //     { value:"Day 331,26-NovDaniel 1-4", label: "Day 331,26-NovDaniel 1-4" },
    //     { value:"Day 332,27-NovDaniel 5-8", label: "Day 332,27-NovDaniel 5-8" },
    //     { value:"Day 333,28-NovDaniel 9-12", label: "Day 333,28-NovDaniel 9-12" },
    //     { value:"Day 334,29-Nov,Hosea 1-4", label: "Day 334,29-Nov,Hosea 1-4" },
    //     { value:"Day 335,30-Nov,Hosea 5-8", label: "Day 335,30-Nov,Hosea 5-8" },
    //     { value:"Day 336,01-Dec,Hosea 9-12", label: "Day 336,01-Dec,Hosea 9-12" },
    //     { value:"Day 337,02-Dec,Hosea 13-14", label: "Day 337,02-Dec,Hosea 13-14" },
    //     { value:"Day 338,03-Dec,Joel 1-3", label: "Day 338,03-Dec,Joel 1-3" },
    //     { value:"Day 339,04-Dec,Amos 1-4", label: "Day 339,04-Dec,Amos 1-4" },
    //     { value:"Day 340,05-Dec,Amos 5-9", label: "Day 340,05-Dec,Amos 5-9" },
    //     { value:"Day 341,06-Dec,Obadiah 1, Jonah 1-4", label: "Day 341,06-Dec,Obadiah 1, Jonah 1-4" },
    //     { value:"Day 342,07-Dec,Micha 1-4", label: "Day 342,07-Dec,Micha 1-4" },
    //     { value:"Day 343,08-Dec,Micha 5-7", label: "Day 343,08-Dec,Micha 5-7" },
    //     { value:"Day 344,09-Dec,Nahum 1-3", label: "Day 344,09-Dec,Nahum 1-3" },
    //     { value:"Day 345,10-Dec,Habakkuk 1-3", label: "Day 345,10-Dec,Habakkuk 1-3" },
    //     { value:"Day 346,11-Dec,Zephaniah 1-3", label: "Day 346,11-Dec,Zephaniah 1-3" },
    //     { value:"Day 347,12-Dec,Haggai 1-2", label: "Day 347,12-Dec,Haggai 1-2" },
    //     { value:"Day 348,13-Dec,Zechariah 1-3", label: "Day 348,13-Dec,Zechariah 1-3" },
    //     { value:"Day 349,14-Dec,Zechariah 4-6", label: "Day 349,14-Dec,Zechariah 4-6" },
    //     { value:"Day 350,15-Dec,Zechariah 7-9", label: "Day 350,15-Dec,Zechariah 7-9" },
    //     { value:"Day 351,16-Dec,Zechariah 10-12", label: "Day 351,16-Dec,Zechariah 10-12" },
    //     { value:"Day 352,17-Dec,Zechariah 13-14", label: "Day 352,17-Dec,Zechariah 13-14" },
    //     { value:"Day 353,18-Dec,Malachi 1-4", label: "Day 353,18-Dec,Malachi 1-4" },
    //     { value:"Day 354,19-Dec,Holiday /Meditate", label: "Day 354,19-Dec,Holiday /Meditate" },
    //     { value:"Day 355,20-Dec,Holiday /Meditate", label: "Day 355,20-Dec,Holiday /Meditate" },
    //     { value:"Day 356,21-Dec,Holiday /Meditate", label: "Day 356,21-Dec,Holiday /Meditate" },
    //     { value:"Day 357,22-Dec,Holiday /Meditate", label: "Day 357,22-Dec,Holiday /Meditate" },
    //     { value:"Day 358,23-Dec,Holiday /Meditate", label: "Day 358,23-Dec,Holiday /Meditate" },
    //     { value:"Day 359,24-Dec,Holiday /Meditate", label: "Day 359,24-Dec,Holiday /Meditate" },
    //     { value:"Day 360,25-Dec,Holiday /Meditate", label: "Day 360,25-Dec,Holiday /Meditate" },
    //     { value:"Day 361,26-Dec,Holiday /Meditate", label: "Day 361,26-Dec,Holiday /Meditate" },
    //     { value:"Day 362,27-Dec,Holiday /Meditate", label: "Day 362,27-Dec,Holiday /Meditate" },
    //     { value:"Day 363,28-Dec,Holiday /Meditate", label: "Day 363,28-Dec,Holiday /Meditate" },
    //     { value:"Day 364,29-Dec,Holiday /Meditate", label: "Day 364,29-Dec,Holiday /Meditate" },
    //     { value:"Day 365,30-Dec,Holiday /Meditate", label: "Day 365,30-Dec,Holiday /Meditate" },
    //     { value:"Day 366,31-Dec,Holiday /Meditate", label: "Day 366,31-Dec,Holiday /Meditate" },

    // ];

    const optionList = [

        { value: "Day 1,01-Jan,Matthew 1-3", label: "Day 1,01-Jan,Matthew 1-3" },
        { value: "Day 2,02-Jan,Matthew 4-6", label: "Day 2,02-Jan,Matthew 4-6" },
        { value: "Day 3,03-Jan,Matthew 7-9", label: "Day 3,03-Jan,Matthew 7-9" },
        { value: "Day 4,04-Jan,Matthew 10-12", label: "Day 4,04-Jan,Matthew 10-12" },
        { value: "Day 5,05-Jan,Matthew 13-15", label: "Day 5,05-Jan,Matthew 13-15" },
        { value: "Day 6,06-Jan,Matthew 16-18", label: "Day 6,06-Jan,Matthew 16-18" },
        { value: "Day 7,07-Jan,Matthew 19-21", label: "Day 7,07-Jan,Matthew 19-21" },
        { value: "Day 8,08-Jan,Matthew 22-24", label: "Day 8,08-Jan,Matthew 22-24" },
        { value: "Day 9,09-Jan,Matthew 25-28", label: "Day 9,09-Jan,Matthew 25-28" },
        { value: "Day 10,10-Jan,Mark 1-3", label: "Day 10,10-Jan,Mark 1-3" },
        { value: "Day 11,11-Jan,Mark 4-6", label: "Day 11,11-Jan,Mark 4-6" },
        { value: "Day 12,12-Jan,Mark 7-9", label: "Day 12,12-Jan,Mark 7-9" },
        { value: "Day 13,13-Jan,Mark 10-12", label: "Day 13,13-Jan,Mark 10-12" },
        { value: "Day 14,14-Jan,Mark 13-16", label: "Day 14,14-Jan,Mark 13-16" },
        { value: "Day 15,15-Jan,Luke 1-3", label: "Day 15,15-Jan,Luke 1-3" },
        { value: "Day 16,16-Jan,Luke 4-6", label: "Day 16,16-Jan,Luke 4-6" },
        { value: "Day 17,17-Jan,Luke 7-9", label: "Day 17,17-Jan,Luke 7-9" },
        { value: "Day 18,18-Jan,Luke 10-12", label: "Day 18,18-Jan,Luke 10-12" },
        { value: "Day 19,19-Jan,Luke 13-15", label: "Day 19,19-Jan,Luke 13-15" },
        { value: "Day 20,20-Jan,Luke 16-18", label: "Day 20,20-Jan,Luke 16-18" },
        { value: "Day 21,21-Jan,Luke 19-21", label: "Day 21,21-Jan,Luke 19-21" },
        { value: "Day 22,22-Jan,Luke 22-24", label: "Day 22,22-Jan,Luke 22-24" },
        { value: "Day 23,23-Jan,John 1-3", label: "Day 23,23-Jan,John 1-3" },
        { value: "Day 24,24-Jan,John 4-6", label: "Day 24,24-Jan,John 4-6" },
        { value: "Day 25,25-Jan,John 7-9", label: "Day 25,25-Jan,John 7-9" },
        { value: "Day 26,26-Jan,John 10-12", label: "Day 26,26-Jan,John 10-12" },
        { value: "Day 27,27-Jan,John 13-15", label: "Day 27,27-Jan,John 13-15" },
        { value: "Day 28,28-Jan,John 16-18", label: "Day 28,28-Jan,John 16-18" },
        { value: "Day 29,29-Jan,John 19-21", label: "Day 29,29-Jan,John 19-21" },
        { value: "Day 30,30-Jan,Acts 1-3", label: "Day 30,30-Jan,Acts 1-3" },
        { value: "Day 31,31-Jan,Acts 4-6", label: "Day 31,31-Jan,Acts 4-6" },
        { value: "Day 32,01-Feb,Acts 7-9", label: "Day 32,01-Feb,Acts 7-9" },
        { value: "Day 33,02-Feb,Acts 10-12", label: "Day 33,02-Feb,Acts 10-12" },
        { value: "Day 34,03-Feb,Acts 13-15", label: "Day 34,03-Feb,Acts 13-15" },
        { value: "Day 35,04-Feb,Acts 16-18", label: "Day 35,04-Feb,Acts 16-18" },
        { value: "Day 36,05-Feb,Acts 19-21", label: "Day 36,05-Feb,Acts 19-21" },
        { value: "Day 37,06-Feb,Acts 22-24", label: "Day 37,06-Feb,Acts 22-24" },
        { value: "Day 38,07-Feb,Acts 25-28", label: "Day 38,07-Feb,Acts 25-28" },
        { value: "Day 39,08-Feb,Romans 1-3", label: "Day 39,08-Feb,Romans 1-3" },
        { value: "Day 40,09-Feb,Romans 4-6", label: "Day 40,09-Feb,Romans 4-6" },
        { value: "Day 41,10-Feb,Romans 7-9", label: "Day 41,10-Feb,Romans 7-9" },
        { value: "Day 42,11-Feb,Romans 10-12", label: "Day 42,11-Feb,Romans 10-12" },
        { value: "Day 43,12-Feb,Romans 13-16", label: "Day 43,12-Feb,Romans 13-16" },
        { value: "Day 44,13-Feb,1 Corinthians 1-3", label: "Day 44,13-Feb,1 Corinthians 1-3" },
        { value: "Day 45,14-Feb,1 Corinthians 4-6", label: "Day 45,14-Feb,1 Corinthians 4-6" },
        { value: "Day 46,15-Feb,1 Corinthians 7-9", label: "Day 46,15-Feb,1 Corinthians 7-9" },
        { value: "Day 47,16-Feb,1 Corinthians 10-12", label: "Day 47,16-Feb,1 Corinthians 10-12" },
        { value: "Day 48,17-Feb,1 Corinthians 13-16", label: "Day 48,17-Feb,1 Corinthians 13-16" },
        { value: "Day 49,18-Feb,2 Corinthians 1-3", label: "Day 49,18-Feb,2 Corinthians 1-3" },
        { value: "Day 50,19-Feb,2 Corinthians 4-6", label: "Day 50,19-Feb,2 Corinthians 4-6" },
        { value: "Day 51,20-Feb,2 Corinthians 7-9", label: "Day 51,20-Feb,2 Corinthians 7-9" },
        { value: "Day 52,21-Feb,2 Corinthians 10-13", label: "Day 52,21-Feb,2 Corinthians 10-13" },
        { value: "Day 53,22-Feb,Galatians 1-3", label: "Day 53,22-Feb,Galatians 1-3" },
        { value: "Day 54,23-Feb,Galatians 4-6", label: "Day 54,23-Feb,Galatians 4-6" },
        { value: "Day 55,24-Feb,Ephesians 1-3", label: "Day 55,24-Feb,Ephesians 1-3" },
        { value: "Day 56,25-Feb,Ephesians 4-6", label: "Day 56,25-Feb,Ephesians 4-6" },
        { value: "Day 57,26-Feb,Philippians 1-4", label: "Day 57,26-Feb,Philippians 1-4" },
        { value: "Day 58,27-Feb,Colossians 1-4", label: "Day 58,27-Feb,Colossians 1-4" },
        { value: "Day 59,28-Feb,1 Thessalonians 1-3", label: "Day 59,28-Feb,1 Thessalonians 1-3" },
        { value: "Day 60,29-Feb,1 Thessalonians 4-5", label: "Day 60,29-Feb,1 Thessalonians 4-5" },
        { value: "Day 61,01-Mar,2 Thessalonians 1-3", label: "Day 61,01-Mar,2 Thessalonians 1-3" },
        { value: "Day 62,02-Mar,1 Timothy 1-3", label: "Day 62,02-Mar,1 Timothy 1-3" },
        { value: "Day 63,03-Mar,1 Timothy 4-6", label: "Day 63,03-Mar,1 Timothy 4-6" },
        { value: "Day 64,04-Mar,2 Timothy 1-4", label: "Day 64,04-Mar,2 Timothy 1-4" },
        { value: "Day 65,05-Mar,Titus 1-3", label: "Day 65,05-Mar,Titus 1-3" },
        { value: "Day 66,06-Mar,Philemon 1", label: "Day 66,06-Mar,Philemon 1" },
        { value: "Day 67,07-Mar,Hebrews 1-3", label: "Day 67,07-Mar,Hebrews 1-3" },
        { value: "Day 68,08-Mar,Hebrews 4-6", label: "Day 68,08-Mar,Hebrews 4-6" },
        { value: "Day 69,09-Mar,Hebrews 7-9", label: "Day 69,09-Mar,Hebrews 7-9" },
        { value: "Day 70,10-Mar,Hebrews 10-13", label: "Day 70,10-Mar,Hebrews 10-13" },
        { value: "Day 71,11-Mar,James 1-3", label: "Day 71,11-Mar,James 1-3" },
        { value: "Day 72,12-Mar,James 4-5", label: "Day 72,12-Mar,James 4-5" },
        { value: "Day 73,13-Mar,1 Peter 1-3", label: "Day 73,13-Mar,1 Peter 1-3" },
        { value: "Day 74,14-Mar,1 Peter 4-5", label: "Day 74,14-Mar,1 Peter 4-5" },
        { value: "Day 75,15-Mar,2 Peter 1-3", label: "Day 75,15-Mar,2 Peter 1-3" },
        { value: "Day 76,16-Mar,1 John 1-3", label: "Day 76,16-Mar,1 John 1-3" },
        { value: "Day 77,17-Mar,1 John 4-5", label: "Day 77,17-Mar,1 John 4-5" },
        { value: "Day 78,18-Mar,2 John 1, 3 John 1, Jude 1", label: "Day 78,18-Mar,2 John 1, 3 John 1, Jude 1" },
        { value: "Day 79,19-Mar,Revelation 1-3", label: "Day 79,19-Mar,Revelation 1-3" },
        { value: "Day 80,20-Mar,Revelation 4-6", label: "Day 80,20-Mar,Revelation 4-6" },
        { value: "Day 81,21-Mar,Revelation 7-9", label: "Day 81,21-Mar,Revelation 7-9" },
        { value: "Day 82,22-Mar,Revelation 10-12", label: "Day 82,22-Mar,Revelation 10-12" },
        { value: "Day 83,23-Mar,Revelation 13-15", label: "Day 83,23-Mar,Revelation 13-15" },
        { value: "Day 84,24-Mar,Revelation 16-18", label: "Day 84,24-Mar,Revelation 16-18" },
        { value: "Day 85,25-Mar,Revelation 19-22", label: "Day 85,25-Mar,Revelation 19-22" },
        { value: "Day 86,26-Mar,Genesis 1-3", label: "Day 86,26-Mar,Genesis 1-3" },
        { value: "Day 87,27-Mar,Genesis 4-6", label: "Day 87,27-Mar,Genesis 4-6" },
        { value: "Day 88,28-Mar,Genesis 7-9", label: "Day 88,28-Mar,Genesis 7-9" },
        { value: "Day 89,29-Mar,Genesis 10-12", label: "Day 89,29-Mar,Genesis 10-12" },
        { value: "Day 90,30-Mar,Genesis 13-15", label: "Day 90,30-Mar,Genesis 13-15" },
        { value: "Day 91,31-Mar,Genesis 16-18", label: "Day 91,31-Mar,Genesis 16-18" },
        { value: "Day 92,01-Apr,Genesis 19-21", label: "Day 92,01-Apr,Genesis 19-21" },
        { value: "Day 93,02-Apr,Genesis 22-24", label: "Day 93,02-Apr,Genesis 22-24" },
        { value: "Day 94,03-Apr,Genesis 25-27", label: "Day 94,03-Apr,Genesis 25-27" },
        { value: "Day 95,04-Apr,Genesis 28-30", label: "Day 95,04-Apr,Genesis 28-30" },
        { value: "Day 96,05-Apr,Genesis 31-33", label: "Day 96,05-Apr,Genesis 31-33" },
        { value: "Day 97,06-Apr,Genesis 34-36", label: "Day 97,06-Apr,Genesis 34-36" },
        { value: "Day 98,07-Apr,Genesis 37-39", label: "Day 98,07-Apr,Genesis 37-39" },
        { value: "Day 99,08-Apr,Genesis 40-42", label: "Day 99,08-Apr,Genesis 40-42" },
        { value: "Day 100,09-Apr,Genesis 43-45", label: "Day 100,09-Apr,Genesis 43-45" },
        { value: "Day 101,10-Apr,Genesis 46-50", label: "Day 101,10-Apr,Genesis 46-50" },
        { value: "Day 102,11-Apr,Exodus 1-3", label: "Day 102,11-Apr,Exodus 1-3" },
        { value: "Day 103,12-Apr,Exodus 4-6", label: "Day 103,12-Apr,Exodus 4-6" },
        { value: "Day 104,13-Apr,Exodus 7-9", label: "Day 104,13-Apr,Exodus 7-9" },
        { value: "Day 105,14-Apr,Exodus 10-12", label: "Day 105,14-Apr,Exodus 10-12" },
        { value: "Day 106,15-Apr,Exodus 13-15", label: "Day 106,15-Apr,Exodus 13-15" },
        { value: "Day 107,16-Apr,Exodus 16-18", label: "Day 107,16-Apr,Exodus 16-18" },
        { value: "Day 108,17-Apr,Exodus 19-21", label: "Day 108,17-Apr,Exodus 19-21" },
        { value: "Day 109,18-Apr,Exodus 22-24", label: "Day 109,18-Apr,Exodus 22-24" },
        { value: "Day 110,19-Apr,Exodus 25-27", label: "Day 110,19-Apr,Exodus 25-27" },
        { value: "Day 111,20-Apr,Exodus 28-30", label: "Day 111,20-Apr,Exodus 28-30" },
        { value: "Day 112,21-Apr,Exodus 31-33", label: "Day 112,21-Apr,Exodus 31-33" },
        { value: "Day 113,22-Apr,Exodus 34-36", label: "Day 113,22-Apr,Exodus 34-36" },
        { value: "Day 114,23-Apr,Exodus 37-40", label: "Day 114,23-Apr,Exodus 37-40" },
        { value: "Day 115,24-Apr,Leviticus 1-3", label: "Day 115,24-Apr,Leviticus 1-3" },
        { value: "Day 116,25-Apr,Leviticus 4-6", label: "Day 116,25-Apr,Leviticus 4-6" },
        { value: "Day 117,26-Apr,Leviticus 7-9", label: "Day 117,26-Apr,Leviticus 7-9" },
        { value: "Day 118,27-Apr,Leviticus 10-12", label: "Day 118,27-Apr,Leviticus 10-12" },
        { value: "Day 119,28-Apr,Leviticus 13-15", label: "Day 119,28-Apr,Leviticus 13-15" },
        { value: "Day 120,29-Apr,Leviticus 16-18", label: "Day 120,29-Apr,Leviticus 16-18" },
        { value: "Day 121,30-Apr,Leviticus 19-21", label: "Day 121,30-Apr,Leviticus 19-21" },
        { value: "Day 122,01-May,Leviticus 22-24", label: "Day 122,01-May,Leviticus 22-24" },
        { value: "Day 123,02-May,Leviticus 25-27", label: "Day 123,02-May,Leviticus 25-27" },
        { value: "Day 124,03-May,Numbers 1-3", label: "Day 124,03-May,Numbers 1-3" },
        { value: "Day 125,04-May,Numbers 4-6", label: "Day 125,04-May,Numbers 4-6" },
        { value: "Day 126,05-May,Numbers 7-9", label: "Day 126,05-May,Numbers 7-9" },
        { value: "Day 127,06-May,Numbers 10-12", label: "Day 127,06-May,Numbers 10-12" },
        { value: "Day 128,07-May,Numbers 13-15", label: "Day 128,07-May,Numbers 13-15" },
        { value: "Day 129,08-May,Numbers 16-18", label: "Day 129,08-May,Numbers 16-18" },
        { value: "Day 130,09-May,Numbers 19-21", label: "Day 130,09-May,Numbers 19-21" },
        { value: "Day 131,10-May,Numbers 22-24", label: "Day 131,10-May,Numbers 22-24" },
        { value: "Day 132,11-May,Numbers 25-27", label: "Day 132,11-May,Numbers 25-27" },
        { value: "Day 133,12-May,Numbers 28-30", label: "Day 133,12-May,Numbers 28-30" },
        { value: "Day 134,13-May,Numbers 31-33", label: "Day 134,13-May,Numbers 31-33" },
        { value: "Day 135,14-May,Numbers 34-36", label: "Day 135,14-May,Numbers 34-36" },
        { value: "Day 136,15-May,Deuteronomy 1-3", label: "Day 136,15-May,Deuteronomy 1-3" },
        { value: "Day 137,16-May,Deuteronomy 4-6", label: "Day 137,16-May,Deuteronomy 4-6" },
        { value: "Day 138,17-May,Deuteronomy 7-9", label: "Day 138,17-May,Deuteronomy 7-9" },
        { value: "Day 139,18-May,Deuteronomy 10-12", label: "Day 139,18-May,Deuteronomy 10-12" },
        { value: "Day 140,19-May,Deuteronomy 13-15", label: "Day 140,19-May,Deuteronomy 13-15" },
        { value: "Day 141,20-May,Deuteronomy 16-18", label: "Day 141,20-May,Deuteronomy 16-18" },
        { value: "Day 142,21-May,Deuteronomy 19-21", label: "Day 142,21-May,Deuteronomy 19-21" },
        { value: "Day 143,22-May,Deuteronomy 22-24", label: "Day 143,22-May,Deuteronomy 22-24" },
        { value: "Day 144,23-May,Deuteronomy 25-27", label: "Day 144,23-May,Deuteronomy 25-27" },
        { value: "Day 145,24-May,Deuteronomy 28-30", label: "Day 145,24-May,Deuteronomy 28-30" },
        { value: "Day 146,25-May,Deuteronomy 31-43", label: "Day 146,25-May,Deuteronomy 31-43" },
        { value: "Day 147,26-May,Joshua 1-3", label: "Day 147,26-May,Joshua 1-3" },
        { value: "Day 148,27-May,Joshua 4-6", label: "Day 148,27-May,Joshua 4-6" },
        { value: "Day 149,28-May,Joshua 7-9", label: "Day 149,28-May,Joshua 7-9" },
        { value: "Day 150,29-May,Joshua 10-12", label: "Day 150,29-May,Joshua 10-12" },
        { value: "Day 151,30-May,Joshua 13-15", label: "Day 151,30-May,Joshua 13-15" },
        { value: "Day 152,31-May,Joshua 16-18", label: "Day 152,31-May,Joshua 16-18" },
        { value: "Day 153,01-Jun,Joshua 19-21", label: "Day 153,01-Jun,Joshua 19-21" },
        { value: "Day 154,02-Jun,Joshua 22-24", label: "Day 154,02-Jun,Joshua 22-24" },
        { value: "Day 155,03-Jun,Judges 1-3", label: "Day 155,03-Jun,Judges 1-3" },
        { value: "Day 156,04-Jun,Judges 4-6", label: "Day 156,04-Jun,Judges 4-6" },
        { value: "Day 157,05-Jun,Judges 7-9", label: "Day 157,05-Jun,Judges 7-9" },
        { value: "Day 158,06-Jun,Judges 10-12", label: "Day 158,06-Jun,Judges 10-12" },
        { value: "Day 159,07-Jun,Judges 13-15", label: "Day 159,07-Jun,Judges 13-15" },
        { value: "Day 160,08-Jun,Judges 16-18", label: "Day 160,08-Jun,Judges 16-18" },
        { value: "Day 161,09-Jun,Judges 19-21", label: "Day 161,09-Jun,Judges 19-21" },
        { value: "Day 162,10-Jun,Ruth 1-4", label: "Day 162,10-Jun,Ruth 1-4" },
        { value: "Day 163,11-Jun,1 Samuel 1-3", label: "Day 163,11-Jun,1 Samuel 1-3" },
        { value: "Day 164,12-Jun,1 Samuel 4-6", label: "Day 164,12-Jun,1 Samuel 4-6" },
        { value: "Day 165,13-Jun,1 Samuel 7-9", label: "Day 165,13-Jun,1 Samuel 7-9" },
        { value: "Day 166,14-Jun,1 Samuel 10-12", label: "Day 166,14-Jun,1 Samuel 10-12" },
        { value: "Day 167,15-Jun,1 Samuel 13-15", label: "Day 167,15-Jun,1 Samuel 13-15" },
        { value: "Day 168,16-Jun,1 Samuel 16-18", label: "Day 168,16-Jun,1 Samuel 16-18" },
        { value: "Day 169,17-Jun,1 Samuel 19-21", label: "Day 169,17-Jun,1 Samuel 19-21" },
        { value: "Day 170,18-Jun,1 Samuel 22-24", label: "Day 170,18-Jun,1 Samuel 22-24" },
        { value: "Day 171,19-Jun,1 Samuel 25-27", label: "Day 171,19-Jun,1 Samuel 25-27" },
        { value: "Day 172,20-Jun,1 Samuel 28-31", label: "Day 172,20-Jun,1 Samuel 28-31" },
        { value: "Day 173,21-Jun,2 Samuel 1-3", label: "Day 173,21-Jun,2 Samuel 1-3" },
        { value: "Day 174,22-Jun,2 Samuel 4-6", label: "Day 174,22-Jun,2 Samuel 4-6" },
        { value: "Day 175,23-Jun,2 Samuel 7-9", label: "Day 175,23-Jun,2 Samuel 7-9" },
        { value: "Day 176,24-Jun,2 Samuel 10-12", label: "Day 176,24-Jun,2 Samuel 10-12" },
        { value: "Day 177,25-Jun,2 Samuel 13-15", label: "Day 177,25-Jun,2 Samuel 13-15" },
        { value: "Day 178,26-Jun,2 Samuel 16-18", label: "Day 178,26-Jun,2 Samuel 16-18" },
        { value: "Day 179,27-Jun,2 Samuel 19-21", label: "Day 179,27-Jun,2 Samuel 19-21" },
        { value: "Day 180,28-Jun,2 Samuel 22-24", label: "Day 180,28-Jun,2 Samuel 22-24" },
        { value: "Day 181,29-Jun,1 Kings 1-3", label: "Day 181,29-Jun,1 Kings 1-3" },
        { value: "Day 182,30-Jun,1 Kings 4-6", label: "Day 182,30-Jun,1 Kings 4-6" },
        { value: "Day 183,01-Jul,1 Kings 7-9", label: "Day 183,01-Jul,1 Kings 7-9" },
        { value: "Day 184,02-Jul,1 Kings 10-12", label: "Day 184,02-Jul,1 Kings 10-12" },
        { value: "Day 185,03-Jul,1 Kings 13-15", label: "Day 185,03-Jul,1 Kings 13-15" },
        { value: "Day 186,04-Jul,1 Kings 16-18", label: "Day 186,04-Jul,1 Kings 16-18" },
        { value: "Day 187,05-Jul,1 Kings 19-22", label: "Day 187,05-Jul,1 Kings 19-22" },
        { value: "Day 188,06-Jul,2 Kings 1-3", label: "Day 188,06-Jul,2 Kings 1-3" },
        { value: "Day 189,07-Jul,2 Kings 4-6", label: "Day 189,07-Jul,2 Kings 4-6" },
        { value: "Day 190,08-Jul,2 Kings 7-9", label: "Day 190,08-Jul,2 Kings 7-9" },
        { value: "Day 191,09-Jul,2 Kings 10-12", label: "Day 191,09-Jul,2 Kings 10-12" },
        { value: "Day 192,10-Jul,2 Kings 13-15", label: "Day 192,10-Jul,2 Kings 13-15" },
        { value: "Day 193,11-Jul,2 Kings 16-18", label: "Day 193,11-Jul,2 Kings 16-18" },
        { value: "Day 194,12-Jul,2 Kings 19-21", label: "Day 194,12-Jul,2 Kings 19-21" },
        { value: "Day 195,13-Jul,2 Kings 22-25", label: "Day 195,13-Jul,2 Kings 22-25" },
        { value: "Day 196,14-Jul,1 Chronicles 1-3", label: "Day 196,14-Jul,1 Chronicles 1-3" },
        { value: "Day 197,15-Jul,1 Chronicles 4-6", label: "Day 197,15-Jul,1 Chronicles 4-6" },
        { value: "Day 198,16-Jul,1 Chronicles 7-9", label: "Day 198,16-Jul,1 Chronicles 7-9" },
        { value: "Day 199,17-Jul,1 Chronicles 10-12", label: "Day 199,17-Jul,1 Chronicles 10-12" },
        { value: "Day 200,18-Jul,1 Chronicles 13-15", label: "Day 200,18-Jul,1 Chronicles 13-15" },
        { value: "Day 201,19-Jul,1 Chronicles 16-18", label: "Day 201,19-Jul,1 Chronicles 16-18" },
        { value: "Day 202,20-Jul,1 Chronicles 19-21", label: "Day 202,20-Jul,1 Chronicles 19-21" },
        { value: "Day 203,21-Jul,1 Chronicles 22-24", label: "Day 203,21-Jul,1 Chronicles 22-24" },
        { value: "Day 204,22-Jul,1 Chronicles 25-27", label: "Day 204,22-Jul,1 Chronicles 25-27" },
        { value: "Day 205,23-Jul,1 Chronicles 28-29", label: "Day 205,23-Jul,1 Chronicles 28-29" },
        { value: "Day 206,24-Jul,2 Chronicles 1-3", label: "Day 206,24-Jul,2 Chronicles 1-3" },
        { value: "Day 207,25-Jul,2 Chronicles 4-6", label: "Day 207,25-Jul,2 Chronicles 4-6" },
        { value: "Day 208,26-Jul,2 Chronicles 7-9", label: "Day 208,26-Jul,2 Chronicles 7-9" },
        { value: "Day 209,27-Jul,2 Chronicles 10-12", label: "Day 209,27-Jul,2 Chronicles 10-12" },
        { value: "Day 210,28-Jul,2 Chronicles 13-15", label: "Day 210,28-Jul,2 Chronicles 13-15" },
        { value: "Day 211,29-Jul,2 Chronicles 16-18", label: "Day 211,29-Jul,2 Chronicles 16-18" },
        { value: "Day 212,30-Jul,2 Chronicles 19-21", label: "Day 212,30-Jul,2 Chronicles 19-21" },
        { value: "Day 213,31-Jul,2 Chronicles 22-24", label: "Day 213,31-Jul,2 Chronicles 22-24" },
        { value: "Day 214,01-Aug,2 Chronicles 25-27", label: "Day 214,01-Aug,2 Chronicles 25-27" },
        { value: "Day 215,02-Aug,2 Chronicles 28-30", label: "Day 215,02-Aug,2 Chronicles 28-30" },
        { value: "Day 216,03-Aug,2 Chronicles 31-33", label: "Day 216,03-Aug,2 Chronicles 31-33" },
        { value: "Day 217,04-Aug,2 Chronicles 34-36", label: "Day 217,04-Aug,2 Chronicles 34-36" },
        { value: "Day 218,05-Aug,Ezra 1-3", label: "Day 218,05-Aug,Ezra 1-3" },
        { value: "Day 219,06-Aug,Ezra 4-6", label: "Day 219,06-Aug,Ezra 4-6" },
        { value: "Day 220,07-Aug,Ezra 7-10", label: "Day 220,07-Aug,Ezra 7-10" },
        { value: "Day 221,08-Aug,Nehemiah 1-3", label: "Day 221,08-Aug,Nehemiah 1-3" },
        { value: "Day 222,09-Aug,Nehemiah 4-6", label: "Day 222,09-Aug,Nehemiah 4-6" },
        { value: "Day 223,10-Aug,Nehemiah 7-9", label: "Day 223,10-Aug,Nehemiah 7-9" },
        { value: "Day 224,11-Aug,Nehemiah 10-13", label: "Day 224,11-Aug,Nehemiah 10-13" },
        { value: "Day 225,12-Aug,Esther 1-3", label: "Day 225,12-Aug,Esther 1-3" },
        { value: "Day 226,13-Aug,Esther 4-6", label: "Day 226,13-Aug,Esther 4-6" },
        { value: "Day 227,14-Aug,Esther 7-10", label: "Day 227,14-Aug,Esther 7-10" },
        { value: "Day 228,15-Aug,Job 1-3", label: "Day 228,15-Aug,Job 1-3" },
        { value: "Day 229,16-Aug,Job 4-6", label: "Day 229,16-Aug,Job 4-6" },
        { value: "Day 230,17-Aug,Job 7-9", label: "Day 230,17-Aug,Job 7-9" },
        { value: "Day 231,18-Aug,Job 10-12", label: "Day 231,18-Aug,Job 10-12" },
        { value: "Day 232,19-Aug,Job 13-15", label: "Day 232,19-Aug,Job 13-15" },
        { value: "Day 233,20-Aug,Job 16-18", label: "Day 233,20-Aug,Job 16-18" },
        { value: "Day 234,21-Aug,Job 19-21", label: "Day 234,21-Aug,Job 19-21" },
        { value: "Day 235,22-Aug,Job 22-24", label: "Day 235,22-Aug,Job 22-24" },
        { value: "Day 236,23-Aug,Job 25-27", label: "Day 236,23-Aug,Job 25-27" },
        { value: "Day 237,24-Aug,Job 28-30", label: "Day 237,24-Aug,Job 28-30" },
        { value: "Day 238,25-Aug,Job 31-33", label: "Day 238,25-Aug,Job 31-33" },
        { value: "Day 239,26-Aug,Job 34-36", label: "Day 239,26-Aug,Job 34-36" },
        { value: "Day 240,27-Aug,Job 37-39", label: "Day 240,27-Aug,Job 37-39" },
        { value: "Day 241,28-Aug,Job 40-42", label: "Day 241,28-Aug,Job 40-42" },
        { value: "Day 242,29-Aug,Psalms 1-8", label: "Day 242,29-Aug,Psalms 1-8" },
        { value: "Day 243,30-Aug,Psalms 9-16", label: "Day 243,30-Aug,Psalms 9-16" },
        { value: "Day 244,31-Aug,Psalms 17-24", label: "Day 244,31-Aug,Psalms 17-24" },
        { value: "Day 245,01-Sep,Psalms 25-32", label: "Day 245,01-Sep,Psalms 25-32" },
        { value: "Day 246,02-Sep,Psalms 33-40", label: "Day 246,02-Sep,Psalms 33-40" },
        { value: "Day 247,03-Sep,Psalms 41-48", label: "Day 247,03-Sep,Psalms 41-48" },
        { value: "Day 248,04-Sep,Psalms 49-56", label: "Day 248,04-Sep,Psalms 49-56" },
        { value: "Day 249,05-Sep,Psalms 57-64", label: "Day 249,05-Sep,Psalms 57-64" },
        { value: "Day 250,06-Sep,Psalms 65-72", label: "Day 250,06-Sep,Psalms 65-72" },
        { value: "Day 251,07-Sep,Psalms 73-80", label: "Day 251,07-Sep,Psalms 73-80" },
        { value: "Day 252,08-Sep,Psalms 81-88", label: "Day 252,08-Sep,Psalms 81-88" },
        { value: "Day 253,09-Sep,Psalms 89-96", label: "Day 253,09-Sep,Psalms 89-96" },
        { value: "Day 254,10-Sep,Psalms 97-104", label: "Day 254,10-Sep,Psalms 97-104" },
        { value: "Day 255,11-Sep,Psalms 105-112", label: "Day 255,11-Sep,Psalms 105-112" },
        { value: "Day 256,12-Sep,Psalms 113-118", label: "Day 256,12-Sep,Psalms 113-118" },
        { value: "Day 257,13-Sep,Psalms 119", label: "Day 257,13-Sep,Psalms 119" },
        { value: "Day 258,14-Sep,Psalms 120-130", label: "Day 258,14-Sep,Psalms 120-130" },
        { value: "Day 259,15-Sep,Psalms 131-140", label: "Day 259,15-Sep,Psalms 131-140" },
        { value: "Day 260,16-Sep,Psalms 141-150", label: "Day 260,16-Sep,Psalms 141-150" },
        { value: "Day 261,17-Sep,Proverbs 1-3", label: "Day 261,17-Sep,Proverbs 1-3" },
        { value: "Day 262,18-Sep,Proverbs 4-6", label: "Day 262,18-Sep,Proverbs 4-6" },
        { value: "Day 263,19-Sep,Proverbs 7-9", label: "Day 263,19-Sep,Proverbs 7-9" },
        { value: "Day 264,20-Sep,Proverbs 10-12", label: "Day 264,20-Sep,Proverbs 10-12" },
        { value: "Day 265,21-Sep,Proverbs 13-15", label: "Day 265,21-Sep,Proverbs 13-15" },
        { value: "Day 266,22-Sep,Proverbs 16-18", label: "Day 266,22-Sep,Proverbs 16-18" },
        { value: "Day 267,23-Sep,Proverbs 19-21", label: "Day 267,23-Sep,Proverbs 19-21" },
        { value: "Day 268,24-Sep,Proverbs 22-24", label: "Day 268,24-Sep,Proverbs 22-24" },
        { value: "Day 269,25-Sep,Proverbs 25-27", label: "Day 269,25-Sep,Proverbs 25-27" },
        { value: "Day 270,26-Sep,Proverbs 28-31", label: "Day 270,26-Sep,Proverbs 28-31" },
        { value: "Day 271,27-Sep,Ecclesiastes 1-4", label: "Day 271,27-Sep,Ecclesiastes 1-4" },
        { value: "Day 272,28-Sep,Ecclesiastes 5-8", label: "Day 272,28-Sep,Ecclesiastes 5-8" },
        { value: "Day 273,29-Sep,Ecclesiastes 9-12", label: "Day 273,29-Sep,Ecclesiastes 9-12" },
        { value: "Day 274,30-Sep,Song of Solomon 1-8", label: "Day 274,30-Sep,Song of Solomon 1-8" },
        { value: "Day 275,01-Oct,Isaiah 1-3", label: "Day 275,01-Oct,Isaiah 1-3" },
        { value: "Day 276,02-Oct,Isaiah 4-6", label: "Day 276,02-Oct,Isaiah 4-6" },
        { value: "Day 277,03-Oct,Isaiah 7-9", label: "Day 277,03-Oct,Isaiah 7-9" },
        { value: "Day 278,04-Oct,Isaiah 10-12", label: "Day 278,04-Oct,Isaiah 10-12" },
        { value: "Day 279,05-Oct,Isaiah 13-15", label: "Day 279,05-Oct,Isaiah 13-15" },
        { value: "Day 280,06-Oct,Isaiah 16-18", label: "Day 280,06-Oct,Isaiah 16-18" },
        { value: "Day 281,07-Oct,Isaiah 19-21", label: "Day 281,07-Oct,Isaiah 19-21" },
        { value: "Day 282,08-Oct,Isaiah 22-24", label: "Day 282,08-Oct,Isaiah 22-24" },
        { value: "Day 283,09-Oct,Isaiah 25-27", label: "Day 283,09-Oct,Isaiah 25-27" },
        { value: "Day 284,10-Oct,Isaiah 28-30", label: "Day 284,10-Oct,Isaiah 28-30" },
        { value: "Day 285,11-Oct,Isaiah 31-33", label: "Day 285,11-Oct,Isaiah 31-33" },
        { value: "Day 286,12-Oct,Isaiah 34-36", label: "Day 286,12-Oct,Isaiah 34-36" },
        { value: "Day 287,13-Oct,Isaiah 37-39", label: "Day 287,13-Oct,Isaiah 37-39" },
        { value: "Day 288,14-Oct,Isaiah 40-42", label: "Day 288,14-Oct,Isaiah 40-42" },
        { value: "Day 289,15-Oct,Isaiah 43-45", label: "Day 289,15-Oct,Isaiah 43-45" },
        { value: "Day 290,16-Oct,Isaiah 46-48", label: "Day 290,16-Oct,Isaiah 46-48" },
        { value: "Day 291,17-Oct,Isaiah 49-51", label: "Day 291,17-Oct,Isaiah 49-51" },
        { value: "Day 292,18-Oct,Isaiah 52-54", label: "Day 292,18-Oct,Isaiah 52-54" },
        { value: "Day 293,19-Oct,Isaiah 55-57", label: "Day 293,19-Oct,Isaiah 55-57" },
        { value: "Day 294,20-Oct,Isaiah 58-60", label: "Day 294,20-Oct,Isaiah 58-60" },
        { value: "Day 295,21-Oct,Isaiah 61-63", label: "Day 295,21-Oct,Isaiah 61-63" },
        { value: "Day 296,22-Oct,Isaiah 64-66", label: "Day 296,22-Oct,Isaiah 64-66" },
        { value: "Day 297,23-Oct,Jeremiah 1-3", label: "Day 297,23-Oct,Jeremiah 1-3" },
        { value: "Day 298,24-Oct,Jeremiah 4-6", label: "Day 298,24-Oct,Jeremiah 4-6" },
        { value: "Day 299,25-Oct,Jeremiah 7-9", label: "Day 299,25-Oct,Jeremiah 7-9" },
        { value: "Day 300,26-Oct,Jeremiah 10-12", label: "Day 300,26-Oct,Jeremiah 10-12" },
        { value: "Day 301,27-Oct,Jeremiah 13-15", label: "Day 301,27-Oct,Jeremiah 13-15" },
        { value: "Day 302,28-Oct,Jeremiah 16-18", label: "Day 302,28-Oct,Jeremiah 16-18" },
        { value: "Day 303,29-Oct,Jeremiah 19-21", label: "Day 303,29-Oct,Jeremiah 19-21" },
        { value: "Day 304,30-Oct,Jeremiah 22-24", label: "Day 304,30-Oct,Jeremiah 22-24" },
        { value: "Day 305,31-Oct,Jeremiah 25-27", label: "Day 305,31-Oct,Jeremiah 25-27" },
        { value: "Day 306,01-Nov,Jeremiah 28-30", label: "Day 306,01-Nov,Jeremiah 28-30" },
        { value: "Day 307,02-Nov,Jeremiah 31-33", label: "Day 307,02-Nov,Jeremiah 31-33" },
        { value: "Day 308,03-Nov,Jeremiah 34-36", label: "Day 308,03-Nov,Jeremiah 34-36" },
        { value: "Day 309,04-Nov,Jeremiah 37-39", label: "Day 309,04-Nov,Jeremiah 37-39" },
        { value: "Day 310,05-Nov,Jeremiah 40-42", label: "Day 310,05-Nov,Jeremiah 40-42" },
        { value: "Day 311,06-Nov,Jeremiah 43-45", label: "Day 311,06-Nov,Jeremiah 43-45" },
        { value: "Day 312,07-Nov,Jeremiah 46-49", label: "Day 312,07-Nov,Jeremiah 46-49" },
        { value: "Day 313,08-Nov,Jeremiah 50-52", label: "Day 313,08-Nov,Jeremiah 50-52" },
        { value: "Day 314,09-Nov,Lamentations 1-3", label: "Day 314,09-Nov,Lamentations 1-3" },
        { value: "Day 315,10-Nov,Lamentations 4-5", label: "Day 315,10-Nov,Lamentations 4-5" },
        { value: "Day 316,11-Nov,Ezekiel 1-3", label: "Day 316,11-Nov,Ezekiel 1-3" },
        { value: "Day 317,12-Nov,Ezekiel 4-6", label: "Day 317,12-Nov,Ezekiel 4-6" },
        { value: "Day 318,13-Nov,Ezekiel 7-9", label: "Day 318,13-Nov,Ezekiel 7-9" },
        { value: "Day 319,14-Nov,Ezekiel 10-12", label: "Day 319,14-Nov,Ezekiel 10-12" },
        { value: "Day 320,15-Nov,Ezekiel 13-15", label: "Day 320,15-Nov,Ezekiel 13-15" },
        { value: "Day 321,16-Nov,Ezekiel 16-18", label: "Day 321,16-Nov,Ezekiel 16-18" },
        { value: "Day 322,17-Nov,Ezekiel 19-21", label: "Day 322,17-Nov,Ezekiel 19-21" },
        { value: "Day 323,18-Nov,Ezekiel 22-24", label: "Day 323,18-Nov,Ezekiel 22-24" },
        { value: "Day 324,19-Nov,Ezekiel 25-27", label: "Day 324,19-Nov,Ezekiel 25-27" },
        { value: "Day 325,20-Nov,Ezekiel 29-30", label: "Day 325,20-Nov,Ezekiel 29-30" },
        { value: "Day 326,21-Nov,Ezekiel 31-33", label: "Day 326,21-Nov,Ezekiel 31-33" },
        { value: "Day 327,22-Nov,Ezekiel 34-36", label: "Day 327,22-Nov,Ezekiel 34-36" },
        { value: "Day 328,23-Nov,Ezekiel 37-39", label: "Day 328,23-Nov,Ezekiel 37-39" },
        { value: "Day 329,24-Nov,Ezekiel 40-42", label: "Day 329,24-Nov,Ezekiel 40-42" },
        { value: "Day 330,25-Nov,Ezekiel 43-45", label: "Day 330,25-Nov,Ezekiel 43-45" },
        { value: "Day 331,26-Nov,Ezekiel 46-48", label: "Day 331,26-Nov,Ezekiel 46-48" },
        { value: "Day 332,27-Nov,Daniel 1-4", label: "Day 332,27-Nov,Daniel 1-4" },
        { value: "Day 333,28-Nov,Daniel 5-8", label: "Day 333,28-Nov,Daniel 5-8" },
        { value: "Day 334,29-Nov,Daniel 9-12", label: "Day 334,29-Nov,Daniel 9-12" },
        { value: "Day 335,30-Nov,Hosea 1-4", label: "Day 335,30-Nov,Hosea 1-4" },
        { value: "Day 336,01-Dec,Hosea 5-8", label: "Day 336,01-Dec,Hosea 5-8" },
        { value: "Day 337,02-Dec,Hosea 9-12", label: "Day 337,02-Dec,Hosea 9-12" },
        { value: "Day 338,03-Dec,Hosea 13-14", label: "Day 338,03-Dec,Hosea 13-14" },
        { value: "Day 339,04-Dec,Joel 1-3", label: "Day 339,04-Dec,Joel 1-3" },
        { value: "Day 340,05-Dec,Amos 1-4", label: "Day 340,05-Dec,Amos 1-4" },
        { value: "Day 341,06-Dec,Amos 5-9", label: "Day 341,06-Dec,Amos 5-9" },
        { value: "Day 342,07-Dec,Obadiah 1, Jonah 1-4", label: "Day 342,07-Dec,Obadiah 1, Jonah 1-4" },
        { value: "Day 343,08-Dec,Micha 1-4", label: "Day 343,08-Dec,Micha 1-4" },
        { value: "Day 344,09-Dec,Micha 5-7", label: "Day 344,09-Dec,Micha 5-7" },
        { value: "Day 345,10-Dec,Nahum 1-3", label: "Day 345,10-Dec,Nahum 1-3" },
        { value: "Day 346,11-Dec,Habakkuk 1-3", label: "Day 346,11-Dec,Habakkuk 1-3" },
        { value: "Day 347,12-Dec,Zephaniah 1-3", label: "Day 347,12-Dec,Zephaniah 1-3" },
        { value: "Day 348,13-Dec,Haggai 1-2", label: "Day 348,13-Dec,Haggai 1-2" },
        { value: "Day 349,14-Dec,Zechariah 1-3", label: "Day 349,14-Dec,Zechariah 1-3" },
        { value: "Day 350,15-Dec,Zechariah 4-6", label: "Day 350,15-Dec,Zechariah 4-6" },
        { value: "Day 351,16-Dec,Zechariah 7-9", label: "Day 351,16-Dec,Zechariah 7-9" },
        { value: "Day 352,17-Dec,Zechariah 10-12", label: "Day 352,17-Dec,Zechariah 10-12" },
        { value: "Day 353,18-Dec,Zechariah 13-14", label: "Day 353,18-Dec,Zechariah 13-14" },
        { value: "Day 354,19-Dec,Malachi 1-4", label: "Day 354,19-Dec,Malachi 1-4" },
        { value: "Day 355,20-Dec,Holiday /Meditate", label: "Day 355,20-Dec,Holiday /Meditate" },
        { value: "Day 355,20-Dec,Holiday /Meditate", label: "Day 355,20-Dec,Holiday /Meditate" },
        { value: "Day 356,21-Dec,Holiday /Meditate", label: "Day 356,21-Dec,Holiday /Meditate" },
        { value: "Day 357,22-Dec,Holiday /Meditate", label: "Day 357,22-Dec,Holiday /Meditate" },
        { value: "Day 358,23-Dec,Holiday /Meditate", label: "Day 358,23-Dec,Holiday /Meditate" },
        { value: "Day 359,24-Dec,Holiday /Meditate", label: "Day 359,24-Dec,Holiday /Meditate" },
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

    ];
    //Function triggered on selection
    function handleSelect(data) {
        setSelectedOptions(data);
        console.log(data.value)
        props.sendDataToParent(data.value)
    }

    const clearSelection = () => {
        setSelectedOptions(null);
    }
    console.log(selectedOptions)
    return (
        <div className="app">
            <div className="dropdown-container">
                <Select

                    options={optionList}
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
    );
}