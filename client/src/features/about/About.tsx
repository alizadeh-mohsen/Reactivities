import { List, ListItem, Paper } from "@mui/material";

export default function About() {
    return (
        <Paper>
            <List>
                <ListItem>Net (9.0), React (with Typescript) and Mobx</ListItem>
                <ListItem>Web API .Net Core with Clean Architecture using the CQRS + Mediator pattern</ListItem>
                <ListItem>AutoMapper and MediatR</ListItem>
                <ListItem>Entity Framework Core</ListItem>
                <ListItem>integrate ASPNET Core SignalR into an application for real time web communication</ListItem>
                <ListItem>Intity and Authentication using .Net Core Identity</ListItem>
                <ListItem>Client side application for the API with React</ListItem>
                <ListItem>MobX as a state management library</ListItem>
                <ListItem>Photo upload widget with a Dropzone and a Cropper to resize images</ListItem>
            </List>
        </Paper>
    )
}