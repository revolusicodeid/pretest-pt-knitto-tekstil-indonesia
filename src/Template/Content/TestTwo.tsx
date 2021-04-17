import { useState } from 'react'
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

interface Input {
  array_source : [],
  array_tersedia : [],
}
interface Result {
  array_hilang : [],
}

function useFormFields<T>(initialState: T): [T, (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void] {
  const [inputs, setValues] = useState<T>(initialState);

  return [
      inputs,
      function (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const val = event.target.value;  
        const res = event.target.name === "array_source" ? convertArr(val) : convertArr(val);
        setValues({
            ...inputs,
            [event.target.name]: res
        });
      }
  ];
}

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
}));
const TestTwo = () => {
    const classes = useStyles();
    const [data_input,setDataInput] = useFormFields<Input>({
      array_source : [],
      array_tersedia : []
    });
    const [data_result,setDataResult] = useState<Result>({
      array_hilang : []
    });
    const handleSubmit = () => {
        const res = intersection(data_input.array_source,data_input.array_tersedia);
        setDataResult(prevState => ({
            ...prevState, array_hilang : res
        }));
    }
    return (
        <Box my={4}>
            <Grid container direction={'column'}>
                <Grid item xs={12}>
                    <Alert severity="warning">
                        "enter" to sparate each input array value with comma, then "submit" to check result
                    </Alert>
                </Grid>
                <Grid item xs={12} >
                    <TextareaAutosize
                      rowsMax={5}
                      rowsMin={5}
                      className={classes.formControl}
                      id="array_source"
                      name="array_source"
                      placeholder="Array Source"
                      onChange={setDataInput}
                    />
                    <TextareaAutosize
                      rowsMax={5}
                      rowsMin={5}
                      className={classes.formControl}
                      id="array_tersedia"
                      name="array_tersedia"
                      placeholder="Array Tersedia"
                      onChange={setDataInput}
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
                    Array Source : {data_input.array_source.join(',')}
                  </Typography>
                  <Typography variant="subtitle1" noWrap>
                    Array Tersedia : {data_input.array_tersedia.join(',')}
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
