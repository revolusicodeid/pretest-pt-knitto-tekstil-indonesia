import React, { useState } from 'react'
import { 
    Box, 
    Grid, 
    makeStyles, 
    Typography,
    TextareaAutosize,
    Button
} from '@material-ui/core'
import { intersection, convertArr } from '../../Helper/ArrHelper';
import { Alert } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
}));
const TestTwo = () => {
    const classes = useStyles();
    const [data_result,setDataResult] = useState({
        array_source : [],
        array_tersedia : [],
        array_hilang : [],
    });
    const handleInputOnChange = (e) => {
        const val = e.target.value;
        const res = e.target.name === "array_source" ? convertArr(val) : convertArr(val);
        setDataResult(prevState => ({
            ...prevState, [e.target.name] : res
        }));
    }
    const handleSubmit = () => {
        const res = intersection(data_result.array_source,data_result.array_tersedia);
        setDataResult(prevState => ({
            ...prevState, array_hilang : res
        }));
    }
    return (
        <Box my={4}>
            <Grid container direction={'column'}>
                <Grid item xs={12}>
                    <Alert severity="warning">
                        use enter to fill your array, then submit to check result
                    </Alert>
                </Grid>
                <Grid item xs={12} >
                    <TextareaAutosize
                      rowsMax={5}
                      rowsMin={5}
                      className={classes.formControl}
                      fullWidth
                      id="array_source"
                      label="Array Source"
                      name="array_source"
                      placeholder="Array Source"
                      onChange={handleInputOnChange}
                    />
                    <TextareaAutosize
                      rowsMax={5}
                      rowsMin={5}
                      className={classes.formControl}
                      fullWidth
                      id="array_tersedia"
                      label="Array Tersedia"
                      name="array_tersedia"
                      placeholder="Array Tersedia"
                      onChange={handleInputOnChange}
                    />
                </Grid>
                <Grid item xs={12} >
                    <Button variant="contained"
                      color="default"
                      onClick={handleSubmit}
                    >Submit</Button>
                </Grid>
                <Grid item xs={12} >
                  <Typography variant="subtitle1" noWrap>
                    Array Source : {data_result.array_source.join(',')}
                  </Typography>
                  <Typography variant="subtitle1" noWrap>
                    Array Tersedia : {data_result.array_tersedia.join(',')}
                  </Typography>
                  <Typography variant="subtitle1" noWrap>
                    Array Hilang : {data_result.array_hilang.join(',')}
                  </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TestTwo;
