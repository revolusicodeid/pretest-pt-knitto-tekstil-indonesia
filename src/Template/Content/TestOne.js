import React, { useState } from 'react'
import { 
    Box, 
    Grid, 
    makeStyles, 
    Typography,
    TextareaAutosize
} from '@material-ui/core'
import { titleFormat, wordFormat } from '../../Helper/TextHelper';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
}));
const TestOne = () => {
    const classes = useStyles();
    const [data_input,setDataInput] = useState({
        format_judul : "",
        format_biasa : "",
    });
    const [data_result,setDataResult] = useState({
        format_judul : "",
        format_biasa : "",
    });
    const handleInputOnChange = (e) => {
        const val = e.target.value;
        const res = e.target.name === "format_judul" ? titleFormat(val) : wordFormat(val);
        setDataInput(prevState => ({
            ...prevState, [e.target.name] : val
        }));
        setDataResult(prevState => ({
            ...prevState, [e.target.name] : res
        }));
    }
    return (
        <Box my={4}>
            <Grid container direction={'column'}>
                <Grid item xs={12} >
                    <TextareaAutosize
                      rowsMax={5}
                      rowsMin={5}
                      className={classes.formControl}
                      fullWidth
                      id="format_judul"
                      label="Format Judul"
                      name="format_judul"
                      value={data_input.format_judul}
                      placeholder="Format Judul"
                      onChange={handleInputOnChange}
                    />
                    <TextareaAutosize
                      rowsMax={5}
                      rowsMin={5}
                      className={classes.formControl}
                      fullWidth
                      id="format_biasa"
                      label="Format Biasa"
                      name="format_biasa"
                      value={data_input.format_biasa}
                      placeholder="Format Biasa"
                      onChange={handleInputOnChange}
                    />
                </Grid>
                <Grid item xs={12} >
                  <Typography variant="subtitle1" noWrap>
                    Format Judul : {data_result.format_judul}
                  </Typography>
                  <Typography variant="subtitle1" noWrap>
                    Format Biasa : {data_result.format_biasa}
                  </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TestOne;
