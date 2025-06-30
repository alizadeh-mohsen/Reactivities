import { Avatar, Box, Grid2, List, ListItem, ListItemIcon, Paper, Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export default function About() {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={8}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                    <List>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>.Net 9.0, React 19.0 with Typescript</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Web API .Net Core</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Clean Architecture using the CQRS + Mediator pattern</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Entity Framework Core and SQL Server</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>AutoMapper and MediatR</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Identity and Authentication using .Net Core Identity</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Fluent Validation, Middleware and Interceptors </ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>SignalR for chat and comment</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Vite, Tanstack React Query and Axios</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>React Router</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>React Hook Form, Zod, Leaflet and LocationIQ to dispaly map</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>MobX as a clien side state management library</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Material UI</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Cursor pagination, sorting and filtering</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Cloudinary for Image upload</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Photo Upload widget with React dropzone</ListItem>
                        <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>GitHub actions and workflow for CI/CD and Azure publish</ListItem>
                    </List>
                </Paper>

            </Grid2>
            <Grid2 size={4}
                sx={{
                    position: 'sticky',
                    top: 112,
                    alignSelf: 'flex-start'
                }} >
                <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>

                    <Stack direction='row' spacing={3} alignItems='center'>
                        <Avatar
                            src={`/images/Mohsen.jpg`}
                            alt='current user image'
                            sx={{ width: 150, height: 150 }}
                        />
                        <Box display='flex' flexDirection='column' gap={2}>
                             <Typography >Mohsen Alizadeh</Typography>
                            <Typography >Mobile: (+44) 7932742686</Typography>
                            <Typography >LinkedIn: <a href="https://www.linkedin.com/in/mo-aliz/">linkedin.com/in/mo-aliz</a></Typography>
                        </Box>
                    </Stack>
                </Paper>
            </Grid2>
        </Grid2>
    )
}