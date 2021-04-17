import { useState } from 'react'
import { 
    Box, 
    Grid, 
    Button,
    makeStyles, 
    Typography,
    TextareaAutosize
} from '@material-ui/core'
import { titleFormat, wordFormat } from '../../Helper/TextHelper';

interface Input {
  format_judul : string,
  format_biasa : string,
}
interface Result {
  format_judul : string,
  format_biasa : string,
}

function useFormFields<T>(initialState: T): [T, (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void] {
  const [inputs, setValues] = useState<T>(initialState);

  return [
      inputs,
      function (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const val = event.target.value;
        setValues({
            ...inputs,
            [event.target.name]: val
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
const TestOne = () => {
    const classes = useStyles();
    const [data_input,setDataInput] = useFormFields<Input>({
        format_judul : "",
        format_biasa : "",
    });
    const [data_result,setDataResult] = useState<Result>({
        format_judul : "",
        format_biasa : "",
    });

    const handleSubmit = () => {
      setDataResult(prevState => ({
        ...prevState, format_judul : titleFormat(data_input.format_judul)
      }));
      setDataResult(prevState => ({
        ...prevState, format_biasa : wordFormat(data_input.format_biasa)
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
                      id="format_judul"
                      name="format_judul"
                      value={data_input.format_judul}
                      placeholder="Format Judul"
                      onChange={setDataInput}
                    />
                    <TextareaAutosize
                      rowsMax={5}
                      rowsMin={5}
                      className={classes.formControl}
                      id="format_biasa"
                      name="format_biasa"
                      value={data_input.format_biasa}
                      placeholder="Format Biasa"
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
