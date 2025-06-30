import { Box, List, ListItem, ListItemIcon, Paper } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
export default function About() {
    return (
        <Box alignItems='center' width='80%' mx='auto' >
            <Paper >
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
        </Box>
    )
}