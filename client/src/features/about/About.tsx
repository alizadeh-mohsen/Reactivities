import { Avatar, Box, Grid2, List, ListItem, ListItemIcon, Paper, Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export default function About() {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={8}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Backend Technologies and Features:
                        </Typography>
                        <List>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>C# .Net 9.0</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>ASP.NET Restful Web API</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Clean Architecture using the CQRS + Mediator pattern</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Entity Framework Core and SQL Server (Migrated to PostgreSQL)</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>AutoMapper and MediatR</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Identity and Authentication using .Net Core Identity</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Fluent Validation, Middleware and Interceptors </ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>SignalR for chat and comment</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Cloudinary for Image upload</ListItem>
                        </List>
                    </Paper>
                    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Frontend Technologies and Features:
                        </Typography>
                        <List>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>React 19.0 with Typescript</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Vite, Tanstack React Query and Axios</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>React Router</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>React Hook Form, Zod, Leaflet and LocationIQ to dispaly map</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>MobX as a clien side state management library</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Material UI</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Cursor pagination, sorting and filtering</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Photo Upload widget with React dropzone</ListItem>
                        </List>
                    </Paper>
                    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            CI/CD and Deployment:
                        </Typography>
                        <List>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Azuer App Service</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>Azure SQL Database (Migrated PostgreSQL on Supabase cloud)</ListItem>
                            <ListItem><ListItemIcon><StarIcon fontSize='small' sx={{ color: 'goldenrod' }} /></ListItemIcon>GitHub actions and workflow</ListItem>
                        </List>
                    </Paper>
                </Box>
            </Grid2>
            <Grid2 size={4} sx={{
                position: 'sticky',
                top: 112,
                alignSelf: 'flex-start'
            }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                    <Typography>
                        MeetUp is a web application built using .NET 9, C#, React 19, and SQL Server (Migrated to PostgreSQL), featuring the following capabilities:
                        <List>
                            <ListItem>- Create an account</ListItem>
                            <ListItem>- Build a profile</ListItem>
                            <ListItem>- Create events</ListItem>
                            <ListItem>- Search for events</ListItem>
                            <ListItem>- Join or leave events</ListItem>
                            <ListItem>- View the attendees list</ListItem>
                            <ListItem>- Follow other users</ListItem>
                            <ListItem>- Chat in real-time</ListItem>
                            <ListItem>- Post comments</ListItem>
                        </List>
                    </Typography>
                    <Stack direction='row' spacing={3} sx={{ mt: 3 }} alignItems='center'>
                        <Avatar
                            src={`/images/Mohsen.jpg`}
                            alt='current user image'
                            sx={{ width: 150, height: 150 }}
                        />
                        <Box display='flex' flexDirection='column' gap={2} sx={{ overflow: 'hidden' }}>
                            <Typography >Mohsen Alizadeh</Typography>
                            <Typography >Mobile: (+44) 7932742686</Typography>
                            <Typography >LinkedIn: <a  target="_blank" href="https://www.linkedin.com/in/mo-aliz/">linkedin.com/in/mo-aliz</a></Typography>
                        </Box>
                    </Stack>
                    <Typography sx={{ mt: 3 }} >The sourc code is avaiable on my <a target="_blank" href="https://github.com/alizadeh-mohsen/Reactivities">GitHub</a> page</Typography>
                </Paper>
            </Grid2>
        </Grid2>
    )
}