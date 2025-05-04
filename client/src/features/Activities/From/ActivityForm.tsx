import { Box, Button, Paper, TextField, Typography } from "@mui/material";

type Props = {
    closeForm: () => void,
    activity?: Activity 
}
export default function ActivityForm({ closeForm ,activity}: Props) {
    return (
        <Paper sx={{ padding: 2, marginTop: 3, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">Create Activity</Typography>
            <Box component='form' display='flex' flexDirection='column' gap={1}>
                <TextField label="Title" defaultValue={activity?.title}/>
                <TextField label="Description" defaultValue={activity?.description} multiline rows={3} />
                <TextField label="Category" defaultValue={activity?.category}/>
                <TextField label="Date" type="date" defaultValue={activity?.date}/>
                <TextField label="City" defaultValue={activity?.city}/>
                <TextField label="Venue" defaultValue={activity?.venue} />
                <Box display='flex' justifyContent='end' gap={3}>
                    <Button color='inherit' onClick={closeForm}>Cancel</Button>
                    <Button color='success' onClick={() => console.log('Delete')}>Submit</Button>
                </Box>
            </Box>
        </Paper>
    )
}
